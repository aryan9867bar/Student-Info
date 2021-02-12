import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StudentListComponent } from './login/student-list/student-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentListComponent
  ],
  imports: [
    BrowserModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
