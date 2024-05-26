import { Component,CUSTOM_ELEMENTS_SCHEMA,Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class CardComponent {
  @Input() imgSrc:string ='Hola'
  @Input() title:string ='Hola'
  @Input() descripcion:string ='Hola'
  @Input() src:string ='#/ser'


}
