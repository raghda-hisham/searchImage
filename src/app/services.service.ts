import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(public _Http:HttpClient) { }
  find(name:string):Observable<any>
  {
    return this._Http.get("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=96b8c228f11d210e644dca76cb21cb90&text="+name+"&format=json&nojsoncallback=1")
  }
}
