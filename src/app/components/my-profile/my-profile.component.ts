import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  constructor(private toastrService:ToastrService) { }

  ngOnInit(): void {
  }


  Logout(){
    if(localStorage.getItem('atoken')){
      this.toastrService.info("Çıkış yapıldı");
      localStorage.removeItem('atoken');
    }
    else{
      this.toastrService.error("Çıkış yapılamadı");
    }
  }
}
