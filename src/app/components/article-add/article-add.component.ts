import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/Models/CategoryModel/category';
import { ArticleService } from 'src/app/Service/article.service';
import { CategoryService } from 'src/app/Service/category.service';
import { MessageService } from 'src/app/Service/message.service';

@Component({
  selector: 'app-article-add',
  templateUrl: './article-add.component.html',
  styleUrls: ['./article-add.component.css']
})
export class ArticleAddComponent implements OnInit {

  articleAddForm:FormGroup;
  constructor(private messageService:MessageService,private formBuilder:FormBuilder,private articleService:ArticleService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createArticleAddForm();
  }

  createArticleAddForm(){
    this.articleAddForm = this.formBuilder.group({
      authorId:["",Validators.required],
      categoryId:["",Validators.required],
      title:["",Validators.required],
      writing:["",Validators.required]

    })
  }

  articleAdd(){
    if(this.articleAddForm.valid){
      let articleModel = Object.assign({},this.articleAddForm.value)
      this.articleService.addArticle(articleModel).subscribe(response=>{
        this.messageService.openToastrMessageBoxSuccess(response.message,"Başarılı");
        // this.toastrService.success(response.message,"Başarılı");
      },responseError=>{
        if(responseError.error.Errors.length>0){
          // this.toastrService.warning(responseError.error.Errors)
          for(let i=0;i<responseError.error.Errors.length;i++){
            //this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Doğrulama hatası");
            this.messageService.openToastrMessageBoxError(responseError.error.Errors[i].ErrorMessage,"Doğrulama hatası");
          }
        }
      })
    }
  }

  

}
