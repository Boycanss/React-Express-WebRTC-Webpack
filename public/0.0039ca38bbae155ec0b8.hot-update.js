webpackHotUpdate(0,{80:function(t,n,e){"use strict";e.r(n);var r=e(0),o=e.n(r),i=e(38),a=e.n(i),c=e(1);e(3);function u(){return(u=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}function f(t){return"/"===t.charAt(0)}function s(t,n){for(var e=n,r=e+1,o=t.length;r<o;e+=1,r+=1)t[e]=t[r];t.pop()}var l=function(t,n){void 0===n&&(n="");var e,r=t&&t.split("/")||[],o=n&&n.split("/")||[],i=t&&f(t),a=n&&f(n),c=i||a;if(t&&f(t)?o=r:r.length&&(o.pop(),o=o.concat(r)),!o.length)return"/";if(o.length){var u=o[o.length-1];e="."===u||".."===u||""===u}else e=!1;for(var l=0,p=o.length;p>=0;p--){var h=o[p];"."===h?s(o,p):".."===h?(s(o,p),l++):l&&(s(o,p),l--)}if(!c)for(;l--;l)o.unshift("..");!c||""===o[0]||o[0]&&f(o[0])||o.unshift("");var d=o.join("/");return e&&"/"!==d.substr(-1)&&(d+="/"),d};var p=function(t,n){if(!t)throw new Error("Invariant failed")};function h(t){return"/"===t.charAt(0)?t:"/"+t}function d(t){return"/"===t.charAt(0)?t.substr(1):t}function v(t,n){return function(t,n){return 0===t.toLowerCase().indexOf(n.toLowerCase())&&-1!=="/?#".indexOf(t.charAt(n.length))}(t,n)?t.substr(n.length):t}function y(t){return"/"===t.charAt(t.length-1)?t.slice(0,-1):t}function m(t){var n=t.pathname,e=t.search,r=t.hash,o=n||"/";return e&&"?"!==e&&(o+="?"===e.charAt(0)?e:"?"+e),r&&"#"!==r&&(o+="#"===r.charAt(0)?r:"#"+r),o}function g(t,n,e,r){var o;"string"==typeof t?(o=function(t){var n=t||"/",e="",r="",o=n.indexOf("#");-1!==o&&(r=n.substr(o),n=n.substr(0,o));var i=n.indexOf("?");return-1!==i&&(e=n.substr(i),n=n.substr(0,i)),{pathname:n,search:"?"===e?"":e,hash:"#"===r?"":r}}(t)).state=n:(void 0===(o=u({},t)).pathname&&(o.pathname=""),o.search?"?"!==o.search.charAt(0)&&(o.search="?"+o.search):o.search="",o.hash?"#"!==o.hash.charAt(0)&&(o.hash="#"+o.hash):o.hash="",void 0!==n&&void 0===o.state&&(o.state=n));try{o.pathname=decodeURI(o.pathname)}catch(t){throw t instanceof URIError?new URIError('Pathname "'+o.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):t}return e&&(o.key=e),r?o.pathname?"/"!==o.pathname.charAt(0)&&(o.pathname=l(o.pathname,r.pathname)):o.pathname=r.pathname:o.pathname||(o.pathname="/"),o}function b(){var t=null;var n=[];return{setPrompt:function(n){return t=n,function(){t===n&&(t=null)}},confirmTransitionTo:function(n,e,r,o){if(null!=t){var i="function"==typeof t?t(n,e):t;"string"==typeof i?"function"==typeof r?r(i,o):o(!0):o(!1!==i)}else o(!0)},appendListener:function(t){var e=!0;function r(){e&&t.apply(void 0,arguments)}return n.push(r),function(){e=!1,n=n.filter((function(t){return t!==r}))}},notifyListeners:function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];n.forEach((function(t){return t.apply(void 0,e)}))}}}var w=!("undefined"==typeof window||!window.document||!window.document.createElement);function O(t,n){n(window.confirm(t))}function P(){try{return window.history.state||{}}catch(t){return{}}}function E(t){void 0===t&&(t={}),w||p(!1);var n,e=window.history,r=(-1===(n=window.navigator.userAgent).indexOf("Android 2.")&&-1===n.indexOf("Android 4.0")||-1===n.indexOf("Mobile Safari")||-1!==n.indexOf("Chrome")||-1!==n.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history,o=!(-1===window.navigator.userAgent.indexOf("Trident")),i=t,a=i.forceRefresh,c=void 0!==a&&a,f=i.getUserConfirmation,s=void 0===f?O:f,l=i.keyLength,d=void 0===l?6:l,E=t.basename?y(h(t.basename)):"";function x(t){var n=t||{},e=n.key,r=n.state,o=window.location,i=o.pathname+o.search+o.hash;return E&&(i=v(i,E)),g(i,r,e)}function C(){return Math.random().toString(36).substr(2,d)}var R=b();function k(t){u(H,t),H.length=e.length,R.notifyListeners(H.location,H.action)}function S(t){(function(t){return void 0===t.state&&-1===navigator.userAgent.indexOf("CriOS")})(t)||j(x(t.state))}function A(){j(x(P()))}var T=!1;function j(t){if(T)T=!1,k();else{R.confirmTransitionTo(t,"POP",s,(function(n){n?k({action:"POP",location:t}):function(t){var n=H.location,e=L.indexOf(n.key);-1===e&&(e=0);var r=L.indexOf(t.key);-1===r&&(r=0);var o=e-r;o&&(T=!0,U(o))}(t)}))}}var _=x(P()),L=[_.key];function D(t){return E+m(t)}function U(t){e.go(t)}var M=0;function I(t){1===(M+=t)&&1===t?(window.addEventListener("popstate",S),o&&window.addEventListener("hashchange",A)):0===M&&(window.removeEventListener("popstate",S),o&&window.removeEventListener("hashchange",A))}var N=!1;var H={length:e.length,action:"POP",location:_,createHref:D,push:function(t,n){var o=g(t,n,C(),H.location);R.confirmTransitionTo(o,"PUSH",s,(function(t){if(t){var n=D(o),i=o.key,a=o.state;if(r)if(e.pushState({key:i,state:a},null,n),c)window.location.href=n;else{var u=L.indexOf(H.location.key),f=L.slice(0,u+1);f.push(o.key),L=f,k({action:"PUSH",location:o})}else window.location.href=n}}))},replace:function(t,n){var o=g(t,n,C(),H.location);R.confirmTransitionTo(o,"REPLACE",s,(function(t){if(t){var n=D(o),i=o.key,a=o.state;if(r)if(e.replaceState({key:i,state:a},null,n),c)window.location.replace(n);else{var u=L.indexOf(H.location.key);-1!==u&&(L[u]=o.key),k({action:"REPLACE",location:o})}else window.location.replace(n)}}))},go:U,goBack:function(){U(-1)},goForward:function(){U(1)},block:function(t){void 0===t&&(t=!1);var n=R.setPrompt(t);return N||(I(1),N=!0),function(){return N&&(N=!1,I(-1)),n()}},listen:function(t){var n=R.appendListener(t);return I(1),function(){I(-1),n()}}};return H}var x={hashbang:{encodePath:function(t){return"!"===t.charAt(0)?t:"!/"+d(t)},decodePath:function(t){return"!"===t.charAt(0)?t.substr(1):t}},noslash:{encodePath:d,decodePath:h},slash:{encodePath:h,decodePath:h}};function C(t){var n=t.indexOf("#");return-1===n?t:t.slice(0,n)}function R(){var t=window.location.href,n=t.indexOf("#");return-1===n?"":t.substring(n+1)}function k(t){window.location.replace(C(window.location.href)+"#"+t)}function S(t){void 0===t&&(t={}),w||p(!1);var n=window.history,e=(window.navigator.userAgent.indexOf("Firefox"),t),r=e.getUserConfirmation,o=void 0===r?O:r,i=e.hashType,a=void 0===i?"slash":i,c=t.basename?y(h(t.basename)):"",f=x[a],s=f.encodePath,l=f.decodePath;function d(){var t=l(R());return c&&(t=v(t,c)),g(t)}var P=b();function E(t){u(H,t),H.length=n.length,P.notifyListeners(H.location,H.action)}var S=!1,A=null;function T(){var t,n,e=R(),r=s(e);if(e!==r)k(r);else{var i=d(),a=H.location;if(!S&&(n=i,(t=a).pathname===n.pathname&&t.search===n.search&&t.hash===n.hash))return;if(A===m(i))return;A=null,function(t){if(S)S=!1,E();else{P.confirmTransitionTo(t,"POP",o,(function(n){n?E({action:"POP",location:t}):function(t){var n=H.location,e=D.lastIndexOf(m(n));-1===e&&(e=0);var r=D.lastIndexOf(m(t));-1===r&&(r=0);var o=e-r;o&&(S=!0,U(o))}(t)}))}}(i)}}var j=R(),_=s(j);j!==_&&k(_);var L=d(),D=[m(L)];function U(t){n.go(t)}var M=0;function I(t){1===(M+=t)&&1===t?window.addEventListener("hashchange",T):0===M&&window.removeEventListener("hashchange",T)}var N=!1;var H={length:n.length,action:"POP",location:L,createHref:function(t){var n=document.querySelector("base"),e="";return n&&n.getAttribute("href")&&(e=C(window.location.href)),e+"#"+s(c+m(t))},push:function(t,n){var e=g(t,void 0,void 0,H.location);P.confirmTransitionTo(e,"PUSH",o,(function(t){if(t){var n=m(e),r=s(c+n);if(R()!==r){A=n,function(t){window.location.hash=t}(r);var o=D.lastIndexOf(m(H.location)),i=D.slice(0,o+1);i.push(n),D=i,E({action:"PUSH",location:e})}else E()}}))},replace:function(t,n){var e=g(t,void 0,void 0,H.location);P.confirmTransitionTo(e,"REPLACE",o,(function(t){if(t){var n=m(e),r=s(c+n);R()!==r&&(A=n,k(r));var o=D.indexOf(m(H.location));-1!==o&&(D[o]=n),E({action:"REPLACE",location:e})}}))},go:U,goBack:function(){U(-1)},goForward:function(){U(1)},block:function(t){void 0===t&&(t=!1);var n=P.setPrompt(t);return N||(I(1),N=!0),function(){return N&&(N=!1,I(-1)),n()}},listen:function(t){var n=P.appendListener(t);return I(1),function(){I(-1),n()}}};return H}function A(t,n,e){return Math.min(Math.max(t,n),e)}function T(t){void 0===t&&(t={});var n=t,e=n.getUserConfirmation,r=n.initialEntries,o=void 0===r?["/"]:r,i=n.initialIndex,a=void 0===i?0:i,c=n.keyLength,f=void 0===c?6:c,s=b();function l(t){u(w,t),w.length=w.entries.length,s.notifyListeners(w.location,w.action)}function p(){return Math.random().toString(36).substr(2,f)}var h=A(a,0,o.length-1),d=o.map((function(t){return g(t,void 0,"string"==typeof t?p():t.key||p())})),v=m;function y(t){var n=A(w.index+t,0,w.entries.length-1),r=w.entries[n];s.confirmTransitionTo(r,"POP",e,(function(t){t?l({action:"POP",location:r,index:n}):l()}))}var w={length:d.length,action:"POP",location:d[h],index:h,entries:d,createHref:v,push:function(t,n){var r=g(t,n,p(),w.location);s.confirmTransitionTo(r,"PUSH",e,(function(t){if(t){var n=w.index+1,e=w.entries.slice(0);e.length>n?e.splice(n,e.length-n,r):e.push(r),l({action:"PUSH",location:r,index:n,entries:e})}}))},replace:function(t,n){var r=g(t,n,p(),w.location);s.confirmTransitionTo(r,"REPLACE",e,(function(t){t&&(w.entries[w.index]=r,l({action:"REPLACE",location:r}))}))},go:y,goBack:function(){y(-1)},goForward:function(){y(1)},canGo:function(t){var n=w.index+t;return n>=0&&n<w.entries.length},block:function(t){return void 0===t&&(t=!1),s.setPrompt(t)},listen:function(t){return s.appendListener(t)}};return w}var j=e(19),_=e(20),L=e.n(_);e(37);function D(t,n){if(null==t)return{};var e,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(o[e]=t[e]);return o}e(40);var U=function(t){var n=Object(j.a)();return n.displayName=t,n}("Router-History"),M=function(t){var n=Object(j.a)();return n.displayName=t,n}("Router"),I=function(t){function n(n){var e;return(e=t.call(this,n)||this).state={location:n.history.location},e._isMounted=!1,e._pendingLocation=null,n.staticContext||(e.unlisten=n.history.listen((function(t){e._isMounted?e.setState({location:t}):e._pendingLocation=t}))),e}Object(c.a)(n,t),n.computeRootMatch=function(t){return{path:"/",url:"/",params:{},isExact:"/"===t}};var e=n.prototype;return e.componentDidMount=function(){this._isMounted=!0,this._pendingLocation&&this.setState({location:this._pendingLocation})},e.componentWillUnmount=function(){this.unlisten&&this.unlisten()},e.render=function(){return o.a.createElement(M.Provider,{value:{history:this.props.history,location:this.state.location,match:n.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},o.a.createElement(U.Provider,{children:this.props.children||null,value:this.props.history}))},n}(o.a.Component);o.a.Component;o.a.Component;var N={},H=0;function V(t,n){void 0===n&&(n={}),("string"==typeof n||Array.isArray(n))&&(n={path:n});var e=n,r=e.path,o=e.exact,i=void 0!==o&&o,a=e.strict,c=void 0!==a&&a,u=e.sensitive,f=void 0!==u&&u;return[].concat(r).reduce((function(n,e){if(!e&&""!==e)return null;if(n)return n;var r=function(t,n){var e=""+n.end+n.strict+n.sensitive,r=N[e]||(N[e]={});if(r[t])return r[t];var o=[],i={regexp:L()(t,o,n),keys:o};return H<1e4&&(r[t]=i,H++),i}(e,{end:i,strict:c,sensitive:f}),o=r.regexp,a=r.keys,u=o.exec(t);if(!u)return null;var s=u[0],l=u.slice(1),p=t===s;return i&&!p?null:{path:e,url:"/"===e&&""===s?"/":s,isExact:p,params:a.reduce((function(t,n,e){return t[n.name]=l[e],t}),{})}}),null)}var F=function(t){function n(){return t.apply(this,arguments)||this}return Object(c.a)(n,t),n.prototype.render=function(){var t=this;return o.a.createElement(M.Consumer,null,(function(n){n||p(!1);var e=t.props.location||n.location,r=u({},n,{location:e,match:t.props.computedMatch?t.props.computedMatch:t.props.path?V(e.pathname,t.props):n.match}),i=t.props,a=i.children,c=i.component,f=i.render;return Array.isArray(a)&&0===a.length&&(a=null),o.a.createElement(M.Provider,{value:r},r.match?a?"function"==typeof a?a(r):a:c?o.a.createElement(c,r):f?f(r):null:"function"==typeof a?a(r):null)}))},n}(o.a.Component);function B(t){return"/"===t.charAt(0)?t:"/"+t}function K(t,n){if(!t)return n;var e=B(t);return 0!==n.pathname.indexOf(e)?n:u({},n,{pathname:n.pathname.substr(e.length)})}function G(t){return"string"==typeof t?t:m(t)}function J(t){return function(){p(!1)}}function q(){}o.a.Component;o.a.Component;o.a.useContext;var W=function(t){function n(){for(var n,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(n=t.call.apply(t,[this].concat(r))||this).history=E(n.props),n}return Object(c.a)(n,t),n.prototype.render=function(){return o.a.createElement(I,{history:this.history,children:this.props.children})},n}(o.a.Component);o.a.Component;var $=function(t,n){return"function"==typeof t?t(n):t},z=function(t,n){return"string"==typeof t?g(t,null,null,n):t},Q=function(t){return t},X=o.a.forwardRef;void 0===X&&(X=Q);var Y=X((function(t,n){var e=t.innerRef,r=t.navigate,i=t.onClick,a=D(t,["innerRef","navigate","onClick"]),c=a.target,f=u({},a,{onClick:function(t){try{i&&i(t)}catch(n){throw t.preventDefault(),n}t.defaultPrevented||0!==t.button||c&&"_self"!==c||function(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}(t)||(t.preventDefault(),r())}});return f.ref=Q!==X&&n||e,o.a.createElement("a",f)}));var Z=X((function(t,n){var e=t.component,r=void 0===e?Y:e,i=t.replace,a=t.to,c=t.innerRef,f=D(t,["component","replace","to","innerRef"]);return o.a.createElement(M.Consumer,null,(function(t){t||p(!1);var e=t.history,s=z($(a,t.location),t.location),l=s?e.createHref(s):"",h=u({},f,{href:l,navigate:function(){var n=$(a,t.location);(i?e.replace:e.push)(n)}});return Q!==X?h.ref=n||c:h.innerRef=c,o.a.createElement(r,h)}))})),tt=function(t){return t},nt=o.a.forwardRef;void 0===nt&&(nt=tt);nt((function(t,n){var e=t["aria-current"],r=void 0===e?"page":e,i=t.activeClassName,a=void 0===i?"active":i,c=t.activeStyle,f=t.className,s=t.exact,l=t.isActive,h=t.location,d=t.sensitive,v=t.strict,y=t.style,m=t.to,g=t.innerRef,b=D(t,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return o.a.createElement(M.Consumer,null,(function(t){t||p(!1);var e=h||t.location,i=z($(m,e),e),w=i.pathname,O=w&&w.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),P=O?V(e.pathname,{path:O,exact:s,sensitive:d,strict:v}):null,E=!!(l?l(P,e):P),x=E?function(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];return n.filter((function(t){return t})).join(" ")}(f,a):f,C=E?u({},y,{},c):y,R=u({"aria-current":E&&r||null,className:x,style:C,to:i},b);return tt!==nt?R.ref=n||g:R.innerRef=g,o.a.createElement(Z,R)}))}));var et=e(39),rt=e.n(et);function ot(t){return(ot="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function it(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function at(t,n){return(at=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function ct(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=st(t);if(n){var o=st(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return ut(this,e)}}function ut(t,n){return!n||"object"!==ot(n)&&"function"!=typeof n?ft(t):n}function ft(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function st(t){return(st=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function lt(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var pt=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&at(t,n)}(a,t);var n,e,r,i=ct(a);function a(t){var n;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,a),lt(ft(n=i.call(this,t)),"componentDidMount",(function(){n.socket=rt()("/webrtcPeer",{path:"/webrtc",query:{}}),n.socket.on("connection-success",(function(t){console.log(t)})),n.socket.on("offerOrAnswer",(function(t){n.textref.value=JSON.stringify(t),n.pc.setRemoteDescription(new RTCSessionDescription(t))})),n.socket.on("candidate",(function(t){n.pc.addIceCandidate(new RTCIceCandidate(t))}));n.pc=new RTCPeerConnection({iceServers:[{urls:"stun:stun.l.google.com:19302"}]}),n.pc.onicecandidate=function(t){t.candidate&&n.sendToPeer("candidate",t.candidate)},n.pc.oniceconnectionstatechange=function(t){console.log(t)},n.pc.onaddstream=function(t){n.remoteVideoref.current.srcObject=t.stream};navigator.mediaDevices.getUserMedia({audio:!1,video:!0}).then((function(t){window.localStream=t,n.localVideoref.current.srcObject=t,n.pc.addStream(t)})).catch((function(t){console.log("getUserMedia Error: ",t)}))})),lt(ft(n),"sendToPeer",(function(t,e){n.socket.emit(t,{socketID:n.socket.id,payload:e})})),lt(ft(n),"createOffer",(function(){console.log("Offer"),n.pc.createOffer({offerToReceiveVideo:1}).then((function(t){n.pc.setLocalDescription(t),n.sendToPeer("offerOrAnswer",t)}))})),lt(ft(n),"createAnswer",(function(){console.log("Answer"),n.pc.createAnswer({offerToReceiveVideo:1}).then((function(t){n.pc.setLocalDescription(t),n.sendToPeer("offerOrAnswer",t)}))})),lt(ft(n),"setRemoteDescription",(function(){var t=JSON.parse(n.textref.value);n.pc.setRemoteDescription(new RTCSessionDescription(t))})),lt(ft(n),"addCandidate",(function(){n.candidates.forEach((function(t){console.log(JSON.stringify(t)),n.pc.addIceCandidate(new RTCIceCandidate(t))}))})),n.localVideoref=o.a.createRef(),n.remoteVideoref=o.a.createRef(),n.socket=null,n.candidates=[],n}return n=a,(e=[{key:"render",value:function(){var t=this;return o.a.createElement("div",{style:{color:"red"}},o.a.createElement("h1",null,"VIDEO CONFERENCE TEST GG"),o.a.createElement("video",{style:{width:240,height:240,margin:5,backgroundColor:"black"},ref:this.localVideoref,autoPlay:!0}),o.a.createElement("video",{style:{width:240,height:240,margin:5,backgroundColor:"black"},ref:this.remoteVideoref,autoPlay:!0}),o.a.createElement("br",null),o.a.createElement("button",{onClick:this.createOffer},"Offer"),o.a.createElement("button",{onClick:this.createAnswer},"Answer"),o.a.createElement("br",null),o.a.createElement("textarea",{style:{width:450,height:40},ref:function(n){t.textref=n}}))}}])&&it(n.prototype,e),r&&it(n,r),a}(r.Component);e(74),e(75);function ht(t){return(ht="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function dt(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function vt(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function yt(t,n){return(yt=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function mt(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=bt(t);if(n){var o=bt(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return gt(this,e)}}function gt(t,n){return!n||"object"!==ht(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function bt(t){return(bt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var wt=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&yt(t,n)}(a,t);var n,e,r,i=mt(a);function a(){return dt(this,a),i.apply(this,arguments)}return n=a,(e=[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"COUNT"))}}])&&vt(n.prototype,e),r&&vt(n,r),a}(r.Component);function Ot(t){return(Ot="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Pt(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function Et(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function xt(t,n){return(xt=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function Ct(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=kt(t);if(n){var o=kt(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return Rt(this,e)}}function Rt(t,n){return!n||"object"!==Ot(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function kt(t){return(kt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var St=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&xt(t,n)}(a,t);var n,e,r,i=Ct(a);function a(){return Pt(this,a),i.apply(this,arguments)}return n=a,(e=[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(F,{exact:!0,path:"/",component:pt}),o.a.createElement(F,{path:"/count",component:wt}))}}])&&Et(n.prototype,e),r&&Et(n,r),a}(r.Component);a.a.render(o.a.createElement(W,null,o.a.createElement(St,null)),document.getElementById("root"))}});