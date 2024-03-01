import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import {HeaderComponent} from "./header/header.component";
import {SidenavComponent} from "./sidenav/sidenav.component";
import {HomeComponent} from "./pages/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FontAwesomeModule, HeaderComponent, SidenavComponent, HomeComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NGEnjoyer'
  logOutIcon = faArrowAltCircleRight;
}
