export const selectData = (state, path) => state.getIn(['edited'].concat(path));
