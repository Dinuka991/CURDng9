import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './add-user/add-user.component';
import { MaterialModule } from './material/material.module';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';





@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    UserComponent,
    UsersComponent
    
    
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
