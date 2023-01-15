import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output()
  displayShoppingList = new EventEmitter<boolean>();
  @Output()
  displayRecipes = new EventEmitter<boolean>();

  onDisplayRecipes() {
    this.displayRecipes.emit(true);
    this.displayShoppingList.emit(false);
  }

  onDisplayShoppingList() {
    this.displayShoppingList.emit(true);
    this.displayRecipes.emit(false);

  }
}
