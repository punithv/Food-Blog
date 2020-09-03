import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBlogComponent } from './component/add-blog/add-blog.component';
import { AllBlogComponent } from './component/all-blog/all-blog.component';


const routes: Routes = [{
  
  path:'addblog',component:AddBlogComponent
},
{ path:'',component:AllBlogComponent},
{ path:'allblogs',component:AllBlogComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
