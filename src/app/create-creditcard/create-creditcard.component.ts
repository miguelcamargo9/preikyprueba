import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';
import { ActivatedRoute, Router } from "@angular/router";
import { User } from './../user';
import { CreditCard } from './../creditcard';
import { CreditcardService } from '../creditcard.service';

@Component({
  selector: 'app-create-creditcard',
  templateUrl: './create-creditcard.component.html',
  styleUrls: ['./create-creditcard.component.css']
})
export class CreateCreditcardComponent implements OnInit {

  user: User = new User();
  creditCard: CreditCard = new CreditCard();
  submitted = false;

  constructor(private userService: UserService, private creditcardService: CreditcardService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userService.getUser(params.id).subscribe(data => {
        this.user = data as any
      })
    });
  }

  save() {
    this.creditCard.userCode = this.user
    this.creditcardService.createCreditCard(this.creditCard)
      .subscribe(data => console.log(data), error => console.log(error));
    this.creditCard = new CreditCard();
    this.router.navigate([`/users/${this.user.id}`])
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
