import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/Models/CategoryModel/category';
import { CategoryService } from 'src/app/Service/category.service';
import {FormControl} from '@angular/forms';
import { MessageService } from 'src/app/Service/message.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories:Category[] = [];
  currentCategory:Category;
  dataLoaded = false;
  title:string = "Tümü";
  filterText:string="";
  isCategoryList:boolean = false;
  constructor(private messageService:MessageService,private categoryService:CategoryService,private toastrService:ToastrService, private _snackBar: MatSnackBar,private activedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getCategories();
    this.isCategoryList = localStorage.getItem('categorydisable')==="active"?true:false;
  }


  getCategories(){
    this.categoryService.getCategories().subscribe(response=>{
      this.categories = response.data
      this.dataLoaded = true;
    })
  }

  setCurrentCategory(category:Category){
    this.currentCategory = category;
  }

  getCurrentCategoryClass(category:Category){
    if(category == this.currentCategory){
      return "text-center text-danger"
    }
    else{
      return "text-center text-light"
    }
  }


  getAllCategoryClass(){
    if(!this.currentCategory){
     return "text-center text-danger"
    }
    
    else{
     return "text-center text-light"
    }
  }

  openSnackBar(text:string) {
      //this._snackBar.open(text,"Close",{duration:1000,horizontalPosition:"left"});
      this.messageService.openMessageAndAction(text,"Ok",3000);
  }

  isCategoryDisable(){
    localStorage.setItem('categorydisable',this.isCategoryList?"active":"disable");
  }


  
}
