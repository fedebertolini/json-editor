import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Form, Message } from 'semantic-ui-react'
import { selectIsInProgress, selectError } from '../../store/selectors/saved';
import { fetchData } from '../../store/actions/saved';

class UrlCard extends Component {
    componentWillMount() {
        this.state = {
            url: '',
        }
    }

    onChangeUrl(e, { value }) {
        this.setState({
            url: value,
        })
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.state.url) {
            this.props.fetchData(this.state.url);
        }
    }

    render() {
        const { inProgress, error } = this.props;
        console.log(error);
        return (
            <Card fluid>
                <Card.Content className="json-loader__card-title">
                    <Card.Header>
                        Load JSON from URL
                    </Card.Header>
                </Card.Content>
                <Card.Content>
                    <Form
                        size="large"
                        loading={inProgress}
                        onSubmit={this.onSubmit.bind(this)}
                        error={!!error}
                    >
                        <Form.Group>
                            <Form.Input
                                placeholder='URL'
                                width={12}
                                onChange={this.onChangeUrl.bind(this)}
                            />
                            <Form.Button
                                content='Fetch'
                                width={4}
                                fluid
                                primary
                                disabled={!this.state.url}
                            />
                        </Form.Group>
                        {error && <Message error content={error} />}
                    </Form>
                </Card.Content>
            </Card>
        )
    }
}

const mapStateToProps = state => ({
    inProgress: selectIsInProgress(state),
    error: selectError(state),
});

const mapDispatchToProps = {
    fetchData,
};

export default connect(mapStateToProps, mapDispatchToProps)(UrlCard);
