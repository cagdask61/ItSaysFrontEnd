import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ArticleDto } from 'src/app/Models/ArticleModel/articleDto';
import { ArticleService } from 'src/app/Service/article.service';
import { MessageService } from 'src/app/Service/message.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {

  articleTitle:string;
  articleWriting:string;
  articleCategoryName:string;
  articleDate:Date;
  articleFirstName:string;
  articleLastName:string;

  isCheckedData:boolean=false;


  constructor(private messageService:MessageService,private articleService:ArticleService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getActiveRoute();
  }

  getArticleDto(articleId:number){
    this.articleService.getArticlesDetailArticleId(articleId).subscribe(response=>{
      
      this.articleTitle = response.data.title
      this.articleFirstName = response.data.firstName
      this.articleLastName = response.data.lastName  
      this.articleWriting = response.data.writing
      this.articleDate = response.data.date
      this.articleCategoryName = response.data.categoryName
      this.isCheckedData = true;
    })
  }

  getActiveRoute(){
    this.activatedRoute.params.subscribe(params=>{
      if(params["articleId"]){
        this.getArticleDto(params["articleId"])
      }
      else{
        this.messageService.openMessageAndAction("Hata oluştu!","Ok",3000);
      }
    })
  }

}


