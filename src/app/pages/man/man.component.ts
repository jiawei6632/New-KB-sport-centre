import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeComponent } from '../../shared/functions/theme/theme.component';



@Component({
  selector: 'app-man',
  standalone: true,
  imports: [RouterModule, ThemeComponent],
  templateUrl: './man.component.html',
  styleUrl: './man.component.less'
})
export class ManComponent {

}
