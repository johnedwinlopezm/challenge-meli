import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.sass'
})
export class DashboardComponent {

  logo = '../../../assets/images/Logo_ML.png';
  search = '../../../assets/images/ic_Search.png';
  inputPlaceHolder = 'Nunca dejes de buscar'

  constructor(private router: Router){
  }

  characters(){
    this.router.navigate(['dashboard/character/list']);
  }

  episodes(){
    this.router.navigate(['dashboard/episode/list']);
  }

  locations() {
    this.router.navigate(['dashboard/location/list']);
  }
}
