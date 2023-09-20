import { Injectable } from '@angular/core';

import { sample_grocery } from 'src/data';
import { grocery } from '../shared/models/grocery';

@Injectable({
  providedIn: 'root'
})
export class GroceryService {

  constructor() { }

  getAll():grocery[]{
    return sample_grocery
  } 

  getAllgroceriessBySearchTerm(searchTerm:string){
    return this.getAll().filter(grocery => grocery.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }
 
} 

