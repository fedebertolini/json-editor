import React from 'react';
import { Button, Grid } from 'semantic-ui-react';
import withEmitter from '../EventEmitter/withEmitter';

const emitCollapse = (emitter, collapse) => () => emitter.emit('collapse', collapse);

const Actions = ({ emitter }) => (
    <Grid columns={2} relaxed>
        <Grid.Column>
            <Button
                content='Collapse All'
                icon='minus'
                labelPosition='left'
                onClick={emitCollapse(emitter, true)}
                basic
                size="small"
            />
            <Button
                content='Expand All'
                icon='plus'
                labelPosition='left'
                onClick={emitCollapse(emitter, false)}
                basic
                size="small"
            />
        </Grid.Column>
        <Grid.Column textAlign="right">
            <Button
                content='Clear Data'
                icon='delete'
                labelPosition='left'
                color="red"
                size="small"
            />
        </Grid.Column>
    </Grid>
);

export default withEmitter(Actions);
