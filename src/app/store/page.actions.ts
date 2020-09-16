import { createAction, props } from '@ngrx/store';

export const increment = createAction('Next_Page increment');
export const decrement = createAction('Prev_Page Decrement');
export const setPage = createAction('Set_Page', props<{ page: number }>());