import { Component, OnInit } from '@angular/core';
import { blog } from "src/modal/blog";
import { HttpService}from 'src/app/services/http.service'
import { Router } from "@angular/router"; 

@Component({
  selector: 'app-all-blog',
  templateUrl: './all-blog.component.html',
  styleUrls: ['./all-blog.component.css']
})
export class AllBlogComponent implements OnInit {

  Blogs:blog[];
  Blog:blog;

  constructor(public http:HttpService,public router:Router) { }

  ngOnInit() {
    this.refreshData();
  }

  refreshData(){
    this.http.getBlogs().subscribe((data)=>{
      this.Blogs=Object.keys(data).map(key => data[key]);
      console.log("getdata"+this.Blogs);
    });

  }
 

    deleteblog(id:number){
      this.http.deleteBlog(id).subscribe((data)=>{
        
      });
      this.router.navigate(['allblogs']);
    }

    editblog(Blog:blog){
      this.router.navigate(['addblog'])
      this.http.updateBlog(Blog).subscribe((data)=>{
        
      })
    }
  

    


}
