import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './routes/start/start.component';
import { HomeComponent } from './routes/home/home.component';

const routes: Routes = [
  { path: 'start', component: StartComponent },
  { path: 'home', component: HomeComponent, /* canActivate: [AuthGuard] */ },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
