import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { HomeComponent } from './home/home.component';
import { ServicelistComponent } from './servicelist/servicelist.component';
import { ServicesComponent } from './services/services.component';
import { UserloginComponent } from './userlogin/userlogin.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },{
    path: "about",
    component: AboutComponent
  },{
    path: "services",
    component: ServicesComponent
  },{
    path: "contact",
    component: ContactComponent
  },{
    path: "userlogin",
    component: UserloginComponent
  },
  {
    path: "servicelist",
    component: ServicelistComponent
  },
  {
    path: "services/servicelist/:id",
    component: ServicelistComponent
  },
  {
    path: "**",
    component: ErrorpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
