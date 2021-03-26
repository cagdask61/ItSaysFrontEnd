import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../Models/CategoryModel/category';
import { ListResponseModel } from '../Models/listResponseModel';
import { ResponseModel } from '../Models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl = 'https://localhost:44367/api/'
  constructor(private httpClient: HttpClient) { }

  getCategories():Observable<ListResponseModel<Category>>{
    let newPath = this.apiUrl + 'categories/categoryall'
    return this.httpClient.get<ListResponseModel<Category>>(newPath);
  }

  addCategory(category:Category):Observable<ResponseModel>{
    let newPath = this.apiUrl + 'categories/categoryadd'
    return this.httpClient.post<ResponseModel>(this.apiUrl +'categories/categoryadd',category);
  }

}
