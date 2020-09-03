import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { AddBlogComponent } from './component/add-blog/add-blog.component';
import { AllBlogComponent } from './component/all-blog/all-blog.component';
import { HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { EditBlogComponent } from './component/edit-blog/edit-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AddBlogComponent,
    AllBlogComponent,
    EditBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
