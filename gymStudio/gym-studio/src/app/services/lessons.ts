import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {

  private lessons = [
    {
      id: 1,
      name: 'התעמלות בוקר',
      teacher: 'שרה',
      sessions: 10,
      startDate: new Date('2026-09-09'),
      price: 300,
      day: 'ראשון',
      time: '08:00'
    },
    {
      id: 2,
      name: 'פילאטיס',
      teacher: 'מיכל',
      sessions: 8,
      startDate: new Date('2025-01-01'),
      price: 400,
      day: 'שלישי',
      time: '18:00'
    }
  ];

  getLessons() {
    return this.lessons;
  }

  getLessonById(id: number) {
    return this.lessons.find(l => l.id === id);
  }

  isStarted(lesson: any): boolean {
    return new Date(lesson.startDate) < new Date();
  }
}