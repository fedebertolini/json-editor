import React from 'react';
import { Card, Form, Button } from 'semantic-ui-react'

const UrlCard = () => (
    <Card fluid>
        <Card.Content>
            <Card.Header>
                Load JSON from URL
            </Card.Header>
        </Card.Content>
        <Card.Content>
            <Form size="large">
                <Form.Field>
                    <label>URL</label>
                    <input />
                </Form.Field>
                <Button primary fluid>Fetch</Button>
            </Form>
        </Card.Content>
    </Card>
);

export default UrlCard;
