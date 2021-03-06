import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/Service/auth.service';
import { MessageService } from 'src/app/Service/message.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;

  constructor(private messageService:MessageService,private router:Router,private formBuilder:FormBuilder,private authService:AuthService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createRegisterForm();
  }


  createRegisterForm(){
    this.registerForm = this.formBuilder.group({
      email:["",Validators.required],
      password:["",Validators.required],
      firstName:["",Validators.required],
      lastName:["",Validators.required]
    })
  }

  register(){
    if (this.registerForm.valid) {
      let registerModel = Object.assign({},this.registerForm.value)
      this.authService.register(registerModel).subscribe(response=>{
        //this.toastrService.success(response.message)
        this.messageService.openToastrMessageBoxSuccess(response.message);
        this.router.navigate(["/login"]);
      })
    }
    else{
      //this.toastrService.error("Hata")
      this.messageService.openToastrMessageBoxError("Hata!");
    }
  }
}
