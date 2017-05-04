import React from 'react';
import { Card, Form, TextArea } from 'semantic-ui-react'

const JsonCard = () => (
    <Card fluid>
        <Card.Content>
            <Card.Header>
                JSON
            </Card.Header>
        </Card.Content>
        <Card.Content>
            <Form size="large">
                <Form.Field>
                    <TextArea />
                </Form.Field>
            </Form>
        </Card.Content>
    </Card>
);

export default JsonCard;
