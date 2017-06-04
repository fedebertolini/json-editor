import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react'
import JsonLoader from '../JsonLoader';
import Editor from '../Editor';
import ViewJsonModal from '../ViewJsonModal';
import { selectLoaded } from '../../store/selectors/saved';
import { isModalOpen } from '../../store/selectors/viewModal';

const App = ({ loaded, showModal }) => (
    <Container>
        {!loaded && <JsonLoader />}
        {loaded && <Editor />}
        {showModal && <ViewJsonModal />}
    </Container>
);

const mapStateToProps = state => ({
    loaded: selectLoaded(state),
    showModal: isModalOpen(state),
});

export default connect(mapStateToProps)(App);
