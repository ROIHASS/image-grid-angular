import { createAction, props } from '@ngrx/store';

export const getImages = createAction('Get_Images', props<{ images: any[] }>());
