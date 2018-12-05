import { People } from './models/people.model';
import { Tutorial } from './models/tutorial.model';

export interface AppState {
  readonly tutorial: Tutorial[];
  readonly people: People[];
}
