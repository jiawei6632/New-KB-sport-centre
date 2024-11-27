import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [FormsModule, CardModule, DropdownModule, ButtonModule, CalendarModule],
  templateUrl: './booking-order.component.html',
  styleUrls: ['./booking-order.component.less']
})
export class BookingComponent {

  sports = [
    { name: 'Badminton', code: 'BD' },
    { name: 'Basketball', code: 'BB' },
    { name: 'Volleyball', code: 'VB' },
    { name: 'Tennis', code: 'TN' },
    { name: 'Ping Pong', code: 'PT' },
    { name: 'Pickleball', code: 'PB' }
  ];

  where = [
    { name: 'Selangor', code: 'SG' },
    { name: 'Kuala Lumpur', code: 'KL' },
    { name: 'Kelantan', code: 'KT' },
    { name: 'Melaka', code: 'MK' },
    { name: 'Johor', code: 'JH' },
    { name: 'Penang', code: 'PN' },
    { name: 'Perak', code: 'PR' },
    { name: 'Perlis', code: 'PL' },
    { name: 'Kedah', code: 'KD' },
    { name: 'Negeri Sembilan', code: 'NS' },
    { name: 'Sabah', code: 'SB' },
    { name: 'Sarawak', code: 'SW' },
    { name: 'Pahang', code: 'PH' },
    { name: 'Terengganu', code: 'TG' }
  ];

  when = [
    { label: 'Morning', code: 'AM' },
    { label: 'Afternoon', code: 'PM' },
    { label: 'Evening', code: 'EV' }
  ];

//can use switchMap to control the searchbar to have the new entered value and without the old value.! ! ! !

  selectedSport: any;
  selectedWhere: any;
  selectedWhen: any;

  filterValue: string = '';

  customFilterFunction(event: any, options: any) {
    const query = event.target.value?.toLowerCase();
    options.filter(query);
  }

  resetFunction(options: any) {
    this.filterValue = '';
    options.filter('');
  }
}
