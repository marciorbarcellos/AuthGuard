import { Component, OnInit } from '@angular/core';
import { AuthorizeService } from './../authorize.service';
import { LocalStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthorizeService]
})
export class LoginComponent implements OnInit {
  name;
  pwd;
  constructor(private auth: AuthorizeService, private localStorageService: LocalStorageService,
    private route: Router) { }

  ngOnInit() {
  }
  login() {
    this.auth.getAuthToken(this.name, this.pwd).then(res=>{
      if(res.valid){
        this.localStorageService.store('user', res);
        this.route.navigate(['home']);
      }
      else{
        alert("login failed");
      }
    })
  }
}
