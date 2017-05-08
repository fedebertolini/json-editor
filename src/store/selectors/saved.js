export const selectIsInProgress = state => state.getIn(['saved', 'inProgress']);

export const selectError = state => state.getIn(['saved', 'error']);
