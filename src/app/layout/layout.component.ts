import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgScrollbar } from 'ngx-scrollbar';

import { IconDirective } from '@coreui/icons-angular';
import {
  ContainerComponent,
  ShadowOnScrollDirective,
  SidebarBrandComponent,
  SidebarComponent,
  SidebarFooterComponent,
  SidebarHeaderComponent,
  SidebarNavComponent,
  SidebarToggleDirective,
  SidebarTogglerDirective
} from '@coreui/angular';

import { FooterComponent} from './footer/footer.component'
import { HeaderComponent } from './header/header.component';
import { navItems } from './_navUser';
import { navItems as navItemsAdmin }  from './_navAdmin';
import { AuthService } from '../services/auth.service';
import { NgIf } from '@angular/common';

function isOverflown(element: HTMLElement) {
  return (
    element.scrollHeight > element.clientHeight ||
    element.scrollWidth > element.clientWidth
  );
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  standalone: true,
  imports: [
    SidebarComponent,
    SidebarHeaderComponent,
    SidebarBrandComponent,
    RouterLink,
    IconDirective,
    NgScrollbar,
    SidebarNavComponent,
    SidebarFooterComponent,
    SidebarToggleDirective,
    SidebarTogglerDirective,
    HeaderComponent,
    ShadowOnScrollDirective,
    ContainerComponent,
    RouterOutlet,
    FooterComponent,
    NgIf
  ]
})
export class LayoutComponent implements OnInit {
  isAdmin:boolean=false;
  isLogged:boolean=false;

  constructor(private authService:AuthService){

  }

  ngOnInit(): void {
    this.loadSession()
  }

  loadSession(){
    this.isAdmin=this.authService.isAdminUser()
    this.isLogged=this.authService.isAuthenticatedUser()

    console.log('isadmin:'+this.isAdmin)
  }
  public navItems = this.loadItems()

  loadItems(){
    if(this.isAdmin){
      return(navItemsAdmin)
    }else{
      return navItems
    }
  }


  protected route: string = '/home';
  onScrollbarUpdate($event: any) {
    // if ($event.verticalUsed) {
    // console.log('verticalUsed', $event.verticalUsed);
    // }
  }
}
