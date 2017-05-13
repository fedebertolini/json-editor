import React from 'react';
import { Button, Grid } from 'semantic-ui-react'

const Actions = () => (
    <Grid columns={2} relaxed>
        <Grid.Column>
            <Button
                content='Collapse All'
                icon='minus'
                labelPosition='left'
                basic
                small
            />
            <Button
                content='Expand All'
                icon='plus'
                labelPosition='left'
                basic
                small
            />
        </Grid.Column>
        <Grid.Column textAlign="right">
            <Button
                content='Clear Data'
                icon='delete'
                labelPosition='left'
                color="red"
                small
            />
        </Grid.Column>
    </Grid>
);

export default Actions;
