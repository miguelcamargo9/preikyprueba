import { Component, OnInit, Input  } from '@angular/core';
import { User } from './../user';
import { CreditCard } from './../creditcard';
import { UserService } from '../user.service';
import { CreditcardService } from '../creditcard.service';
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: Observable<User>;
  creditCards: Observable<CreditCard[]>;

  constructor(private userService: UserService, private creditcardService: CreditcardService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.reloadData()
  }

  reloadData(){
    this.route.params.subscribe(params => {
      this.userService.getUser(params.id).subscribe(data => {
        this.user = data as any
      })
      this.creditcardService.getCreditCardsByUser(params.id).subscribe(data => {
        this.creditCards = data as any
      })
    });
  }

  deleteCreditCard(id: number) {
    this.creditcardService.deleteCreditCard(id)
      .subscribe(
        data => {
          this.reloadData();
        },
      error => console.log(error));
  }

}
