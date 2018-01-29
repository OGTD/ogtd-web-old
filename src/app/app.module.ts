import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule, MatSidenavModule, MatToolbarModule, MatCardModule, MatRippleModule } from '@angular/material';
import { MobxAngularModule } from 'mobx-angular';
import { useStrict } from 'mobx';
useStrict(true);
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';

import { AppRoutingModule } from './app-routing.module';

import { OGTDDatabaseService } from './services/ogtdDatabase.service';

import { OGTDStore } from './stores/ogtd.store';
import { GlobalUIStore } from './stores/globalUI.store';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { StartComponent } from './routes/start/start.component';
import { HomeComponent } from './routes/home/home.component';
import { StartGuard } from './start.guard';
import { RouterStore } from './stores/router.store';


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
    MatRippleModule,
    MatCardModule,
    MatToolbarModule,
    MobxAngularModule
  ],

  providers: [GlobalUIStore, OGTDStore, StartGuard, RouterStore, OGTDDatabaseService],

  bootstrap: [AppComponent]


})
export class AppModule { }
