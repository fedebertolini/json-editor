import { VIEW_MODAL_OPEN, VIEW_MODAL_CLOSE } from '../constants';

export const openModal = () => ({
    type: VIEW_MODAL_OPEN,
});

export const closeModal = () => ({
    type: VIEW_MODAL_CLOSE,
});
