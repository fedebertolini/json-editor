import { createElement, Component } from 'react';
import PropTypes from 'prop-types';

export default function withEmitter(WrappedComponent) {
    return class extends Component {
        static displayName = `withEmitter(${WrappedComponent.displayName || WrappedComponent.name})`;

        static contextTypes = {
            emitter: PropTypes.object.isRequired,
        };

        render() {
            return createElement(WrappedComponent, {
                ...this.props,
                emitter: this.context.emitter,
            });
        }
    };
}
