import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private _snackBar: MatSnackBar,private toastrService:ToastrService) { }

  openMessageAndAction(messageText:string,actionText:string = '',durationValue:number = 2000){
    this._snackBar.open(messageText,actionText,{duration:durationValue,verticalPosition:"bottom",horizontalPosition:"left"});
  }

  openMessage(messageText:string){
    this._snackBar.open(messageText);
  }
  
  openToastrMessageBoxSuccess(messageValue:string,titleValue:string=''){
    this.toastrService.success(messageValue,titleValue);
  }
  openToastrMessageBoxError(messageValue:string,titleValue:string=''){
    this.toastrService.error(messageValue,titleValue);
  }
  openToastrMessageBoxInfo(messageValue:string,titleValue:string=''){
    this.toastrService.info(messageValue,titleValue);
  }
  openToastrMessageBoxWarning(messageValue:string,titleValue:string=''){
    this.toastrService.warning(messageValue,titleValue);
  }
}
