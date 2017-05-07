import React from 'react';
import { Card, Form } from 'semantic-ui-react'

const UrlCard = () => (
    <Card fluid>
        <Card.Content className="json-loader__card-title">
            <Card.Header>
                Load JSON from URL
            </Card.Header>
        </Card.Content>
        <Card.Content>
            <Form size="large">
                <Form.Group>
                    <Form.Input placeholder='URL' width={12} />
                    <Form.Button content='Fetch' width={4} fluid primary />
                </Form.Group>
            </Form>
        </Card.Content>
    </Card>
);

export default UrlCard;
