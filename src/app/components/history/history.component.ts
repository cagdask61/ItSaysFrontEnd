import { Component, OnInit } from '@angular/core';
import { ArticleHistory } from 'src/app/Models/ArticleModel/articleHistory';
import { ArticleHistoryService } from 'src/app/Service/article-history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  historyItems:ArticleHistory[] = [];
  constructor(private articleHistoryService:ArticleHistoryService) { }

  ngOnInit(): void {
    this.writeHistory();
  }

  writeHistory(){
    this.historyItems = this.articleHistoryService.writeHistory();
  }

}
