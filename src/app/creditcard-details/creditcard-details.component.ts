import { Component, OnInit } from '@angular/core';
import { CreditcardService } from '../creditcard.service';
import { MovementService } from '../movement.service';
import { CreditCard } from './../creditcard';
import { Movement } from './../movement';
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";

@Component({
  selector: 'app-creditcard-details',
  templateUrl: './creditcard-details.component.html',
  styleUrls: ['./creditcard-details.component.css']
})
export class CreditcardDetailsComponent implements OnInit {

  creditCard: Observable<CreditCard>
  movements: Observable<Movement[]>

  constructor(private creditcardService: CreditcardService, private movementService: MovementService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.reloadData()
  }

  reloadData(){
    this.route.params.subscribe(params => {
      this.creditcardService.getCreditCardById(params.id).subscribe(data => {
        this.creditCard = data as any
      })
      this.movementService.getMovementsByCreditCardId(params.id).subscribe(data => {
        this.movements = data as any
      })
    });
  }

  deleteMovement(id: number) {
    this.movementService.deleteMovement(id)
      .subscribe(
        data => {
          this.reloadData();
        },
      error => console.log(error));
  }

}
