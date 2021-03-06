import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Injectable()

export class ShoppingListService {
  listItemAdded = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  onIngredientAdded(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
    this.listItemAdded.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
  }
}
