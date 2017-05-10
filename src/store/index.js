import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { fromJS } from 'immutable';
import reducers from './reducers';
import { loadState, saveState } from '../utils/storePersistence';

export const initStore = () => {
    const isDev = process.env.NODE_ENV === 'development';
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const persistedState = fromJS((isDev && loadState()) || {});

    const store = createStore(
        reducers,
        persistedState,
        composeEnhancers(
            applyMiddleware(thunk)
        ),
    );

    if (isDev) {
        store.subscribe(() => {
            saveState(store.getState());
        });
    }

    return store;
};
