import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title:string = "It Says";
  checkedDarkMode:boolean = false;
  dateTimePicker:Date;
  navbarIcon:string[]=["home","article","post_add","history","dark_mode","how_to_reg","login"];
  navbarInfoText:string[] = ["Ana sayfa","Yazılar","Yazı ekle","Geçmiş","Koyu mode","Kayıt ol","Giriş yap"]
  isActiveIcon:boolean=false;
  constructor() { }

  ngOnInit(): void {
    this.isActiveIcon = localStorage.getItem('theme-mode')==="Dark"?true:false;
  }


  storeThemeSelection(){
    // document.body.classList.toggle('darkMode');
    localStorage.setItem('theme-mode',this.isActiveIcon?"Dark":"Light")
  }

 

}
