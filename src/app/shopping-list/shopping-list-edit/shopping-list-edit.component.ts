import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {

  @ViewChild('amountInput')
  amountInputRef: ElementRef

  @Output()
  addIngredient = new EventEmitter<Ingredient>();

  OnAddIngredient(nameInput: HTMLInputElement) {
    this.addIngredient.emit(new Ingredient(nameInput.value,this.amountInputRef.nativeElement.value))
  }
}
