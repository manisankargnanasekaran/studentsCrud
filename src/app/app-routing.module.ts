
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { NewStudentComponent } from './student/new-student.component';
const routes: Routes = [
  {
    path: 'student',
    component: StudentComponent
    // children: [{
    //   path: ':id/edit',
    //   component: NewStudentComponent
    // }]
  },
  {
    path: 'new_student',
   component: NewStudentComponent
  },
  {
    path: 'editstudent/:id',
   component: NewStudentComponent
  },
  { path: '**', redirectTo: 'student' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }
