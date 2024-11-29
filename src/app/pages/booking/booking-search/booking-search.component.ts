import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
import { BehaviorSubject, combineLatest, map, Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';

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
  selectedSport: any;
  selectedLocation: any;
  selectedWhen: any;

  // startTime: string = '08:00'; // Default start time
  // duration: number = 1; // Default duration (1 hour)

  // // Time constraints
  // openTime = '08:00'; // Opening time (8:00 AM)
  // closeTime = '02:00'; // Closing time (2:00 AM the next day)
  // availableTimes: string[] = []; // Available time slots
  // availableDurations = [1, 2, 3, 4, 5]; // Duration options in hours

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

  public sportFilterSubject = new BehaviorSubject<string>('');
  public locationFilterSubject = new BehaviorSubject<string>('');

  updateSportFilter(event: Event): void {
    const target = event.target as HTMLInputElement; 
    const value = target?.value || ''; 
    this.sportFilterSubject.next(value);
  }

  updateLocationFilter(event: Event): void {
    const target = event.target as HTMLInputElement;
    const value = target?.value || '';
    this.locationFilterSubject.next(value);
  }
  
  filteredSports$: Observable<any[]>;
  filteredLocations$: Observable<any[]>;

  constructor(private translocoService: TranslocoService) {
    this.maxDate = new Date(this.minDate);
    this.maxDate.setDate(this.minDate.getDate() + 2);

    // this.generateAvailableTimes();

    this.filteredSports$ = this.createFilterStream(this.sports, this.sportFilterSubject);
    this.filteredLocations$ = this.createFilterStream(this.locations, this.locationFilterSubject);
  }

  createFilterStream(data: any[], filterSubject: BehaviorSubject<string>): Observable<any[]> {
    return combineLatest([of(data), filterSubject.asObservable()]).pipe(
      map(([data, filterValue]) => 
        filterValue 
          ? data.filter(item => item.name.toLowerCase().includes(filterValue.toLowerCase()))
          : data
      )
    );
  }

  resetFilter(filterSubject: BehaviorSubject<string>) {
    filterSubject.next('');
  }

  updateFilter(filterSubject: BehaviorSubject<string>, value: string) {
    filterSubject.next(value);
  }

  // generateAvailableTimes(): void {
  //   const times: string[] = [];
  //   let currentTime = this.timeStringToMinutes(this.openTime); // Start at opening time
  //   const closingTime = this.timeStringToMinutes(this.closeTime) + 24 * 60; // Adjust for next-day closing

  //   while (currentTime < closingTime) {
  //     times.push(this.minutesToTimeString(currentTime % (24 * 60))); // Normalize time to 24 hours
  //     currentTime += 60; // Increment by 1 hour
  //   }

  //   this.availableTimes = times;
  // }

  // // Convert time string (e.g., "08:00") to minutes since midnight
  // private timeStringToMinutes(time: string): number {
  //   const [hours, minutes] = time.split(':').map(Number);
  //   return hours * 60 + minutes;
  // }

  // // Convert minutes since midnight to time string (e.g., 480 -> "08:00")
  // private minutesToTimeString(minutes: number): string {
  //   const hrs = Math.floor(minutes / 60);
  //   const mins = minutes % 60;
  //   return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
  // }
}
