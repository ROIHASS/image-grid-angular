import { createReducer, on } from '@ngrx/store';
import { getImages } from './images.actions';


export const initialState: any[] = [];

const _imagesReducer = createReducer(initialState,
    on(getImages, (state, { images }) => {
        state = images;
        return state
    }),
);

export function imagesReducer(state, action) {
    return _imagesReducer(state, action);
}