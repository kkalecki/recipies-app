import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {

  @ViewChild('amountInput')
  amountInputRef: ElementRef

  constructor(private shoppingListService: ShoppingListService) {
  }

  OnAddIngredient(nameInput: HTMLInputElement) {
    this.shoppingListService.addIngredient(new Ingredient(nameInput.value, this.amountInputRef.nativeElement.value))
  }
}
