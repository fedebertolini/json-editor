import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react'
import JsonLoader from '../JsonLoader';
import Editor from '../Editor';
import { selectLoaded } from '../../store/selectors/saved';

const App = ({ loaded}) => (
    <Container>
        {!loaded && <JsonLoader />}
        {loaded && <Editor />}
    </Container>
);

const mapStateToProps = state => ({
    loaded: selectLoaded(state),
});

export default connect(mapStateToProps)(App);
