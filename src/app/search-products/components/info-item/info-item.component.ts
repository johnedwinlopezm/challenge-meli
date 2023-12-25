import { Component, Input } from '@angular/core';
import { Item } from '../../models/item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-item',
  templateUrl: './info-item.component.html',
  styleUrl: './info-item.component.sass'
})
export class InfoItemComponent {
  @Input() item!: Item;
  @Input() isFirst = false;
  shipping = '../../../assets/images/ic_shipping.png';

  constructor(private router: Router){}

  openDescription(idProduct:string) {
    this.router.navigate(['dashboard/items', idProduct]);
  }
}
