import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../Models/ArticleModel/article';
import { ArticleDto } from '../Models/ArticleModel/articleDto';
import { ListResponseModel } from '../Models/listResponseModel';
import { ResponseModel } from '../Models/responseModel';
import { SingleResponseModel } from '../Models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  apiUrl = 'https://localhost:44367/api/'
  constructor(private httpClient: HttpClient) { }

  getArticles():Observable<ListResponseModel<Article>>{
    let newPath = this.apiUrl + 'articles/articleall'
    return this.httpClient.get<ListResponseModel<Article>>(newPath);
  }

  //--
  getArticlesDetail():Observable<ListResponseModel<ArticleDto>>{
    let newPath = this.apiUrl + 'articles/articledetail'
    return this.httpClient.get<ListResponseModel<ArticleDto>>(newPath);
  }

  getArticlesDetailByCategory(categoryId:number):Observable<ListResponseModel<ArticleDto>>{
    let newPath = this.apiUrl + 'articles/articledetailfiltercategory?categoryId='+categoryId
    return this.httpClient.get<ListResponseModel<ArticleDto>>(newPath);
  }

  getArticlesDetailArticleId(articleId:number):Observable<SingleResponseModel<ArticleDto>>{
    let newPath = this.apiUrl +'articles/articledtofilter?articleId='+articleId
    return this.httpClient.get<SingleResponseModel<ArticleDto>>(newPath);
  }

  addArticle(article:Article):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'articles/articleadd',article);
  }

  updateArticle(article:Article):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'articles/articleupdate',article);
  }

  deleteArticle(article:Article):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'articles/articledelete',article);
  }
 
 
}
