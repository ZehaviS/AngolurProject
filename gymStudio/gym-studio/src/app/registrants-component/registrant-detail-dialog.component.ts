import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-registrant-detail-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  template: `
    <h2 mat-dialog-title>פרטי נרשמת</h2>
    <div mat-dialog-content>
      <div class="dialog-field"><strong>שם:</strong> {{ data.firstName }} {{ data.lastName }}</div>
      <div class="dialog-field"><strong>טלפון:</strong> {{ data.phone }}</div>
      <div class="dialog-field"><strong>מספר זהות:</strong> {{ data.id }}</div>
      <div class="dialog-field"><strong>שיעור:</strong> {{ data.lesson }}</div>
      <div class="dialog-field"><strong>מחיר:</strong> ₪{{ data.price }}</div>
      <div class="dialog-field"><strong>שולם:</strong> {{ data.paid ? 'כן' : 'לא' }}</div>
    </div>
    <div mat-dialog-actions>
      <button mat-button [mat-dialog-close]="true">סגור</button>
    </div>
  `,
  styles: [`
    .dialog-field {
      margin-bottom: 12px;
      font-size: 0.95rem;
    }
  `]
})
export class RegistrantDetailDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
