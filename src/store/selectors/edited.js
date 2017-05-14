export const selectData = (state, path) => state.get('edited').present.getIn(path);
