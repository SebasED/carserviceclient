import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  irOwnerCar(): void{
    this.router.navigate(['/car-owner']);
  }

  irCarList(): void{
    this.router.navigate(['/car-list']);
  }

  irOwnerList(): void{
    this.router.navigate(['/owner-list']);
  }
}
