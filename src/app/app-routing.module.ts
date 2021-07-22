import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateComponent } from './candidate/candidate.component';
import { CreateComponent } from './candidate/create/create.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateInterviewComponent } from './interview/create-interview/create-interview.component';
import { InterviewComponent } from './interview/interview.component';
import { QuestionAnswerComponent } from './question-answer/question-answer.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'candidate',
    component: CandidateComponent,
    children: [
      {
        path: 'create',
        component: CreateComponent,
      },
    ],
  },

  {
    path: 'interview',
    component: InterviewComponent,
    children: [
      {
        path: 'create-interview',
        component: CreateInterviewComponent,
      },
    ],
  },
  {
    path: 'question-answer',
    component: QuestionAnswerComponent,
  },
  {
    path: 'user',
    component: UserComponent,
    children: [
      {
        path: 'create-user',
        component: CreateUserComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
