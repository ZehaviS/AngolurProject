import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrantsService {

  private registrants = [
    {
      id: '123456789',
      firstName: 'דנה',
      lastName: 'כהן',
      phone: '050-1111111',
      lesson: 'פילאטיס',
      price: 400,
      paid: true
    },
    {
      id: '987654321',
      firstName: 'נועה',
      lastName: 'לוי',
      phone: '052-2222222',
      lesson: 'התעמלות בוקר',
      price: 300,
      paid: false
    }
  ];

  getRegistrants() {
    return this.registrants;
  }

  getUnpaid() {
    return this.registrants.filter(r => !r.paid);
  }

  getByLesson(lessonName: string) {
    return this.registrants.filter(r => r.lesson === lessonName);
  }

  getById(id: string) {
    return this.registrants.find(r => r.id === id);
  }
}