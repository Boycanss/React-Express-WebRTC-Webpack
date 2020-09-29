import { Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import React, { Component } from 'react'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Count from './Pages/Count';

export default class routes extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/count" component={Count} />
            </div>
        )
    }
}
