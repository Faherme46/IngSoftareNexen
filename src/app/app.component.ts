import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from './icons/icon-subset';

@Component({
  selector: 'app-root',
  template: '<router-outlet />',
  standalone: true,
  imports: [RouterOutlet]
})
export class AppComponent implements OnInit {
  title = 'CoreUI Angular Admin Template';
  constructor(
    private router: Router,
    private titleService: Title,
    private iconSetService: IconSetService
  ) {
    this.titleService.setTitle(this.title);
    // iconSet singleton
    this.iconSetService.icons = { ...iconSubset };
  }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
    });
  }
  url:string = "https://www.diariomotor.com/imagenes/2012/10/tesla-roadster-000.jpg"
  ChangeImage(event:any){
    this.url = event.target.src;
  }
  url2:string = "https://mcn-images.bauersecure.com/wp-images/5066/suzuki_gsx-s1000gt_01.jpg"
  ChangeImage2(event:any){
    this.url2 = event.target.src;
  }
}
