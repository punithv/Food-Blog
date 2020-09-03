import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {

  constructor(public http:HttpService) { }

  ngOnInit() {
  }

  
}
