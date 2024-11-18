import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PersonalDetailsComponent } from '../personal-details/personal-details.component';

@Component({
  selector: 'app-man',
  standalone: true,
  imports: [RouterModule, PersonalDetailsComponent],
  templateUrl: './man.component.html',
  styleUrl: './man.component.less'
})
export class ManComponent {

}
