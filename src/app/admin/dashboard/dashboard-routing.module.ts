import { DashboardComponent as studentDashboard } from './../../student/dashboard/dashboard.component';
import { DashboardComponent as teacherDashboard } from './../../teacher/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { UserListComponent } from './user-list/user-list.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'user-list',
    component: UserListComponent
  },
  {
    path: 'teacher-dashboard',
    component: teacherDashboard,
  },
  {
    path: 'student-dashboard',
    component: studentDashboard,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
