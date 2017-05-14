import React from 'react';
import { connect } from 'react-redux';
import { Button, Grid } from 'semantic-ui-react';
import withEmitter from '../EventEmitter/withEmitter';
import { clearData } from '../../store/actions';

const emitCollapse = (emitter, collapse) => () => emitter.emit('collapse', collapse);

const Actions = (props) => (
    <Grid columns={2} relaxed>
        <Grid.Column>
            <Button
                content='Collapse All'
                icon='minus'
                labelPosition='left'
                onClick={emitCollapse(props.emitter, true)}
                basic
                size="small"
            />
            <Button
                content='Expand All'
                icon='plus'
                labelPosition='left'
                onClick={emitCollapse(props.emitter, false)}
                basic
                size="small"
            />
        </Grid.Column>
        <Grid.Column textAlign="right">
            <Button
                content='Clear Data'
                icon='delete'
                labelPosition='left'
                onClick={props.clearData}
                color="red"
                size="small"
            />
        </Grid.Column>
    </Grid>
);

const mapDispatchToProps = {
    clearData,
};

export default connect(null, mapDispatchToProps)(withEmitter(Actions));
