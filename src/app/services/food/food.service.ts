import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getFoodById(id: number): Foods{
    return this.getAll().find(food =>food.id == id)!;

  }
  getAll():Foods[]{
    return[
    {
      id: 1,
      price: 10,
      name: 'Pizza1',
      favorite:false,
      star: 2.5,
      tags: ['FastFood','Pizza','Lunch'],
      imageUrl: '../../assets/food-1.jpg',
    },
    {
      id: 2,
      price: 20,
      name: 'Burger',
      favorite:false,
      star: 3.5,
      tags: ['FastFood','Pizza','Lunch'],
      imageUrl: '../../assets/food-2.jpg', 
    },
    {
      id: 3,
      price: 30,
      name: 'Pizza3',
      favorite:false,
      star: 3.5,
      tags: ['FastFood','Pizza','Lunch'],
      imageUrl: '../../assets/food-3.jpg', 
    },
    {
      id: 4,
      price: 40,
      name: 'Pizza4',
      favorite:false,
      star: 4.5,
      tags: ['FastFood','Pizza','Lunch'],
      imageUrl: '../../assets/food-4.jpg', 
    },
    {
      id: 5,
      price: 50,
      name: 'Pizza5',
      favorite:false,
      star: 3.5,
      tags: ['FastFood','Pizza','Lunch'],
      imageUrl: '../../assets/food-5.jpg', 
    },
    {
      id: 6,
      price: 60,
      name: 'Pizza6',
      favorite:false,
      star: 3.5,
      tags: ['FastFood','Pizza','Lunch'],
      imageUrl: '../../assets/food-6.jpg', 
    },
    {
      id: 7,
      price: 70,
      name: 'Pizza7',
      favorite:false,
      star: 3.5,
      tags: ['FastFood','Pizza','Lunch'],
      imageUrl: '../../assets/food-7.jpg', 
    },
    {
      id: 8,
      price: 80,
      name: 'Pizza8',
      favorite:false,
      star: 4.5,
      tags: ['FastFood','Pizza','Lunch'],
      imageUrl: '../../assets/food-8.jpg', 
    }
    ]
  }
}
