import { Component } from '@angular/core';
import {Recipe} from "../recipe.model";


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test', 'https://omnivorescookbook.com/wp-content/uploads/2021/06/210217_Mongolian-Meatballs_550-500x500.jpg'),
    new Recipe('A test recipe', 'This is simply a test', 'https://omnivorescookbook.com/wp-content/uploads/2021/06/210217_Mongolian-Meatballs_550-500x500.jpg')
  ];

}
