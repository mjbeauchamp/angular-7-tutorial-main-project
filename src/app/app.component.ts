import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showRecipes = true;
  showList = false;

  updateView(event) {
    const view = event.chosenView;
    if (view === 'show-recipes') {
      this.showRecipes = true;
      this.showList = false;
    } else if (view === 'show-list') {
      this.showRecipes = false;
      this.showList = true;
    }
  }
}
