import React, { Component } from 'react';
import { Form, Input } from 'semantic-ui-react';
import throttle from 'lodash/throttle';
import TypeSelector from './TypeSelector';
import ValueInput from './ValueInput';
import { getValueType, getDefaultValue } from '../../utils/valueTypes';

class ValueEditor extends Component {

    componentWillMount() {
        this.onNameChange = this.onNameChange.bind(this);
        this.onTypeChange = this.onTypeChange.bind(this);
        this.onValueChange = this.onValueChange.bind(this);

        this.state = {
            type: getValueType(this.props.value),
        };
    }

    onNameChange(event, data) {
        this.onChange(data.value, this.props.value);
    }

    onTypeChange(type) {
        if (type !== this.state.type) {
            this.setState({ type: type });
            this.onChange(this.props.name, getDefaultValue(type));
        }
    }

    onValueChange(value) {
        if (value !== this.props.value) {
            this.onChange(this.props.name, value);
        }
    }

    showValue() {
        return ['string', 'number', 'boolean'].some(t => this.state.type === t);
    }

    onChange(name, value) {
        this.props.onChange(name, value);
    }

    render() {
        return (
            <Form.Group>
                <Form.Field width={4}>
                    <label>Type</label>
                    <TypeSelector
                        onChange={this.onTypeChange}
                        selectedType={this.state.type}
                    />
                </Form.Field>
                <Form.Field width={4}>
                    <label>Name</label>
                    <Input
                        onChange={throttle(this.onNameChange, 250)}
                        defaultValue={this.props.name}
                    />
                </Form.Field>
                <Form.Field width={8}>
                    {this.showValue() && (<label>Value</label>)}
                    <ValueInput
                        value={this.props.value}
                        onChange={this.onValueChange}
                    />
                </Form.Field>
            </Form.Group>
        );
    }
}

export default ValueEditor;
