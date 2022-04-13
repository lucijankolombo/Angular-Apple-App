import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'pm-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public dataService: DataService) { }

  logout(): void {
    this.dataService.didUserLogin = false;
  }

  ngOnInit(): void {
  }

}
