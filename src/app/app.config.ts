import { ApplicationConfig, importProvidersFrom, Component, OnInit } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
  withHashLocation,
  withInMemoryScrolling,
  withRouterConfig,
  withViewTransitions,
  RouterOutlet
} from '@angular/router';

import { DropdownModule, SidebarModule } from '@coreui/angular';
import { IconSetService } from '@coreui/icons-angular';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes,
      withRouterConfig({
        onSameUrlNavigation: 'reload'
      }),
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
        anchorScrolling: 'enabled'
      }),
      withEnabledBlockingInitialNavigation(),
      withViewTransitions(),
      withHashLocation()
    ),
    importProvidersFrom(SidebarModule, DropdownModule),
    IconSetService,
    provideAnimations()
  ]
};

export class AppComponent implements OnInit{
  title = 'tutorial';
  constructor(){}
  ngOnInit(){ }
  url:string = "https://www.diariomotor.com/imagenes/2012/10/tesla-roadster-000.jpg"
  ChangeImage(event:any){
    this.url = event.target.src;
  }
  url2:string = "https://mcn-images.bauersecure.com/wp-images/5066/suzuki_gsx-s1000gt_01.jpg"
  ChangeImage2(event:any){
    this.url2 = event.target.src;
  }
}

