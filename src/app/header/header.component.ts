import { Component } from '@angular/core';
import {FaIconComponent, FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import {RouterLink} from "@angular/router";
import { HomeComponent } from '../pages/home/home.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    FaIconComponent, FontAwesomeModule, RouterLink, HomeComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  logOutIcon = faArrowAltCircleRight;
}
