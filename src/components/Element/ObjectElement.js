import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import Element from './Element';
import Actions from '../Actions';
import withEmitter from '../EventEmitter/withEmitter';

const getPropertyName = (path) => {
    return path.length ? `${path[path.length - 1]}` : 'object';
}

class ObjectElement extends Component {

    componentWillMount() {
        this.state = { collapse: !this.props.defaultExpanded };
        this.toggleCollapse = this.toggleCollapse.bind(this);
        this.collapseListener = this.props.emitter.addListener('collapse', (collapse) => {
            this.setState({ collapse: collapse });
        });
    }

    toggleCollapse() {
        this.setState({ collapse: !this.state.collapse });
    }

    render() {
        const { data, path, hasDataChanged } = this.props;
        const elements = data.keySeq().map(key => (
            <Element key={key} path={path.concat([key])} />
        ));

        return (
            <li className="element_item">
                <div className="element_item_title_container">
                    <span onClick={this.toggleCollapse} className="element_item_collapse">
                        <Icon name={`caret ${this.state.collapse ? 'right' : 'down'}`} />
                    </span>
                    <span className={`element_item_title ${hasDataChanged ? 'highlight' : ''}`}>
                        <span className="element_item_prop-name">
                            {getPropertyName(path)}
                        </span>
                        <span className="element_item_array-size">
                            {`{${data.size}}`}
                        </span>
                    </span>
                    <Actions
                        path={path}
                        allowAddProperty
                        allowDelete={!!path.length}
                        allowEdit={!!path.length}
                    />
                </div>
                <ul className={`element_list ${this.state.collapse ? 'hide' : ''}`}>
                    {elements}
                </ul>
            </li>
        );
    }

    componentWillUnmount() {
        this.collapseListener.remove();
    }
}

export default withEmitter(ObjectElement);
