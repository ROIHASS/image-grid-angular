import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { SliderService } from './slider.service';
import { of, EMPTY } from 'rxjs';

@Injectable()
export class SliderEffects {


    // loadMovies$ = createEffect(() => {
    //     return this.actions$.pipe(
    //         ofType('Set_Index'),
    //         mergeMap(() => this.sliderService.setIndex()
    //             .pipe(
    //                 map(movies => ({ type: '[Movies API] Movies Loaded Success', payload: movies })),
    //                 catchError(() => EMPTY)
    //             ))
    //     )
    // }
    // );

    constructor(
        private actions$: Actions,
        private sliderService: SliderService
    ) { }
}