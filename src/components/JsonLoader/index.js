import React from 'react';
import { Grid } from 'semantic-ui-react'
import UrlCard from './UrlCard';
import JsonCard from './JsonCard';

const JsonLoader = () => (
    <Grid columns={2} padded centered stretched>
        <Grid.Row>
            <Grid.Column>
                <UrlCard />
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column>
                <JsonCard />
            </Grid.Column>
        </Grid.Row>
    </Grid>
);


export default JsonLoader;
