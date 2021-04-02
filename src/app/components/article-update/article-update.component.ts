import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Article } from 'src/app/Models/ArticleModel/article';
import { Category } from 'src/app/Models/CategoryModel/category';
import { ArticleService } from 'src/app/Service/article.service';
import { CategoryService } from 'src/app/Service/category.service';
import { MessageService } from 'src/app/Service/message.service';

@Component({
  selector: 'app-article-update',
  templateUrl: './article-update.component.html',
  styleUrls: ['./article-update.component.css']
})
export class ArticleUpdateComponent implements OnInit {

  articleUpdateForm:FormGroup;
  categories:Category[]=[];
  articleId:number;
  articleTitle:string;
  constructor(private messageService:MessageService,private categoryService:CategoryService,private activatedRoute:ActivatedRoute,private articleService:ArticleService,private toastrService:ToastrService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.getArticleRoute();
    this.getArticleDetail();
  }


  createArticleUpdateForm(){
    this.articleUpdateForm = this.formBuilder.group({
      id:[this.articleId],
      authorId:["",Validators.required],
      categoryId:["",Validators.required],
      title:["",Validators.required],
      writing:["",Validators.required]
    })
  }
  
  categoriesAll(){
    this.categoryService.getCategories().subscribe(response=>{
      this.categories = response.data;
    })
  }

  updateArticle(){
    if (this.articleUpdateForm.valid) {
      let articleModel = Object.assign({},this.articleUpdateForm.value);
      this.articleService.updateArticle(articleModel).subscribe(response=>{
        this.toastrService.success(response.message);
      },responseError=>{
        if(responseError.error.Errors.length>0){
          for (let i = 0; i < responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors.length[i].ErrorMessage);
            this.messageService.openToastrMessageBoxError(responseError.error.Errors[i].ErrorMessage,"Ok");
          }
        }
      })
    }
    else{
      //this.toastrService.info("hata var");
      this.messageService.openToastrMessageBoxInfo("Hata var");
    }
  }

  getArticleRoute(){
    this.activatedRoute.params.subscribe(params=>{
      if (params['id']) {
        this.articleId = parseInt(params['id']);
      }
      this.createArticleUpdateForm();
      this.categoriesAll();
    })
  }

  getArticleDetail(){
      this.articleService.getArticlesDetailArticleId(this.articleId).subscribe(response=>{
        this.articleTitle = response.data.title
      })
  }
  
}
