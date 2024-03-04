import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import { HomeComponent } from '../pages/home/home.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink, HomeComponent, MatDividerModule, MatButtonModule, MatIconModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  
}