export const selectData = (state, path) => state.get('edited').present.getIn(path);

export const canUndo = (state) => state.get('edited').past.length > 0;

export const canRedo = (state) => state.get('edited').future.length > 0;
