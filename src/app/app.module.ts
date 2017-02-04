import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { BasketballPlayerData }  from './player-data';
import { PlayerService } from './player.service';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    InMemoryWebApiModule.forRoot(BasketballPlayerData)
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
