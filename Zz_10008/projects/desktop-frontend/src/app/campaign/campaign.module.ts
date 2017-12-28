import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { CampaignsComponent } from "./campaigns.component";
import { CampaignComponent } from "./campaign.component";
import { CampaignService } from "./campaign.service";
import { SafePipe } from "./safe.pipe";

@NgModule({
    declarations: [
      CampaignsComponent,
      CampaignComponent,
      SafePipe
    ],
    imports: [
        MatInputModule,
        FormsModule,
        RouterModule.forChild([
            { path: 'campaigns', component: CampaignsComponent},
            { path: 'campaigns/:id', component: CampaignComponent}
        ]),
        Ng2Bs3ModalModule,
        BrowserAnimationsModule
    ],
    providers:[
        CampaignService
    ]
})

export class CampaignModule {

}