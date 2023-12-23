import { Component, Input } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'app-info-item',
  templateUrl: './info-item.component.html',
  styleUrl: './info-item.component.sass'
})
export class InfoItemComponent {
  @Input() item!: Item;
  shipping = '../../../assets/images/ic_shipping.png';
}
