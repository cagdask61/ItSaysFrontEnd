import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/Models/CategoryModel/category';
import { CategoryService } from 'src/app/Service/category.service';
import {FormControl} from '@angular/forms';

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
  constructor(private categoryService:CategoryService,private toastrService:ToastrService, private _snackBar: MatSnackBar,private activedRoute:ActivatedRoute) { }

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
    // this.toastrService.info(category.categoryName,"tıklandı")
  }

  getCurrentCategoryClass(category:Category){
    if(category == this.currentCategory){
      return "text-center text-warning"
    }
    else{
      return "text-center text-white"
    }
  }


  getAllCategoryClass(){
    if(!this.currentCategory){
     return "text-center text-warning"
    }
    
    else{
     return "text-center text-white"
    }
  }

  openSnackBar(text:string) {
      this._snackBar.open(text,"Close",{duration:1000,horizontalPosition:"left"});
  }

  isCategoryDisable(){
    localStorage.setItem('categorydisable',this.isCategoryList?"active":"disable");
  }


  
}
