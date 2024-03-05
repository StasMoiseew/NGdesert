import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CloudComponent } from './pages/cloud/cloud.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'cloud',
    component: CloudComponent,
    title: 'Cloud',
  },
];
