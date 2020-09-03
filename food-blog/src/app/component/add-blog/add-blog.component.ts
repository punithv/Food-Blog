import { Component, OnInit } from '@angular/core';
import { blog} from 'src/modal/blog';
import {  HttpService } from 'src/app/services/http.service';
import { Router} from "@angular/router";

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
  Blogs:blog={
    id:null,
    blog_title:'',
    image_url:'',
    blog_desc:'', 
  };

  constructor(public http:HttpService,public router:Router) { }

  ngOnInit() {
  }

  addBlog(){
    this.http.addBlogs(this.Blogs).subscribe((data)=>{
      console.log("data"+data);
      
    });
    this.router.navigate(['allblogs']);
  }

}
