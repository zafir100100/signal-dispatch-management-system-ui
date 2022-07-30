import { Page404Component } from './../authentication/page404/page404.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClerkViewEnvelopListComponent } from './clerk-view-envelop-list/clerk-view-envelop-list.component';
import { TransitSlipComponent } from './transit-slip/transit-slip.component';
import { TransitSlipHistoryComponent } from './transit-slip-history/transit-slip-history.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'view-envelope',
    component: ClerkViewEnvelopListComponent,
  },
  {
    path: 'transit-slip',
    component: TransitSlipComponent,
  },
  {
    path: 'transit-slip-history',
    component: TransitSlipHistoryComponent,
  },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
