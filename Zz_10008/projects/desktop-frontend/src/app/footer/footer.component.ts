import { Component, OnInit, ViewChild, ComponentFactoryResolver} from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { FooterDirective } from './footer.directive';
import { SharedService } from '../shared/shared.service';
import { FooterENComponent } from './footer-en.component';
import { FooterDEComponent } from './footer-de.component';

@Component ({
    selector: 'app-footer',
    template: '<ng-template footer></ng-template>'
})
export class FooterComponent implements OnInit {
    @ViewChild(FooterDirective) adHost: FooterDirective;

    constructor(private router: Router, private shared_service: SharedService, private _componentFactoryResolver: ComponentFactoryResolver,) { 
    }

    ngOnInit() { 
        let browser_language = this.shared_service.browser_language;
        console.log(browser_language);
        this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationEnd ) {
                if(event.url.indexOf('login') === -1){
                    if(browser_language === 'en'){
                        let componentFactory = this._componentFactoryResolver.resolveComponentFactory(FooterENComponent);
                        let viewContainerRef = this.adHost.viewContainerRef;
                        viewContainerRef.clear();
                        let componentRef = viewContainerRef.createComponent(componentFactory);
                    }else if(browser_language === 'de'){
                        let componentFactory = this._componentFactoryResolver.resolveComponentFactory(FooterDEComponent);
                        let viewContainerRef = this.adHost.viewContainerRef;
                        viewContainerRef.clear();
                        let componentRef = viewContainerRef.createComponent(componentFactory);
                    }
                }
            }
        });
    }

}