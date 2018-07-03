import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('subscriptionForm') subscriptionForm: NgForm;
  defaultSubscription = 'advanced';
  submitted = false;
  user = {
    email: '',
    password: '',
    subscriptionType: '',
  };

  onSubmit() {
    this.submitted = true;
    this.user.email = this.subscriptionForm.value.userData.email;
    this.user.password = this.subscriptionForm.value.userData.password;
    this.user.subscriptionType = this.subscriptionForm.value.subscriptionType ;

    console.log(this.user);
    this.subscriptionForm.reset();
  }
}
