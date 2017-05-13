import React from 'react';
import { Grid } from 'semantic-ui-react';
import RootElement from '../Element/RootElement';

const Editor = ({ data }) => (
    <Grid padded centered stretched>
        <Grid.Row>
            <Grid.Column>
                <RootElement path={[]} />
            </Grid.Column>
        </Grid.Row>
    </Grid>
);

export default Editor;
