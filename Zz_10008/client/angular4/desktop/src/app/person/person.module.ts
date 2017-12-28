import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SaveitengComponent } from './saveiteng.component';
import { MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { PersonService } from './person.service';

@NgModule({
    declarations: [
        SaveitengComponent
    ],
    imports: [
        MatInputModule,
        FormsModule,
        RouterModule.forChild([
            { path: 'Saveiteng', component: SaveitengComponent}
        ]),
        Ng2Bs3ModalModule,
        BrowserAnimationsModule
    ],
    providers:[
        PersonService
    ]
})

export class PersonModule {

}