import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FriendsComponent } from './friends/friends.component';
import { SuperPowersComponent } from './super-powers/super-powers.component';

@NgModule({
  declarations: [
    AppComponent,
    FriendsComponent,
    SuperPowersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
