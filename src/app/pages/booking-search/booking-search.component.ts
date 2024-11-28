import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
import { filter, map, Observable, of, startWith } from 'rxjs';
import { CommonModule } from '@angular/common';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [
    FormsModule,
    CardModule,
    DropdownModule,
    ButtonModule,
    CalendarModule,
    TranslocoModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './booking-search.component.html',
  styleUrls: ['./booking-search.component.less']
})
export class BookingSearchComponent {
  date: Date | null = null;
  minDate: Date = new Date();
  maxDate: Date = new Date();
  sportFilterValue = '';
  locationFilterValue = '';
  timeFilterValue = '';
  selectedSport: any;
  selectedWhere: any;
  selectedWhen: any;

  sports = [
    { name: 'Badminton', code: 'BD' },
    { name: 'Basketball', code: 'BB' },
    { name: 'Volleyball', code: 'VB' },
    { name: 'Tennis', code: 'TN' },
    { name: 'Ping Pong', code: 'PT' },
    { name: 'Pickleball', code: 'PB' }
  ];

  locations = [
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

  times = [
    { name: 'AM', code: 'AM' },
    { name: 'PM', code: 'PM' }
  ];

  filteredSports$!: Observable<any[]>;
  filteredLocations$!: Observable<any[]>;
  filteredTimes$!: Observable<any[]>;

  [key: string]: any;

  constructor(private translocoService: TranslocoService) {
    this.maxDate = new Date(this.minDate);
    this.maxDate.setDate(this.minDate.getDate() + 2);
  }

  ngOnInit() {
    this.filteredSports$ = this.createFilterStream(this.sports, 'sportFilterValue');
    this.filteredLocations$ = this.createFilterStream(this.locations, 'locationFilterValue');
    this.filteredTimes$ = this.createFilterStream(this.times, 'timeFilterValue');
  }

  createFilterStream(data: any[], filterKey: string): Observable<any[]> {
    return of(data).pipe(
      startWith(''),
      map(() => this[filterKey]?.toLowerCase() || ''),
      map((filterValue) =>
        filterValue
          ? data.filter(item => item.name.toLowerCase().includes(filterValue))
          : data 
      )
    );
  }

  resetFilter(filterKey: 'sportFilterValue' | 'locationFilterValue' | 'timeFilterValue') {
    this[filterKey] = '';
  }
}

