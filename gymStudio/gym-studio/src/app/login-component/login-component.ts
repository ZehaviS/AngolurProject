import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { UsersService } from '../services/users';

@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [ReactiveFormsModule, MatButtonModule, CommonModule],
  templateUrl: './login-component.html',
  styleUrls: ['./login-component.css'],
})
export class LoginComponent {
  loginForm;

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService
  ) {
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    });
  }

  onLogin() {
    const { username, password } = this.loginForm.value;

    const success = this.usersService.login(
      username ?? '',
      password ?? ''
    );

    if (!success) {
      alert('שם או סיסמא שגויים');
    }
  }
}