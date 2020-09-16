import { createReducer, on } from '@ngrx/store';
import { increment, decrement, setPage } from './page.actions';

export const initialState: number = 1;

const _pageReducer = createReducer(initialState,
    on(increment, (state) => {
        state ++;
        return state
    }),

    on(decrement, (state) => {
        state --;
        return state
    }),

    on(setPage, (state, { page }) => {
        state = page;
        return state
    }),
);

export function pageReducer(state, action) {
    return _pageReducer(state, action);
}