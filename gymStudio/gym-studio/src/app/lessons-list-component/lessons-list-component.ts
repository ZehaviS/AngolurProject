import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonsService } from '../services/lessons';
import { LessonDetailComponent } from '../lesson-detail-component/lesson-detail-component';

@Component({
  selector: 'app-lessons-list-component',
  standalone: true,
  imports: [CommonModule, LessonDetailComponent],
  templateUrl: './lessons-list-component.html',
  styleUrls: ['./lessons-list-component.css'],
})
export class LessonsListComponent implements OnInit {
  lessons: any[] = [];

  constructor(private lessonsService: LessonsService) {}

  ngOnInit() {
    this.lessons = this.lessonsService.getLessons();
  }

  lessonStarted(lesson: any): boolean {
    return this.lessonsService.isStarted(lesson);
  }
}

