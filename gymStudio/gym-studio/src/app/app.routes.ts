import { Routes } from '@angular/router';
import { LessonsListComponent } from './lessons-list-component/lessons-list-component';
import { LessonDetailComponent } from './lesson-detail-component/lesson-detail-component';
import { RegistrantsComponent } from './registrants-component/registrants-component';
import { LoginComponent } from './login-component/login-component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'lessons', component: LessonsListComponent },
  { path: 'lesson/:id', component: LessonDetailComponent },
  { path: 'registrants', component: RegistrantsComponent },
];