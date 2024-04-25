import { Component } from '@angular/core';
import { FooterComponent as FooterComponents} from '@coreui/angular';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    standalone: true,
})
export class FooterComponent extends FooterComponents {
  constructor() {
    super();
  }
}
