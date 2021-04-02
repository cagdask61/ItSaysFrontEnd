import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MessageService } from 'src/app/Service/message.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  constructor(private toastrService:ToastrService,private messageService:MessageService) { }

  ngOnInit(): void {
  }


  Logout(){
    if(localStorage.getItem('atoken')){
      //this.toastrService.info("Çıkış yapıldı");
      this.messageService.openToastrMessageBoxInfo("Başarıyla Çıkış yapıldı.");
      localStorage.removeItem('atoken');
    }
    else{
      //this.toastrService.error("Çıkış yapılamadı");
      this.messageService.openToastrMessageBoxError("Çıkış yapılamadı!");
    }
  }
}
