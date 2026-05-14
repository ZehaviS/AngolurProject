import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RegistrantsService } from '../services/registrants';

@Component({
  selector: 'app-lesson-detail-component',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './lesson-detail-component.html',
  styleUrls: ['./lesson-detail-component.css'],
})
export class LessonDetailComponent implements OnChanges {
  @Input() lesson: any;
  @Input() started = false;

  registrantCount = 0;
  full = false;

  constructor(private registrantsService: RegistrantsService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (this.lesson && this.lesson.name) {
      const regs = this.registrantsService.getByLesson(this.lesson.name) || [];
      this.registrantCount = regs.length;
      this.full = this.registrantCount > 10;
    } else {
      this.registrantCount = 0;
      this.full = false;
    }
  }
}

