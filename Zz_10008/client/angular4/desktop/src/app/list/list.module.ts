import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ListsComponent } from "./list.component";
import { ListsService } from "./list.service";

@NgModule({
    declarations: [
      ListsComponent
    ],
    imports: [
        MatInputModule,
        FormsModule,
        RouterModule.forChild([
            { path: 'lists', component: ListsComponent}
        ]),
        Ng2Bs3ModalModule,
        BrowserAnimationsModule
    ],
    providers:[
      ListsService
    ]
})

export class ListsModule {

}