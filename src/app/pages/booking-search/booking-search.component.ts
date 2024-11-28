import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
import { filter, switchMap, of} from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [FormsModule, CardModule, DropdownModule, ButtonModule, CalendarModule, TranslocoModule, CommonModule],
  templateUrl: './booking-search.component.html',
  styleUrls: ['./booking-search.component.less']
})
export class BookingSearchComponent {

  constructor(private translocoService: TranslocoService) {}

  sports$ = of([
    { name: 'Badminton', code: 'BD' },
    { name: 'Basketball', code: 'BB' },
    { name: 'Volleyball', code: 'VB' },
    { name: 'Tennis', code: 'TN' },
    { name: 'Ping Pong', code: 'PT' },
    { name: 'Pickleball', code: 'PB' }
  ]);

  where$ = of([
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
  ]);

  when$ = of([
    { name: 'Morning', code: 'AM' },
    { name: 'Afternoon', code: 'PM' },
    { name: 'Evening', code: 'EV' }
  ]);

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

   // Translate sports, locations, and times using TranslocoService
  // getTranslatedSports(sports: any[]) {
  //   return sports.map(sport => ({
  //     ...sport,
  //     name: this.translocoService.translate(`sports.${sport.code}`)
  //   }));
  // }

  // getTranslatedLocations(locations: any[]) {
  //   return locations.map(location => ({
  //     ...location,
  //     name: this.translocoService.translate(`locations.${location.code}`)
  //   }));
  // }

  // getTranslatedTimes(times: any[]) {
  //   return times.map(time => ({
  //     ...time,
  //     name: this.translocoService.translate(`times.${time.code}`)
  //   }));
  // }
}
