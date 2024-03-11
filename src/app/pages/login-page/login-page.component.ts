import { Component } from '@angular/core';
import { RegisterFormComponent } from '../../components/register-form/register-form.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [RegisterFormComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  isAutsh = false;
}
