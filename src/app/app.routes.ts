import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {SampleWorkComponent} from './components/sample-work/sample-work.component';
import {ContactComponent} from './components/contact/contact.component';
import {ProjectsDetailsComponent} from './components/projects-details/projects-details.component';

export const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'samplework', component: SampleWorkComponent},
    {path: 'contact', component: ContactComponent},
    {path: ':name', component: ProjectsDetailsComponent}
];
