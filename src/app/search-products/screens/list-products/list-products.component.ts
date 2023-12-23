import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SearchProductsService } from '../../services/search-products.service';
import { ActivatedRoute } from '@angular/router';
import { Search } from '../../models/search';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.sass'
})
export class ListProductsComponent implements OnInit {

  search!: Search;

  constructor(private searchProducts: SearchProductsService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ product }) => {
      if (product) {
        this.searchProducts.getProducts(product).subscribe({
          next: result => {
            if (result) {
              this.search = result
            }
          },
          error: error => { console.log(error) }
        })
      }
    });
  }

}
