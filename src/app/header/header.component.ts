import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() updateView = new EventEmitter<{
    chosenView: string
  }>();

  onUpdateView(event) {
    this.updateView.emit({chosenView: event.target.className});
  }
}
