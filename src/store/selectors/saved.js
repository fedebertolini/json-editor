export const selectIsInProgress = state => state.getIn(['saved', 'inProgress']);

export const selectError = state => state.getIn(['saved', 'error']);

export const selectLoaded = state => state.getIn(['saved', 'loaded']);

export const selectData = (state, path) => state.getIn(['saved', 'data'].concat(path));
