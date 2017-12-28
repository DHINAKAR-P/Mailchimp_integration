import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { HomeDirective } from './home.directive';
import { SharedService } from '../shared/shared.service';
import { HomeENComponent } from './home-en.component';
import { HomeDEComponent } from './home-de.component';


@Component({
    template: '<ng-template home></ng-template>'

})
export class HomeComponent implements OnInit {
    @ViewChild(HomeDirective) adHost: HomeDirective;
    constructor(private _componentFactoryResolver: ComponentFactoryResolver, private shared_service: SharedService) { }

    ngOnInit() {
        let browser_language = this.shared_service.browser_language;
        console.log(browser_language);
        if(browser_language === 'en'){
            let componentFactory = this._componentFactoryResolver.resolveComponentFactory(HomeENComponent);
            let viewContainerRef = this.adHost.viewContainerRef;
            viewContainerRef.clear();
            let componentRef = viewContainerRef.createComponent(componentFactory);
        }else if(browser_language === 'de'){
            let componentFactory = this._componentFactoryResolver.resolveComponentFactory(HomeDEComponent);
            let viewContainerRef = this.adHost.viewContainerRef;
            viewContainerRef.clear();
            let componentRef = viewContainerRef.createComponent(componentFactory);
        }
    }


}