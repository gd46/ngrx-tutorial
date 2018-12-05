import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as PeopleActions from '../actions/people.actions';
import { AppState } from '../app.state';
import { People } from '../models/people.model';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  people: Observable<People[]>;

  constructor(private store: Store<AppState>) {
    this.people = store.select('people');
  }

  ngOnInit() {
  }

  getPeople() {
    this.store.dispatch(new PeopleActions.GetPeople());
  }

}
