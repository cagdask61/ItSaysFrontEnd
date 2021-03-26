import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators, FormControl } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/Service/category.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {

  categoryAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private categoryService:CategoryService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createCategoryAddForm();
  }

  createCategoryAddForm(){
    this.categoryAddForm = this.formBuilder.group({
      categoryName:["",Validators.required]
    })
  }


  categoryAdd(){
    if(this.categoryAddForm.valid){
      let categoryModel = Object.assign({},this.categoryAddForm.value)
      this.categoryService.addCategory(categoryModel).subscribe(response=>{
        this.toastrService.success(response.message,"Başarılı");
      },responseError=>{
        if(responseError.error.Errors.length>0){
          // this.toastrService.warning(responseError.error.Errors)
          console.log(responseError.error.Errors);
          for(let i=0;i<responseError.error.Errors.length;i++){
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Doğrulama hatası")
          }
        }
      })
    }
  }
}
