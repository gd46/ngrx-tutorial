import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { PeopleEffects } from './effects/people.effects';
import { peopleReducer } from './reducers/people.reducer';
import { tutorialReducer } from './reducers/tutorial.reducer';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
import { PeopleListComponent } from './people-list/people-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreateComponent,
    PeopleListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({
      tutorial: tutorialReducer,
      people: peopleReducer
    }),
    EffectsModule.forRoot([PeopleEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
