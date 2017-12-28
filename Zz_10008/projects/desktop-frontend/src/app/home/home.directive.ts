import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[home]',
})
export class HomeDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

