import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Routing
import { AuthRoutingModule } from './auth/auth-routing.module';
import { PagesRoutingModule } from './pages/pages-routing.module';

// Components
import { NotpagefoundComponent } from './notpagefound/notpagefound.component';

const routes: Routes = [
  // path: '/auth' AuthRoutingModule
  // path: '/dashboard' PagesRoutingModule

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NotpagefoundComponent },
];


@NgModule({
  imports: [
    AuthRoutingModule,
    PagesRoutingModule,
    RouterModule.forRoot( routes ),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
