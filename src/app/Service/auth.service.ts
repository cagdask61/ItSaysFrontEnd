import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from '../Models/Auth/loginModel';
import { TokenModel } from '../Models/Auth/tokenModel';
import { SingleResponseModel } from '../Models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiLoginUrl = 'https://localhost:44367/api/auth/login'
  apiRegisterUrl = 'https://localhost:44367/api/auth/register'
  constructor(private htttpClient:HttpClient) { }


  login(loginModel:LoginModel):Observable<SingleResponseModel<TokenModel>>{
    return this.htttpClient.post<SingleResponseModel<TokenModel>>(this.apiLoginUrl,loginModel)
  }

  register(registerModule:LoginModel):Observable<SingleResponseModel<TokenModel>>{
    return this.htttpClient.post<SingleResponseModel<TokenModel>>(this.apiRegisterUrl,registerModule)
  }

  isAuthenticated(){
    if(localStorage.getItem('atoken')){
      return true;
    }
    else{
      return false;
    }
  }

  
}
