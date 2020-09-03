import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { blog } from 'src/modal/blog';
import { BlogService} from 'src/app/services/blog.service';
import { Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  Blogs:blog[];
  api = "http://localhost:3000/blogs"

  constructor( public http:HttpClient,public blogservice:BlogService) { }

  addBlogs(Blog:blog){
    return this.http.post(this.api,Blog,httpOptions)
  }

  getBlogs(){
    return this.http.get<blog[]>(this.api);
  }

  deleteBlog(id:number){
    return this.http.delete(this.api+'/'+id,httpOptions);
  }
  updateBlog(Blog:blog){
    return this.http.put(this.api+'/'+Blog.id,Blog,httpOptions)
      
  }
}
