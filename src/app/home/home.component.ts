import { LocalStorageService } from 'ngx-webstorage';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username;
  constructor(private localStorageService: LocalStorageService, private route: Router) { }

  ngOnInit(): void {
    this.username= this.localStorageService.retrieve('user').name;
  }
  logout() {
    this.localStorageService.clear('user');
    this.route.navigate(['login']);
  }
}

