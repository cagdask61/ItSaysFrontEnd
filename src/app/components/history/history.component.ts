import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
  deneme:string;
  constructor(private articleHistoryService:ArticleHistoryService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.writeHistory();
  }

  writeHistory(){
    this.historyItems = this.articleHistoryService.writeHistory();
    this.historyItems.forEach(element => {
      localStorage.setItem('history',element.articleDetail.title);
      
    }); 
    
    this.deneme = localStorage.getItem('history');
  }

  denemeClick(){
    this.dialog.open(MessageComponent);
  }
}
