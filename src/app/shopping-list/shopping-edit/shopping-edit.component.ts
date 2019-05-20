import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import {ShoppingListService} from '../shopping-list.service';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  // @Output() addIngredient = new EventEmitter<{
  //   name: string,
  //   amount: string
  // }>();

  constructor(private shoppingList: ShoppingListService) { }

  ngOnInit() {
  }

  onAddIngredient() {
    const newIngredient: Ingredient = {
      name: this.nameInput.nativeElement.value,
      amount: this.amountInput.nativeElement.value
    };
    this.shoppingList.onIngredientAdded(newIngredient);
    console.log(this.shoppingList.getIngredients());
  }

}
