import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  /*
  { path: "login", component: LoginComponent },
  { path: "day/:timestamp", component: DayComponent, canActivate: [AuthGuard] },
  { path: "", component: CalendarComponent, canActivate: [AuthGuard] }
  */
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
