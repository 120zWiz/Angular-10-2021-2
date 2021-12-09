import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDynamicHeight]'
})
export class DynamicHeightDirective {

  constructor(public element: ElementRef) {
    element.nativeElement.style.width = "200px";
   }

   @HostListener('input',['$event.target'])
   adjust(){
    let texArea = this.element.nativeElement;
    texArea.style.owerFlow = "hidden";
    texArea.style.height = "auto";
    texArea.style.height = texArea.scrollHeight + "px";
   }

}
