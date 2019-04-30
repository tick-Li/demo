import React, { Component } from 'react';

export default class ReactComponent extends Component {
    state = {}
    componentWillUnmount() {
        this.setState = () => { return };
    }
    render() {
        return(
            <div>index</div>
        )
    }
}