import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'pm-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit {

  constructor(public dataService: DataService) { }

  @ViewChild('f')
  Forms!: NgForm;

  productList: any = [ 

      { 
        name: "iPhone 12 Pro", 
        price: "6500",
        location: "Zagreb", 
        count: "23"
      },

      { 
        name: "Apple Watch Series 5", 
        price: "2800",
        location: "Split", 
        count: "16"
      },

      { 
        name: "iPhone 7", 
        price: "3600",
        location: "Rijeka", 
        count: "12"
      },

      { 
        name: "iMac Pro", 
        price: "9600",
        location: "Zagreb", 
        count: "5"
      },

      { 
        name: "Apple Watch Series 4", 
        price: "2100",
        location: "Osijek", 
        count: "18"
      },

      { 
        name: "iPad Mini", 
        price: "3100",
        location: "Dubrovnik", 
        count: "19"
      },

      { 
        name: "iPhone XR", 
        price: "4000",
        location: "Rijeka", 
        count: "13"
      }

  ]

  product = {
    name: "",
    price: "",
    location: "",
    count: ""
  }

 

  deleteProduct(productToDelete: any): void {
        const index: number = this.productList.indexOf(productToDelete);
        if (index !== -1) {
           this.productList.splice(index, 1);
        }
  }

  addProduct(): void {
     this.product.name = this.Forms.value.name;
     this.product.price = this.Forms.value.price;
     this.product.location = this.Forms.value.location;
     this.product.count = this.Forms.value.count;

     this.productList.push(this.Forms.value);
     this.Forms.reset();
  }

 loading: boolean = true;
 displayTable: boolean = false;

  ngOnInit(): void {
    setTimeout( ()=>{
      this.loading = false;
      this.displayTable = true;
      }, 3000)
  }

}
