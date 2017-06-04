import { fromJS } from 'immutable';
import { VIEW_MODAL_OPEN, VIEW_MODAL_CLOSE } from '../constants';

const initialState = () => fromJS({
    isModalOpen: false,
});

export default (state = initialState(), action) => {
    switch(action.type) {
        case VIEW_MODAL_OPEN:
            return state.set('isModalOpen', true);
        case VIEW_MODAL_CLOSE: {
            return state.set('isModalOpen', false);
        }
        default:
            return state;
    }
};
