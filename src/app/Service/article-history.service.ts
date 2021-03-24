import { Injectable } from '@angular/core';
import { ArticleDto } from '../Models/ArticleModel/articleDto';
import { ArticleHistory } from '../Models/ArticleModel/articleHistory';
import { ArticleHistorys } from '../Models/ArticleModel/articleHistorys';

@Injectable({
  providedIn: 'root'
})
export class ArticleHistoryService {

  constructor() { }

  readHistory(articleDetail:ArticleDto){
    let articleItem = ArticleHistorys.find(h=>h.articleDetail.number===articleDetail.number);
    if(articleItem){
      articleItem.quantity +=1;
    }
    else{
      let articleHistoryItem = new ArticleHistory();
      articleHistoryItem.articleDetail = articleDetail;
      articleHistoryItem.quantity = 1;
      ArticleHistorys.push(articleHistoryItem);
    }
  }

  writeHistory():ArticleHistory[]{
    return ArticleHistorys;
  }
}
