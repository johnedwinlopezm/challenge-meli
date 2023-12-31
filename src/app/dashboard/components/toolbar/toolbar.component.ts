import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.sass'
})
export class ToolbarComponent {
  logo = '../../../assets/images/Logo_ML.png';
  search = '../../../assets/images/ic_Search.png';
  inputPlaceHolder = 'Nunca dejes de buscar'

  product = new FormControl('');

  constructor(private router: Router){
  }

  searchProduc() {
    const product = this.product.getRawValue();
    if(product) {
      this.router.navigate(['items', product]);
    }
  }
}
