import { Component, OnInit } from '@angular/core';
import { SearchProductsService } from '../../services/search-products.service';
import { ActivatedRoute } from '@angular/router';
import { ItemDesResponse } from '../../models/itemdesResponse';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrl: './detail-product.component.sass'
})
export class DetailProductComponent implements OnInit {

  ItemDesResponse!:ItemDesResponse;
  titleDescription = 'Descripcion del producto';
  categorias: string []= [];
  constructor(
    private searchProducts: SearchProductsService, 
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ idProduct }) => {
      if (idProduct) {
        this.searchProducts.getDescriptionProduct(idProduct).subscribe({
          next: result => {
            if (result) {
              this.ItemDesResponse = result;
              this.categorias = this.searchProducts.getCategorias();
              // this.categorias.push(this.ItemDesResponse.item.title);
            }
          },
          error: error => { console.log(error) }
        })
      }
    });
  }

}
