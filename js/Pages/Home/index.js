import React, { Component } from 'react'
import io from 'socket.io-client';
import Stream from './stream';
import Media from './streamMedia';

export default class index extends Component {
    constructor(props) {
        super(props)

        this.state = {
            localStream: null,    // used to hold local stream object to avoid recreating the stream everytime a new offer comes
            remoteStream: null,    // used to hold remote stream object that is displayed in the main screen

            remoteStreams: [],    // holds all Video Streams (all remote streams)
            peerConnections: {},  // holds all Peer Connections
            selectedVideo: null,

            status: 'Please wait...',

            pc_config: {
                "iceServers": [
                    {
                        urls: 'stun:stun.l.google.com:19302'
                    }
                ]
            },

            sdpConstraints: {
                'mandatory': {
                    'OfferToReceiveAudio': true,
                    'OfferToReceiveVideo': true
                }
            },
        }

        // DONT FORGET TO CHANGE TO YOUR URL
        this.serviceIP = ' https://b5546937a93b.ngrok.io/webrtcPeer'

        this.socket = null
    }

    componentDidMount = () => {

        this.socket = io.connect(
            this.serviceIP,
            {
                path: '/webrtc',
                query: {}
            }
        )

        //1
        this.socket.on('connection-success', data => {
            this.getLocalStream()

            console.log(data.success)
            const status = data.peerCount > 1 ? `Total Connected Peers: ${data.peerCount}` : 'Waiting for other peers to connect'

            this.setState({
                status: status
            })
        });

        //jika ada peer yang disconnected
        this.socket.on('peer-disconnected', data => {
            console.log('peer-disconnected', data)

            const remoteStreams = this.state.remoteStreams.filter(stream => stream.id !== data.socketID)

            this.setState(prevState => {
                // check if disconnected peer is the selected video and if there still connected peers, then select the first
                const selectedVideo = prevState.selectedVideo.id === data.socketID && remoteStreams.length ? { selectedVideo: remoteStreams[0] } : null

                return {
                    remoteStreams,
                    ...selectedVideo,
                }
            }
            )
        })

        //cek siapa aja yang sedang online
        this.socket.on('online-peer', socketID => {
            console.log('connected peers ...', socketID)

            // create and send offer to the peer (data.socketID)
            // 1. Create new pc
            this.createPeerConnection(socketID, pc => {
                // 2. Create Offer
                if (pc)
                    pc.createOffer(this.state.sdpConstraints)
                        .then(sdp => {
                            pc.setLocalDescription(sdp)

                            this.sendToPeer('offer', sdp, {
                                local: this.socket.id,
                                remote: socketID
                            })
                        })
            })
        })

        //offer a.k.a memulai stream a.k.a memanggil peer lain 
        this.socket.on('offer', data => {
            this.createPeerConnection(data.socketID, pc => {
                pc.addStream(this.state.localStream)

                //1. membuat sdp baru untuk memulai streaming
                pc.setRemoteDescription(new RTCSessionDescription(data.sdp)).then(() => {
                    // 2. Create Answer.
                    pc.createAnswer(this.state.sdpConstraints)
                        .then(sdp => {
                            //local description adalah sdp untuk masing2 pc user
                            pc.setLocalDescription(sdp)

                            //kirim ke socket untuk dipancarkan (emit)
                            this.sendToPeer('answer', sdp, {
                                local: this.socket.id,
                                remote: data.socketID
                            })
                        })
                })
            })
        })

        //menjawab panggilan a.k.a join streaming dengan yang meng-offer tadi
        this.socket.on('answer', data => {
            // get remote's peerConnection
            //remote desc adalah sdp untuk pc lain yang konek dengan pc kita
            const pc = this.state.peerConnections[data.socketID]
            console.log(data.sdp)
            pc.setRemoteDescription(new RTCSessionDescription(data.sdp))
                .then(() => { })
        })

        this.socket.on('candidate', (data) => {
            // get remote's peerConnection
            const pc = this.state.peerConnections[data.socketID]

            if (pc)
                pc.addIceCandidate(new RTCIceCandidate(data.candidate))
        })

    }

    switchVideo = (_video) => {
        console.log(_video)
        this.setState({
            selectedVideo: _video
        })
    }

    sendToPeer = (messageType, payload) => {
        this.socket.emit(messageType, {
            socketID: this.socket.id,
            payload
        })
    }

    //methods

