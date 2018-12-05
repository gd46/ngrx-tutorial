import { Action } from '@ngrx/store';
import { People } from '../models/people.model';

export const GET_PEOPLE = '[PEOPLE] Get';

export class GetPeople implements Action {
  readonly type = GET_PEOPLE;

  constructor(public payload?: People[]) {}
}

export type Actions = GetPeople;
