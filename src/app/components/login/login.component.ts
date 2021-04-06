import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/Service/auth.service';
import { MessageService } from 'src/app/Service/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  constructor(private messageService:MessageService,private router:Router,private formBuilder:FormBuilder,private authService:AuthService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createLoginForm();
  }


  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email:["",Validators.required],
      password:["",Validators.required]
    })
  }

 

  login(){
    if(this.loginForm.valid){
      let loginModel = Object.assign({},this.loginForm.value)
      this.authService.login(loginModel).subscribe(response=>{
        //this.toastrService.success(response.message)
        this.messageService.openToastrMessageBoxSuccess(response.message);
        localStorage.setItem('atoken',response.data.token)
        this.router.navigate(["/myprofile"])
      },
      responseError=>{
        //this.toastrService.error(responseError.error)
        this.messageService.openToastrMessageBoxError(responseError.error);
      })
    }
  }

  // account(){
  //   let loginModel = Object.assign({},this.loginForm.value);
  //   return loginModel;
  // }
}
