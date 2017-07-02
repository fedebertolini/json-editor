import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Form, Message } from 'semantic-ui-react';
import { loadData } from '../../store/actions/saved';

class JsonCard extends Component {
    componentWillMount() {
        this.state = {
            json: '',
            error: '',
        };
    }

    onChangeData(e, { value }) {
        this.setState({ json: value });
    }

    onSubmit(e) {
        e.preventDefault();
        try {
            const parsedObject = JSON.parse(this.state.json);
            this.props.loadData(parsedObject);
        } catch (e) {
            this.setState({ error: e.message });
        }
    }

    render() {
        const { error } = this.state;
        return (
            <Card fluid>
                <Card.Content className="json-loader__card-title">
                    <Card.Header>
                        Enter JSON object
                    </Card.Header>
                </Card.Content>
                <Card.Content>
                    <Form
                        size="large"
                        onSubmit={this.onSubmit.bind(this)}
                        error={!!error}
                    >
                        <Form.Group>
                            <Form.TextArea
                                width={16}
                                onChange={this.onChangeData.bind(this)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Button
                                content='Load'
                                width={16}
                                fluid
                                primary
                                disabled={!this.state.json}
                            />
                        </Form.Group>
                        {error && <Message error content={error} />}
                    </Form>
                </Card.Content>
            </Card>
        )
    }
}

const mapDispatchToProps = {
    loadData,
};

export default connect(null, mapDispatchToProps)(JsonCard);
