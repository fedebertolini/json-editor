import { Component, Children } from 'react';
import PropTypes from 'prop-types';
import { EventEmitter } from 'fbemitter';

export default class EventEmitterProvider extends Component {

    static childContextTypes = {
        emitter: PropTypes.object.isRequired,
    }

    constructor(props, ...args) {
        super(props, ...args);

        this.emitter = new EventEmitter();
    }

    getChildContext() {
        return {
            emitter: this.emitter,
        };
    }

    render() {
        return Children.only(this.props.children);
    }
}
