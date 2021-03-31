import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Composer } from '../Models/ComposerModel/composer';
import { ListResponseModel } from '../Models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {

  private apiUrl = 'https://localhost:44367/api/Composers/';
  constructor(private httpClient:HttpClient) { }

  getComposers():Observable<ListResponseModel<Composer>>{
    let composerUrl = this.apiUrl + 'getcomposersall';
    return this.httpClient.get<ListResponseModel<Composer>>(composerUrl);
  }
}
