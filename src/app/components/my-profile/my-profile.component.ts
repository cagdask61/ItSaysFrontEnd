import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LoginModel } from 'src/app/Models/Auth/loginModel';
import { MessageService } from 'src/app/Service/message.service';
import { LoginComponent } from '../login/login.component';

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

  // myAccount(){
  //   this.loginComponent.account();
  // }
}
