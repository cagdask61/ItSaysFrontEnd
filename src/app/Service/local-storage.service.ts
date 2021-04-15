import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getItem(key:string){
    return localStorage.getItem(key);
  }

  setItem(key:string, value:string){
    return localStorage.setItem(key,value);
  }

  getJsonItem(item:any, key:string){
    return item = JSON.parse(localStorage.getItem(key));
  }

  setJsonItem(key:string, value:any){
    return localStorage.setItem(key,JSON.stringify(value))
  }

  clear(){
    localStorage.clear();
  }

  removeItem(key:string){
    localStorage.removeItem(key);
  }

  getKey(index:number){
    localStorage.key(index);
  }
}
