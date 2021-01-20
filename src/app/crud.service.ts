import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  public url = "http://localhost:3000/"
  constructor(private http:HttpClient) { }

  selectdata(jsonserverkey){
    return this.http.get(this.url+jsonserverkey);
  }

  postdata(jsonserverkey,obj){
    return this.http.post(this.url+jsonserverkey, obj);
  }

  selectCondition(jsonserverkey, id){
    return this.http.get(this.url + jsonserverkey + "/" +id);
  }

  updatedata(jsonserverkey, rec, id){
    return this.http.put(this.url + jsonserverkey + "/" + id , rec)
  }


}
