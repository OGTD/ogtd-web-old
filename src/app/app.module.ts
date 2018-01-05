import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { MobxAngularModule } from 'mobx-angular';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { GlobalUIStore } from './stores/global.store';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MobxAngularModule
  ],

  providers: [GlobalUIStore],

  bootstrap: [AppComponent]


})
export class AppModule { }
