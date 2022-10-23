import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  constructor(el:ElementRef) { 
    el.nativeElement.style.color="var(--primary)",
    el.nativeElement.textContent="Reactive form in angular"
  }

}
