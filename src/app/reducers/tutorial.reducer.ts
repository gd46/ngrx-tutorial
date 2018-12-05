import * as TutorialActions from './../actions/tutorial.actions';
import { Tutorial } from '../models/tutorial.model';

// Section 1
const initialState: Tutorial = {
  name: 'Initial Tutorial',
  url: 'http://google.com'
};

// Section 2
export function tutorialReducer(state: Tutorial[] = [initialState], action: TutorialActions.Actions) {

  // Section 3
  switch (action.type) {
    case TutorialActions.ADD_TUTORIAL:
      return [...state, action.payload];
    case TutorialActions.REMOVE_TUTORIAL:
      state.splice(action.payload, 1);
      return state;
    default:
      return state;
  }
}
