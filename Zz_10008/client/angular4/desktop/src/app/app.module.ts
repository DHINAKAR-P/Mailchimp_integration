import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeDirective } from './home/home.directive';
import { HeaderComponent } from './header/header.component';
import { HeaderDirective } from './header/header.directive';
import { FooterComponent } from './footer/footer.component';
import { FooterDirective } from './footer/footer.directive';
import { SharedService } from './shared/shared.service';
import { ConfigService } from './config/config.service';
import { ApiService } from './config/api.service';
import { customHttpProvider } from './_helpers/custom-http';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { AuthService } from './login/auth.service';
import { AuthGuard } from '././login/auth.guard';
import { PersonModule } from './person/person.module';
import { HeaderENComponent } from './header/header-en.component';
import { HeaderDEComponent } from './header/header-de.component';
import { FooterENComponent } from './footer/footer-en.component';
import { FooterDEComponent } from './footer/footer-de.component';
import { HomeENComponent } from './home/home-en.component';
import { HomeDEComponent } from './home/home-de.component';
import { LoginComponent } from '././login/login.component';
import { CampaignModule } from '././campaign/campaign.module';
import { TemplateModule } from '././template/template.module';
import { ListsModule } from '././list/list.module';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ToastModule.forRoot(),
    RouterModule.forRoot([
     { path: 'home', component: HomeComponent ,canActivate: [AuthGuard]},
     { path: 'login', component: LoginComponent},


     { path: '', redirectTo: 'home', pathMatch: 'full'},
     { path: '**', redirectTo: 'home', pathMatch: 'full'}


    ])
   ,
   PersonModule
   ,
   CampaignModule,
   TemplateModule,
   ListsModule

  ],
  providers: [
  AuthService,
  AuthGuard,
    SharedService,
    ConfigService,
    ApiService,
    customHttpProvider
  ],
  declarations: [ 
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HomeDirective,
    HeaderDirective,
    FooterDirective,
HeaderENComponent,
HeaderDEComponent,
FooterENComponent,
FooterDEComponent,
HomeENComponent,
HomeDEComponent,
LoginComponent
  ],
  entryComponents: [
    HeaderENComponent,
    HeaderDEComponent,
    FooterENComponent,
    FooterDEComponent,
    HomeENComponent,
    HomeDEComponent,
    LoginComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }