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
    },{
      id: 3,
      name: 'זומבה',
      teacher: 'דוד',
      sessions: 12,
      startDate: new Date('2025-03-15'),
      price: 350,
      day: 'חמישי',
      time: '19:00'
    },{
      id: 4,
      name: 'יוגה',
      teacher: 'רונית',
      sessions: 10,
      startDate: new Date('2025-05-20'),
      price: 320,
      day: 'שני',
      time: '17:00'
    },{
      id: 5,
      name: 'עיצוב',
      teacher: 'אורי',
      sessions: 8,
      startDate: new Date('2025-07-10'),
      price: 450,
      day: 'רביעי',
      time: '20:00'
    },{
      id: 6,
      name: 'התעמלות בוקר מתקדמים',
      teacher: 'ליאור',
      sessions: 12,
      startDate: new Date('2025-09-01'),
      price: 500,
      day: 'שישי',
      time: '10:00'
    },{
      id: 7,
      name: 'פילאטיס מתקדמים',
      teacher: 'מיכל',
      sessions: 10,
      startDate: new Date('2025-11-01'),
      price: 450,
      day: 'שלישי',
      time: '18:00'
    },{
      id: 8,
      name: 'זומבה מתקדמים',
      teacher: 'דוד',
      sessions: 12,
      startDate: new Date('2026-01-15'),
      price: 400,
      day: 'חמישי',
      time: '19:00'
    } ,{
      id: 9,
      name: 'יוגה מתקדמים',
      teacher: 'רונית',
      sessions: 10,
      startDate: new Date('2026-03-20'),
      price: 370,
      day: 'שני',
      time: '17:00'
    },{
      id: 10,
      name: 'עיצוב מתקדמים',
      teacher: 'אורי',
      sessions: 8,
      startDate: new Date('2026-05-10'),
      price: 500,
      day: 'רביעי',
      time: '20:00'
    }, {  
      id: 11,
      name: 'התעמלות בוקר למתקדמים',
      teacher: 'ליאור',
      sessions: 12,
      startDate: new Date('2026-09-01'),
      price: 500,
      day: 'שישי',
      time: '10:00'
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