import { Routes } from '@angular/router';
import { RoomComponent } from './room/room.component';
import { CustomerComponent } from './customer/customer.component';
import { BookingComponent } from './booking/booking.component';
import { ManageBookingComponent } from './manage-booking/manage-booking.component';

export const routes: Routes = [
    { path: 'room', component:RoomComponent},
    { path: 'customer', component:CustomerComponent},
    { path: 'booking', component:BookingComponent},
    { path: 'manage-booking', component:ManageBookingComponent}
];
