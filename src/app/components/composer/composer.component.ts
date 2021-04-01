import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Composer } from 'src/app/Models/ComposerModel/composer';
import { ComposerService } from 'src/app/Service/composer.service';

@Component({
  selector: 'app-composer',
  templateUrl: './composer.component.html',
  styleUrls: ['./composer.component.css']
})
export class ComposerComponent implements OnInit {

  composerData:Composer[];
  composerMessage:string;
  constructor(private composerService:ComposerService) { }

  ngOnInit(): void {
    this.getComposerList();
  }


  getComposerList(){
    this.composerService.getComposers().subscribe(response=>{
      this.composerData = response.data
      this.composerMessage = response.message
    })
  }

  drop(event: CdkDragDrop<Composer[]>) {
    moveItemInArray(this.composerData, event.previousIndex, event.currentIndex);
  }
}
