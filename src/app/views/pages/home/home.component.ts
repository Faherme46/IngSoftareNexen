import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { HeaderComponent } from 'src/app/layout/header/header.component';
import { FooterComponent } from 'src/app/layout/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas:[NO_ERRORS_SCHEMA],
})
export class HomeComponent{

}
