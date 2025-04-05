import { Component,computed,signal } from '@angular/core';
import { MockCustomer } from './mock-customer';

const randomIndex = Math.floor(Math.random()* MockCustomer.length);
@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})

export class CustomerComponent {
  selectedUser = signal(MockCustomer[randomIndex]);

  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);
  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar
  // }

  onSelectUser(){
    const randomIndex = Math.floor(Math.random()* MockCustomer.length);
    this.selectedUser.set(MockCustomer[randomIndex]);
  }
  
}
