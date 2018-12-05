import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { first, map, switchMap } from 'rxjs/operators';

import * as PeopleActions from '../actions/people.actions';
import { People } from '../models/people.model';

@Injectable()
export class PeopleEffects {

  @Effect()
  loadPeople$: Observable<Action> = this.actions$.pipe(
    ofType(PeopleActions.GET_PEOPLE),
    first(),
    switchMap(() => {
      return this.$http.get('https://swapi.co/api/people/');
    }),
    map((response: any) => {
      const people: People[] = response.results;
      return new PeopleActions.GetPeople(people);
    })
  );

  constructor(private actions$: Actions, private $http: HttpClient) {
  }
}
