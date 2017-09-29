import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SampleWorkComponent } from './components/sample-work/sample-work.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {RouterModule} from '@angular/router';
import {ContentService} from './services/content/content.service';

import {appRoutes} from './app.routes';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsDetailsComponent } from './components/projects-details/projects-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SampleWorkComponent,
    NavbarComponent,
    ContactComponent,
    ProjectsDetailsComponent
  ],
  imports: [
    BrowserModule,
    Ng2CarouselamosModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
