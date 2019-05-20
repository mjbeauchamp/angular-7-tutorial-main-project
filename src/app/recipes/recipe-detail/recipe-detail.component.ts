import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnChanges {
  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService,
              private activeRoute: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    this.activeRoute.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.id);
        }
      )
  }

  ngOnChanges() {
    console.log(this.recipe);
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    //He's making this route overcomplicated for demo purposes. You could just have it like this:
    // this.router.navigate(['edit'], {relativeTo: this.activeRoute});
    this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.activeRoute});
  }

}
