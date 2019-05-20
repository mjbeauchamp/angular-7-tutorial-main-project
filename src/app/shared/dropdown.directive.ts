import {
  HostListener,
  HostBinding,
  Directive,
  AfterViewInit,
  OnInit,
  ElementRef
} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit, AfterViewInit {
  constructor(private elRef: ElementRef) {

  }

  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen(eventData: Event) {
    this.isOpen = !this.isOpen;
  }

  ngOnInit(): void {
    console.log('Initialized');
  }

  ngAfterViewInit() {
    console.log('View Initialized');
    console.log(this.elRef.nativeElement.children);
  }
}
