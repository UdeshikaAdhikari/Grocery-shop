import{Component,OnInit} from '@angular/core';
import { grocery } from '../../shared/models/grocery';
import { GroceryService } from '../../services/grocery.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector:'app-home',
    templateUrl:'./home.component.html',
    styleUrls:['./home.component.css']

})
export class HomeComponet implements OnInit{
    groceries:grocery[]=[];
    constructor(private groceryService:GroceryService,activatedRoute:ActivatedRoute){
         
        this.groceries=groceryService.getAll();
    }

    ngOnInit(): void {
        
    }
    
}