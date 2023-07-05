import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorRegisterComponent } from './Auth/author-register/author-register.component';
import { LoginComponent } from './Auth/login/login.component';
import { PublisherRegisterComponent } from './Auth/publisher-register/publisher-register.component';
import { TitleComponent } from './Components/title/title.component';
import { AuthGuard } from './Services/auth.guard';
import { LogGuard } from './Services/log.guard';

import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ProfileComponent } from './Components/profile/profile.component';

const routes: Routes = [
  {path:"",component:DashboardComponent,canActivate:[AuthGuard]},
  {path:"login",component:LoginComponent,canActivate:[LogGuard]},
  {path:"author-register",component:AuthorRegisterComponent,canActivate:[LogGuard]},
  {path:"publisher-register",component:PublisherRegisterComponent,canActivate:[LogGuard]},
  { path: "dashboard", component: DashboardComponent,children: 
  [
    {path:"title",component:TitleComponent},
    {path:"profile",component:ProfileComponent}
  ], canActivate: [AuthGuard] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
