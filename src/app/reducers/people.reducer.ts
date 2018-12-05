import { People } from '../models/people.model';
import * as PeopleActions from './../actions/people.actions';

const initialState: People = {
  name: 'Giuseppe',
  height: '6.0'
};

export function peopleReducer(state: People[] = [initialState], action: PeopleActions.Actions) {

  switch (action.type) {
    case PeopleActions.GET_PEOPLE:
      return action.payload;
    default:
      return state;
  }
}
