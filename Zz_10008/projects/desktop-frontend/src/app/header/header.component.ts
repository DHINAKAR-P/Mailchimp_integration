import { Component, OnInit, ViewChild, ComponentFactoryResolver} from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { SharedService } from '../shared/shared.service';
import { HeaderDirective } from './header.directive';
import { HeaderENComponent } from './header-en.component';
import { HeaderDEComponent } from './header-de.component';

@Component ({
    selector: 'app-header',
    template: '<ng-template header></ng-template>'
})
export class HeaderComponent implements OnInit {
    @ViewChild(HeaderDirective) adHost: HeaderDirective;

    constructor(private router: Router, private shared_service: SharedService, private _componentFactoryResolver: ComponentFactoryResolver,) { 
    }

    ngOnInit() { 
        let browser_language = this.shared_service.browser_language;
        console.log(browser_language);
        this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationEnd ) {
                if(event.url.indexOf('login') === -1){
                    if(browser_language === 'en'){
                        let componentFactory = this._componentFactoryResolver.resolveComponentFactory(HeaderENComponent);
                        let viewContainerRef = this.adHost.viewContainerRef;
                        viewContainerRef.clear();
                        let componentRef = viewContainerRef.createComponent(componentFactory);
                    }else if(browser_language === 'de'){
                        let componentFactory = this._componentFactoryResolver.resolveComponentFactory(HeaderDEComponent);
                        let viewContainerRef = this.adHost.viewContainerRef;
                        viewContainerRef.clear();
                        let componentRef = viewContainerRef.createComponent(componentFactory);
                    }
                }
            }
        });
    }
}