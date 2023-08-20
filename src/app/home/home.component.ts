import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';
import { StarRatingModule } from 'angular-star-rating';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods: Foods[]=[];
  constructor(private fs: FoodService, private router:ActivatedRoute){}
  ngOnInit(): void{
   this.router.params.subscribe(params=>{
    if(params['searchItem'])
    this.foods = this.fs.getAll().filter(food =>food.name.toLocaleLowerCase().includes(params['searchItem'].toLocaleLowerCase()));
    else
    this.foods = this.fs.getAll();
   })
   
   
  }
  
}
