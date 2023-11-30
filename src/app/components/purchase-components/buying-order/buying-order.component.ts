import { Component, OnInit } from '@angular/core';
import { PurchaseService } from 'src/app/services/purchase.service';
import { PurchaseOrder } from 'src/app/interfaces/purchase';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'buying-order',
  templateUrl: './buying-order.component.html',
  styleUrls: ['./buying-order.component.scss']
})
export class BuyingOrderComponent implements OnInit {
  form!: FormGroup;
  processingRequest = false;

  constructor(private formBuilder: FormBuilder,
    private purchaseService: PurchaseService,
    private snackBar: MatSnackBar,
    private router: Router
    ) {
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
  calculateProductTotal(i) {
    const product = this.products.at(i).value;
    const total = (product.quantity * product.price).toFixed(2);
    return total;
  }

  calculateTotalPrice() {
    let total = 0;

    this.products.controls.forEach((productControl) => {
      const product = productControl.value;
      total += product.quantity * product.price;
    });

    return total.toFixed(2);
  }

  addProduct(): void {
    const productForm = this.formBuilder.group({
      name: new FormControl('', [Validators.pattern('[\\w\\-\\s\\/]+'), Validators.required]),
      quantity: new FormControl(1, [Validators.required, Validators.min(1)]),
      price: new FormControl(0.01, [Validators.required, Validators.min(0.01)]),
      category: new FormControl('', [Validators.pattern('[\\w\\-\\s\\/]+'), Validators.required]),
    });
    this.products.push(productForm);
    console.log("Added product");
  }

  deleteProduct(index): void {
    this.products.removeAt(index);
    console.log("Deleted product at ", index);
  }

  submitOrder(orderForm) {
    this.processingRequest = true;
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
        next: async () => {
          console.log('Purchased');
          this.snackBar.open('Purchase Complete!', 'Close', {
            duration: 5000,
          });
          await new Promise(f => setTimeout(f, 5000));
          this.router.navigate(['buying/details']);
        },
        error: err => {
          this.processingRequest = false;
          console.log(err);
          this.snackBar.open('The service seems down. Please try again later!', 'Close', {
            duration: 3000,
          });
        }
      }
    )
  }
}
