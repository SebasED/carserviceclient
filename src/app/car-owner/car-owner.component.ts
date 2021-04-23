import { Component, OnInit } from '@angular/core';
import { CarService } from '../shared/car/car.service';
import { OwnerService } from '../shared/owner/owner.service';

@Component({
  selector: 'app-car-owner',
  templateUrl: './car-owner.component.html',
  styleUrls: ['./car-owner.component.css']
})
export class CarOwnerComponent implements OnInit {

  cars: Array <any>;
  owners: Array<any>;
  carOwner = {car:'',owner:''};
  lisCarOwner: Array<any>;



  constructor(private carService: CarService, private ownerService: OwnerService) { }

  ngOnInit() {
    this.carService.getAll2().subscribe(dataCar => {
      this.cars = dataCar._embedded.cars;
      console.log(this.cars);
    });
    this.ownerService.getAll().subscribe(dataOwner => {
      this.owners = dataOwner._embedded.owners;
      console.log(this.owners);
    })
    this.findCarOwner(this.cars, this.owners);
  }

  findCarOwner(cars, owners):void{
    cars.forEach(item => {
      owners.array.forEach(element => {
        if (item.ownerDni == element.dni) {
          this.carOwner.car = item.name;
          this.carOwner.owner = element.name;
          this.lisCarOwner.push(this.carOwner);
        }
      });
    });
    console.log(this.lisCarOwner);
  }


}
