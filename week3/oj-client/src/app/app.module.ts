import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DataService} from  './services/data.service';
import {FormsModule} from '@angular/forms';
import {routing} from './app.routes';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { ProblemListComponent } from './components/problem-list/problem-list.component';
import { ProblemDetailComponent } from './components/problem-detail/problem-detail.component';
import {NewProblemComponent} from './components/new-problem/new-problem.component';
import { NotFComponent } from './components/not-f/not-f.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EditorComponent } from './components/editor/editor.component';


@NgModule({
  declarations: [
    AppComponent,
    ProblemListComponent,
    ProblemDetailComponent,
    NewProblemComponent,
    NotFComponent,
    NavbarComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [
     DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
