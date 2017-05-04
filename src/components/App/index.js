import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import JsonLoader from '../JsonLoader';

class App extends Component {
    render() {
        return (
            <Container>
                <JsonLoader />
            </Container>
        );
    }
}

export default App;
