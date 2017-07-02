import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Map } from 'immutable';
import reducers from './reducers';

export const initStore = () => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(
        reducers,
        new Map(),
        composeEnhancers(
            applyMiddleware(thunk)
        ),
    );

    return store;
};
