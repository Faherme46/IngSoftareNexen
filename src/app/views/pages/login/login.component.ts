import { Component } from '@angular/core';
import { NgIf, NgStyle } from '@angular/common';
import { IconDirective } from '@coreui/icons-angular';
import { ContainerComponent, RowComponent, ColComponent, CardGroupComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, FormControlDirective, ButtonDirective } from '@coreui/angular';
import { FormsModule,FormGroup,FormBuilder,Validators } from '@angular/forms';
import {AuthService} from 'src/app/services/auth.service'
import { Router } from '@angular/router';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: true,
    imports: [NgIf,FormsModule,ContainerComponent, RowComponent, ColComponent, CardGroupComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, IconDirective, FormControlDirective, ButtonDirective, NgStyle]
})
export class LoginComponent {
  username=''
  password=''
  errorMessage = '';
  isAdmin=false

  constructor(private authService: AuthService,private router: Router) {

  }

  onSubmit() :void {
      this.isAdmin=this.authService.isAdminUser()

      if (!this.authService.login(this.username,this.password)){

        this.errorMessage='datos erroneos'
        console.log('Lacagamos')
        console.log(this.username,this.password)
      }else{
        console.log('si')
        if(this.isAdmin){
          console.log('Istrue')
          this.router.navigate(['dashboard'])
        }else{
          this.router.navigate(['services/vehiculos']);
        }

      }



  }
}



