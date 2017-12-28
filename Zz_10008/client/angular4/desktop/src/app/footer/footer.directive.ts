import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[footer]',
})
export class FooterDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

