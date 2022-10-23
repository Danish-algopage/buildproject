import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChildtoparentComponent } from './childtoparent/childtoparent.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { MatButtonModule } from '@angular/material/button'
import { FormsModule } from '@angular/forms';
import { CustompipePipe } from './pipe/custompipe.pipe';
import { MainsliderComponent } from './mainslider/mainslider.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { RedDirective } from './color/red.directive';
import { ServicelistComponent } from './servicelist/servicelist.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent,
    ChildtoparentComponent,
    UserdetailsComponent,
    CustompipePipe,
    MainsliderComponent,
    UserloginComponent,
    FooterComponent,
    RedDirective,
    ServicelistComponent,
    ErrorpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
