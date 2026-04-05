import { Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { ViewServiceComponent } from './view-service/view-service.component';
import { DailySpecialsComponent } from './daily-specials/dailyspecials.component';

export const routes: Routes = [
  { path: '', redirectTo: 'services', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'service/:id', component: ViewServiceComponent },
  { path: 'daily-specials', component: DailySpecialsComponent },
  { path: '**', redirectTo: 'services' }
];