    getLocalStream = () => {
        // called when getUserMedia() successfully returns - see below
        const success = (stream) => {
            window.localStream = stream
            this.setState({
                localStream: stream
            })

            this.whoisOnline()
        }
        //called when getUserMedia() fails - see below
        const failure = (e) => {
            console.log('getUserMedia Error: ', e)
        }

        // https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
        // link di atas untuk memperlihatkan constraints apa saja
        const constraints = {
            // audio: true,
            video: true,
            options: {
                mirror: true,
            }
        }

        //getusermedia untuk mengaktifkan media seperti video dan/atau audio
        navigator.mediaDevices.getUserMedia(constraints)
            .then(success)
            .catch(failure)
    }

    whoisOnline = () => {
        // mengirimkan kepada peers lain kalau saya join stream
        this.sendToPeer('onlinePeers', null, { local: this.socket.id })
    }

    //mengirimkan message untuk dipancarkan (emit) di socket io
    sendToPeer = (messageType, payload, socketID) => {
        this.socket.emit(messageType, {
            socketID,
            payload
        })
    }

    //method yang berisi langkah2 untuk mmbuat koneksi peer-to-peer
    createPeerConnection = (socketID, callback) => {
        try {
            let pc = new RTCPeerConnection(this.state.pc_config)

            // add pc to peerConnections object
            const peerConnections = { ...this.state.peerConnections, [socketID]: pc }
            this.setState({
                peerConnections
            })

            pc.onicecandidate = (e) => {
                if (e.candidate) {
                    this.sendToPeer('candidate', e.candidate, {
                        local: this.socket.id,
                        remote: socketID
                    })
                }
            }

            // pc.oniceconnectionstatechange = (e) => {
            //     // if (pc.iceConnectionState === 'disconnected') {
            //     //   const remoteStreams = this.state.remoteStreams.filter(stream => stream.id !== socketID)

            //     //   this.setState({
            //     //     remoteStream: remoteStreams.length > 0 && remoteStreams[0].stream || null,
            //     //   })
            //     // }

            // }

            pc.ontrack = (e) => {
                const remoteVideo = {
                    id: socketID,
                    name: socketID,
                    stream: e.streams[0]
                }

                this.setState(prevState => {

                    // If we already have a stream in display let it stay the same, otherwise use the latest stream
                    const remoteStream = prevState.remoteStreams.length > 0 ? {} : { remoteStream: e.streams[0] }

                    // get currently selected video
                    let selectedVideo = prevState.remoteStreams.filter(stream => stream.id === prevState.selectedVideo.id)
                    // if the video is still in the list, then do nothing, otherwise set to new video stream
                    selectedVideo = selectedVideo.length ? {} : { selectedVideo: remoteVideo }

                    return {
                        // selectedVideo: remoteVideo,
                        ...selectedVideo,
                        // remoteStream: e.streams[0],
                        ...remoteStream,
                        remoteStreams: [...prevState.remoteStreams, remoteVideo]
                    }
                })
            }

            pc.close = () => {
                console.log('this user is off');
            }

            if (this.state.localStream)
                pc.addStream(this.state.localStream)

            // memanggil promise pc 
            callback(pc)

        } catch (e) {
            console.log('Something went wrong! pc not created!!', e)
            callback(null)
        }
    }



    render() {

        console.log(this.state.localStream)

        const statusText = <div style={{ color: 'yellow', padding: 5 }}>{this.state.status}</div>

        return (
            <div>
                <Stream
                    videoStyles={{
                        zIndex: 2,
                        position: 'absolute',
                        right: 0,
                        width: 200,
                        height: 200,
                        margin: 5,
                        backgroundColor: 'black'
                    }}
                    // ref={this.localVideoref}
                    videoStream={this.state.localStream}
                    autoPlay muted>
                </Stream>
                <Stream
                    videoStyles={{
                        zIndex: 1,
                        position: 'fixed',
                        bottom: 0,
                        minWidth: '100%',
                        minHeight: '100%',
                        backgroundColor: 'black'
                    }}
                    // ref={ this.remoteVideoref }
                    videoStream={this.state.selectedVideo && this.state.selectedVideo.stream}
                    autoPlay>
                </Stream>
                <br />
                <div style={{
                    zIndex: 3,
                    position: 'absolute',
                    margin: 10,
                    backgroundColor: '#cdc4ff4f',
                    padding: 10,
                    borderRadius: 5,
                }}>
                    {statusText}
                </div>
                <div>
                    <Media
                        switchVideo={this.switchVideo}
                        remoteStreams={this.state.remoteStreams}
                    ></Media>
                </div>
                <br />

            </div>
        )
    }
}
