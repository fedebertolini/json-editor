import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { initStore } from './store';
import App from './components/App';
import EventEmitterProvider from './components/EventEmitter/Provider';

import 'normalize.css/normalize.css';
import 'semantic-ui-css/semantic.min.css';

const store = initStore();

ReactDOM.render(
    <Provider store={store}>
        <EventEmitterProvider>
            <App />
        </EventEmitterProvider>
    </Provider>,
    document.getElementById('root')
);
