import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-lesson-detail-component',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './lesson-detail-component.html',
  styleUrls: ['./lesson-detail-component.css'],
})
export class LessonDetailComponent {
  @Input() lesson: any;
  @Input() started = false;
}

