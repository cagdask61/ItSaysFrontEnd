import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Article } from 'src/app/Models/ArticleModel/article';
import { ArticleService } from 'src/app/Service/article.service';

@Component({
  selector: 'app-article-update',
  templateUrl: './article-update.component.html',
  styleUrls: ['./article-update.component.css']
})
export class ArticleUpdateComponent implements OnInit {

  articleUpdateForm:FormGroup;
  constructor(private articleService:ArticleService,private toastrService:ToastrService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }

  

}
