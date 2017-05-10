import React from 'react';
import { Grid } from 'semantic-ui-react';
import Element from '../Element';

const Editor = ({ data }) => (
    <Grid padded centered stretched>
        <Grid.Row>
            <Grid.Column>
                <Element path={[]} />
            </Grid.Column>
        </Grid.Row>
    </Grid>
);

export default Editor;
