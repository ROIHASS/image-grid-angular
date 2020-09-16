import { createReducer, on } from '@ngrx/store';
import { decrement, increment, setIndex, showModal, setLength, setSrc } from './slider.actions';
import { sliderState } from "../models/state.model";

export const initialState: sliderState = {
    index: null,
    src: null,
    length: null,
    show: false
}

const _sliderReducer = createReducer(initialState,
    on(increment, state => {
        const index = state.index + 1;
        return { ...state, index }
    }),
    on(decrement, state => {
        const index = state.index - 1;
        return { ...state, index }
    }),
    on(setIndex, (state, { index }) => {
        return { ...state, index }
    }),
    on(showModal, (state, { show }) => {
        return { ...state, show }
    }),
    on(setLength, (state, { length }) => {
        return { ...state, length }
    }),
    on(setSrc, (state, { src }) => {
        return { ...state, src }
    }),
);

export function sliderReducer(state, action) {
    return _sliderReducer(state, action);
}