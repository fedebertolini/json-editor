import React from 'react';
import { Grid, Card } from 'semantic-ui-react';
import RootElement from '../Element/RootElement';
import Actions from './Actions';
import './styles.css';

const Editor = ({ data }) => (
    <Grid padded centered stretched>
        <Grid.Row>
            <Grid.Column>
                <Card.Group>
                    <Card fluid>
                        <Card.Content className="editor_actions">
                            <Actions />
                        </Card.Content>
                        <Card.Content className="editor_content">
                            <RootElement path={[]} />
                        </Card.Content>
                    </Card>
                </Card.Group>
            </Grid.Column>
        </Grid.Row>
    </Grid>
);

export default Editor;
