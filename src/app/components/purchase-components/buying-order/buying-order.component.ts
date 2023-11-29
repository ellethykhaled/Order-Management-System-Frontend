import { Component, OnInit } from '@angular/core';
import { PurchaseService } from 'src/app/services/purchase.service';
import { PurchaseOrder } from 'src/app/interfaces/purchase';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'buying-order',
  templateUrl: './buying-order.component.html',
  styleUrls: ['./buying-order.component.scss']
})
export class BuyingOrderComponent implements OnInit {
  form!: FormGroup;
  isErrorFree = true;

  constructor(private formBuilder: FormBuilder,
    private purchaseService: PurchaseService) {
    this.form = this.formBuilder.group({
      products: this.formBuilder.array([])
    });
  }

  ngOnInit(): void {
    this.addProduct();
  }

  get products() {
    return this.form.controls["products"] as FormArray;
  }
  getProductForm(i): FormGroup {
    console.log('Here 1')
    console.log(typeof this.products)
    console.log(typeof this.products.get(i))
    
    return this.products.at(i) as FormGroup;
  }

  addProduct(): void {
    const productForm = this.formBuilder.group({
      name: new FormControl('ok', [Validators.pattern('[\\w\\-\\s\\/]+'), Validators.required]),
      quantity: new FormControl(1, [Validators.required, Validators.min(1)]),
      price: new FormControl(0.01, [Validators.required, Validators.min(0.01)]),
      category: new FormControl('ok', [Validators.pattern('[\\w\\-\\s\\/]+'), Validators.required]),
    });
    this.products.push(productForm);
    console.log("Added Product");
  }

  deleteProduct(index): void {
    this.products.removeAt(index);
    console.log("Deleted $d", index);
  }

  submitOrder(orderForm) {
    console.log(orderForm.products.length);

    const order: PurchaseOrder = {
      products: this.products.value.map((product) => ({
        name: product.name,
        quantity: product.quantity,
        price: product.price,
        category: { name: product.category },
      })),
    };

    this.purchaseService.submitBuyingOrder(order).subscribe(
      {
        next: data => {
          this.isErrorFree = true;
          console.log('Purchased');
        },
        error: err => {
          console.log(err);
          this.isErrorFree = false;
        }
      }
    )
  }
}
