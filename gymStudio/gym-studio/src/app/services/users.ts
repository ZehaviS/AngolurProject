import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private router: Router) {}

  // רשימת המשתמשים של המערכת
  private users = [
    {
      username: 'teacher',
      password: '1234',
      role: 'teacher'
    },
    {
      username: 'secretary',
      password: '1234',
      role: 'secretary'
    }
  ];

  // משתמש מחובר כרגע (אם רוצים לשמור מצב)
  private currentUser: any = null;

  // פונקציית התחברות
  login(username: string, password: string): boolean {

    const user = this.users.find(
      u => u.username === username && u.password === password
    );

    if (!user) {
      return false; // משתמש לא נמצא
    }

    this.currentUser = user;

    // ניווט לפי תפקיד
    if (user.role === 'teacher') {
      this.router.navigate(['/lessons']);
    }

    if (user.role === 'secretary') {
      this.router.navigate(['/registrants']);
    }

    return true;
  }

  // החזרת המשתמש המחובר
  getCurrentUser() {
    return this.currentUser;
  }

  // בדיקה אם מחובר
  isLoggedIn(): boolean {
    return this.currentUser !== null;
  }

  // התנתקות
  logout() {
    this.currentUser = null;
    this.router.navigate(['/']);
  }
}