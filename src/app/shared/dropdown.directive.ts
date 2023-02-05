import {Directive, ElementRef, HostListener, Renderer2} from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  private isClicked = false;
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }
  @HostListener('click') onClick() {
    this.isClicked = !this.isClicked;
    if(this.isClicked === true) {
      this.renderer.addClass(this.elementRef.nativeElement, 'open');
    }
    else {
      this.renderer.removeClass(this.elementRef.nativeElement, 'open');
    }
  }
}
