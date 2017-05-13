export const selectData = (state, path) => state.getIn(['edited', 'data'].concat(path));
