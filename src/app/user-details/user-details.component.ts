import { Component, OnInit, Input  } from '@angular/core';
import { User } from './../user';
import { UserService } from '../user.service';
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: Observable<Object>;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log("HOLA QUE HACE")
    this.route.params.subscribe(params => {
      console.log("NO ENTIENDO" + params.id)
      this.user = this.userService.getUser(params.id)
      console.log(this.user)
    });
  }

}
