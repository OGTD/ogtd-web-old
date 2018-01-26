import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule, MatSidenavModule, MatToolbarModule, MatCardModule } from '@angular/material';
import { MobxAngularModule } from 'mobx-angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';

import { AppRoutingModule } from './app-routing.module';

import { OGTDStore } from './stores/ogtd.store';
import { GlobalUIStore } from './stores/global.store';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { StartComponent } from './routes/start/start.component';
import { HomeComponent } from './routes/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    StartComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    FlexLayoutModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatToolbarModule,
    MobxAngularModule
  ],

  providers: [GlobalUIStore, OGTDStore],

  bootstrap: [AppComponent]


})
export class AppModule { }
