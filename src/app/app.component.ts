import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayRecipes: boolean = true;
  displayShoppingList: boolean = false;

  onDisplayRecipes($event: boolean) {
    this.displayRecipes = $event;
  }

  onDisplayShoppingList($event: boolean) {
    this.displayShoppingList = $event;
  }
}
