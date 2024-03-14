import { Component } from '@angular/core';
import { AboutComponent } from '../../components/about/about.component';
import { HomePageTabsComponent } from '../../components/home-page-tabs/home-page-tabs.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent, HomePageTabsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  isAuth = true;
}
