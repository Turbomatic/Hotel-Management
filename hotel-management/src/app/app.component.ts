import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomComponent } from './room/room.component';
import { CustomerComponent } from './customer/customer.component';
import { BookingComponent } from './booking/booking.component';
import { ManageBookingComponent } from './manage-booking/manage-booking.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RoomComponent,CustomerComponent,BookingComponent,ManageBookingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hotel-management';
}
