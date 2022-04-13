import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'pm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, public dataService: DataService) { }

  @ViewChild('f')
  Forms!: NgForm;

  username: string = '';
  password: any = '';

  firstLastName: string = '';

  login: boolean = true;
  register: boolean = false;

  registerUser(): void {
     this.register = true;
     this.login = false;
  }

  loginUser(): void {
    this.register = false;
    this.login = true;
  }

  navigate(): void {
    this.router.navigate(['/list']);
    console.log(this.username);
    this.dataService.userName = this.username;
    console.log(this.dataService.userName);
    this.dataService.didUserLogin = true;
  }


  ngOnInit(): void {
  }

}
