import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InterviewComponent } from './interview/interview.component';
import { CandidateComponent } from './candidate/candidate.component';
import { QuestionAnswerComponent } from './question-answer/question-answer.component';
import { CreateComponent } from './candidate/create/create.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { CreateInterviewComponent } from './interview/create-interview/create-interview.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DashboardComponent,
    InterviewComponent,
    CandidateComponent,
    QuestionAnswerComponent,
    CreateComponent,
    CreateUserComponent,
    CreateInterviewComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
