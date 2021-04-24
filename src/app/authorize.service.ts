import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise'
@Injectable()
export class AuthorizeService {

  constructor(private http:Http) { }

  getAuthToken(name, pwd) {
    return this.http.post('http://localhost:8080/api/v1/login',{"name":name, "pwd":pwd})
    .toPromise()
    .then(function(res){
      return res.json()
    })
    .catch((err)=>{
      console.log(err)
    })
  }
}
