import { ArtyomModule } from '../../projects/ng-artyom/src/lib/artyom.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ArtyomModule.forRoot({
      listen: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
