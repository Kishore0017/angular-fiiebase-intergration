import { NgModule, signal } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  {path:'menu',component:ToolBarComponent},
  {path:'sign-in',component:SignInComponent},
  {path:'welcome',component:SignInComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
