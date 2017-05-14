import React from 'react';
import { connect } from 'react-redux';
import { Button, Grid, Icon } from 'semantic-ui-react';
import withEmitter from '../EventEmitter/withEmitter';
import { clearData } from '../../store/actions';
import { canUndo, canRedo } from '../../store/selectors/edited';

const emitCollapse = (emitter, collapse) => () => emitter.emit('collapse', collapse);

const Actions = (props) => (
    <Grid columns={3} relaxed>
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
        <Grid.Column>
            <Button
                content='Undo'
                icon='undo'
                labelPosition='left'
                disabled={!props.canUndo}
                size="small"
            />
            <Button
                content='Redo'
                icon={<Icon name="undo" flipped="horizontally" />}
                labelPosition='left'
                disabled={!props.canRedo}
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

const mapStateToProps = state => ({
    canUndo: canUndo(state),
    canRedo: canRedo(state),
});

const mapDispatchToProps = {
    clearData,
};

export default connect(mapStateToProps, mapDispatchToProps)(withEmitter(Actions));
