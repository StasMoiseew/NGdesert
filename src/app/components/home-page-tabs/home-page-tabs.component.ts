import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { LoginPageComponent } from '../../pages/login-page/login-page.component';
import { EventsComponent } from '../events/events.component';

@Component({
  selector: 'app-home-page-tabs',
  standalone: true,
  imports: [MatTabsModule, LoginPageComponent, EventsComponent],
  templateUrl: './home-page-tabs.component.html',
  styleUrl: './home-page-tabs.component.css',
})
export class HomePageTabsComponent {}
