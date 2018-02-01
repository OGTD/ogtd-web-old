import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './routes/start/start.component';
import { HomeComponent } from './routes/home/home.component';
import { StartGuard } from './start.guard';
import { InComponent } from './routes/in/in.component';

const routes: Routes = [
  { path: 'start', component: StartComponent },
  { path: '', component: HomeComponent, canActivate: [StartGuard] },
  { path: 'in', component: InComponent, canActivate: [StartGuard] },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
