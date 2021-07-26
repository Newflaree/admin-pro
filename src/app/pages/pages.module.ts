import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

// Modules
import { ComponentsModule } from '../components/components.module';
import { SharedModule } from '../shared/shared.module';
 
// Pages
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graphic1Component } from './graphic1/graphic1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { PromisesComponent } from './promises/promises.component';


@NgModule({
  declarations: [
    AccountSettingsComponent,
    DashboardComponent,
    Graphic1Component,
    PagesComponent,
    ProgressComponent,
    PromisesComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    RouterModule,
    SharedModule,
  ],
  exports: [
    AccountSettingsComponent,
    DashboardComponent,
    Graphic1Component,
    PagesComponent,
    ProgressComponent,
    PromisesComponent,
  ]
})
export class PagesModule { }
