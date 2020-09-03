import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { blog } from 'src/modal/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor() { }
  private blog: blog[] = [];

  delete(id:number){
    this.blog.splice(id, 1);
  
  }

}
