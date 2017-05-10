import React from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import { selectData } from '../../store/selectors/saved';

const Editor = ({ data }) => (
    <Grid padded centered stretched>
        <Grid.Row>
            <Grid.Column>
                {JSON.stringify(data)}
            </Grid.Column>
        </Grid.Row>
    </Grid>
);


const mapStateToProps = state => ({
    data: selectData(state),
});

export default connect(mapStateToProps)(Editor);
