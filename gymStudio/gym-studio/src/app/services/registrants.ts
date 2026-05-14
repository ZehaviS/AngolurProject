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
      id: '123456789',
      firstName: 'דנה',
      lastName: 'כהן',
      phone: '050-1111111',
      lesson: 'פילאטיס',
      price: 400,
      paid: true
    },
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
      id: '123456789',
      firstName: 'דנה',
      lastName: 'כהן',
      phone: '050-1111111',
      lesson: 'פילאטיס',
      price: 400,
      paid: true
    },
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
      id: '123456789',
      firstName: 'דנה',
      lastName: 'כהן',
      phone: '050-1111111',
      lesson: 'פילאטיס',
      price: 400,
      paid: true
    },
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
      id: '123456789',
      firstName: 'דנה',
      lastName: 'כהן',
      phone: '050-1111111',
      lesson: 'פילאטיס',
      price: 400,
      paid: true
    },
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
    },{
      id: '456789123',
      firstName: 'אורי',
      lastName: 'פרץ',
      phone: '054-3333333',
      lesson: 'זומבה',
      price: 350,
      paid: true
    },{
      id: '789123456',
      firstName: 'רוני',
      lastName: 'אלון', 
      phone: '053-4444444',
      lesson: 'פילאטיס',
      price: 400,
      paid: false
    },
    {
      id: '321654987',
      firstName: 'גיא',
      lastName: 'ברק',
      phone: '051-5555555',
      lesson: 'התעמלות בוקר',
      price: 300,
      paid: true
    },{
      id: '654987321',
      firstName: 'ליאור',
      lastName: 'דוד',
      phone: '052-6666666',
      lesson: 'זומבה',
      price: 350,
      paid: false 
    },{
      id: '159753456',
      firstName: 'אייל',
      lastName: 'כהן',
      phone: '050-7777777',
      lesson: 'פילאטיס',
      price: 400,
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