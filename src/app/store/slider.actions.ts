import { createAction, props } from '@ngrx/store';

export const increment = createAction('increment_Index');
export const decrement = createAction('Decrement_Index');
export const setIndex = createAction('Set_Index', props<{ index: number }>());
export const showModal = createAction('Show_Modal', props<{ show: boolean }>());
export const setLength = createAction('Set_Length', props<{ length:number }>());
export const setSrc = createAction('Set_Src', props<{ src:string }>());
