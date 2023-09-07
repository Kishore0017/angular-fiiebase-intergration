import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
//import { HttpClient } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SignInComponent } from './sign-in/sign-in.component';

//import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  {path:'',component:SignInComponent},
  {path:'menu',component:ToolBarComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToolBarComponent,
    ToolBarComponent,
    MatToolbarModule, MatListModule, MatButtonModule, MatIconModule,
    RouterModule.forRoot(routes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
