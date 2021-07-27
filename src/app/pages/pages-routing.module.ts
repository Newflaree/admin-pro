import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Pages
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graphic1Component } from './graphic1/graphic1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';


const routes: Routes = [
  { 
    path: 'dashboard', 
    component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'graphic1', component: Graphic1Component },
      { path: 'account-settings', component: AccountSettingsComponent },
      { path: 'promises', component: PromisesComponent },
      { path: 'rxjs', component: RxjsComponent },
    ]
  },
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class PagesRoutingModule { }
