import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ArticleDto } from 'src/app/Models/ArticleModel/articleDto';
import { ArticleHistory } from 'src/app/Models/ArticleModel/articleHistory';
import { ArticleHistoryService } from 'src/app/Service/article-history.service';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  historyItems:ArticleHistory[] = [];
  articles:ArticleDto;
  historyItems2:ArticleHistory;
  constructor(private articleHistoryService:ArticleHistoryService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.writeHistory();
  }

  writeHistory(){
    this.historyItems = this.articleHistoryService.writeHistory();
    
    this.articles = JSON.parse(localStorage.getItem('historya'));
  }

  denemeClick(){
    this.dialog.open(MessageComponent);
  }
}
