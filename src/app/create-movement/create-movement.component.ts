import { Component, OnInit } from '@angular/core';
import { CreditCard } from './../creditcard';
import { Movement } from './../movement';
import { CreditcardService } from '../creditcard.service';
import { MovementService } from '../movement.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-create-movement',
  templateUrl: './create-movement.component.html',
  styleUrls: ['./create-movement.component.css']
})
export class CreateMovementComponent implements OnInit {

  creditCard: CreditCard = new CreditCard();
  movement: Movement = new Movement();
  submitted = false;

  constructor(private creditcardService: CreditcardService, private movementService: MovementService, private route: ActivatedRoute, private router: Router) {
    var today = new Date();
    var date = today.getDate();
    var month = today.getMonth();
    var year = today.getFullYear();

    this.movement.date = `${year}-${this.pad(month + 1)}-${this.pad(date)}`
  }
  
  pad(n) {
      return n<10 ? '0'+n : n;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.creditcardService.getCreditCardById(params.id).subscribe(data => {
        this.creditCard = data as any
      })
    });
  }

  save() {
    this.movement.creditcardCode = this.creditCard
    this.movementService.createMovement(this.movement)
      .subscribe(data => console.log(data), error => console.log(error));
    this.movement = new Movement();
    this.router.navigate([`/creditcard/${this.creditCard.id}`])
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
