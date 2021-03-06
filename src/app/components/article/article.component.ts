import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ArticleDto } from 'src/app/Models/ArticleModel/articleDto';
import { ArticleHistoryService } from 'src/app/Service/article-history.service';
import { ArticleService } from 'src/app/Service/article.service';
import { MessageService } from 'src/app/Service/message.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  articlesDto:ArticleDto[] = [];
  messages:string;
  filterText:string="";
  messagetext:string;
  constructor(private _snackBar:MatSnackBar,private articleService:ArticleService,private articleHistoryService:ArticleHistoryService,private toastrService:ToastrService,private messageService:MessageService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getActivedRouteCategory();
  }

  getArticleDto(){
    this.articleService.getArticlesDetail().subscribe(response=>{
      this.articlesDto = response.data;
      this.messages = response.message;
    })
  }

  getArticlesByCategoryC(categoryId:number){
    this.articleService.getArticlesDetailByCategory(categoryId).subscribe(response=>{
      this.articlesDto = response.data;
    })
  }

  
  
  getActivedRouteCategory(){
    this.activatedRoute.params.subscribe(params=>{
      if(params["categoryId"]){
        this.getArticlesByCategoryC(params["categoryId"])
      }
      else{
        this.getArticleDto();
      }
    })
  }


  readHistory(article:ArticleDto){
    this.articleHistoryService.readHistory(article);
    
  }


  openMessage(){
    
    this.messageService.openMessageAndAction("En Yakın Zamanda")
  }


  copyMessageReturn(){
    this.messageService.openMessageAndAction("Başarıyla kopyalandı","Ok",3000)
  }
 
}
