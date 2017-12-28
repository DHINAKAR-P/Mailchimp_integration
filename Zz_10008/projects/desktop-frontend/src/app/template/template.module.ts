import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { TemplatesComponent } from "./templates.component";
import { TemplateService } from "./template.service";

@NgModule({
    declarations: [
      TemplatesComponent
    ],
    imports: [
        MatInputModule,
        FormsModule,
        RouterModule.forChild([
            { path: 'templates', component: TemplatesComponent}
        ]),
        Ng2Bs3ModalModule,
        BrowserAnimationsModule
    ],
    providers:[
      TemplateService
    ]
})

export class TemplateModule {

}