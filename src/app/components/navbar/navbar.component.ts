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
  navbarIcon:string[]=["home","article","post_add","history","dark_mode"];
  navbarInfoText:string[] = ["Ana sayfa","Yazılar","Yazı ekle","Geçmiş","Koyu mode"]
  constructor() { }

  ngOnInit(): void {
    this.checkedDarkMode = localStorage.getItem('theme-mode')==="Dark"?true:false;
  }


  storeThemeSelection(){
    // document.body.classList.toggle('darkMode');
    localStorage.setItem('theme-mode',this.checkedDarkMode?"Dark":"Light")
  }

 

}
