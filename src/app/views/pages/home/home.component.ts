import { Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from 'src/app/layout/footer/footer.component';
import {CardComponent} from './card/card.component'
import { CarouselCaptionComponent, CarouselComponent, CarouselControlComponent, CarouselIndicatorsComponent, CarouselInnerComponent, CarouselItemComponent, ThemeDirective } from '@coreui/angular';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,CardComponent,NgFor,CarouselCaptionComponent, CarouselComponent, CarouselControlComponent, CarouselIndicatorsComponent, CarouselInnerComponent, CarouselItemComponent, ThemeDirective ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas:[NO_ERRORS_SCHEMA],
})

export class HomeComponent implements OnInit{

  slides: any[] = new Array(3).fill({ id: -1, src: '', title: '', subtitle: '' });

  ngOnInit(): void {
    this.slides[0] = {
      id:0,
      title: 'First slide',
      subtitle: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
      src: 'https://services.meteored.com/img/article/cuanto-aire-hay-donde-vuelan-los-aviones-1705066093519_768.jpg'
    };
    this.slides[1] = {
      id:1,
      title: 'Second slide',
      subtitle: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
      src: 'https://as01.epimg.net/deporteyvida/imagenes/2020/01/14/portada/1578984927_702364_1578985129_noticia_normal.jpg'
    };
    this.slides[2] = {
      id:2,
      title: 'Third slide',
      subtitle: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
      src: 'https://static.retail.autofact.cl/blog/c_img_740x370.rvx1jqias07p.jpg'
    };
  }

  dataCards=[
    {
      imgSrc:'https://img.freepik.com/vector-gratis/pack-gracioso-drones-coloridos_23-2147690929.jpg?t=st=1715059376~exp=1715062976~hmac=c8a28e564496769e59988e1b27ce17d70a57297a43ceed3bf556072f50b1e588',
      title:'Domicilio con Drones y Robots',
      descripcion:'Solicita tus productos y recíbelos de forma rápida y segura con nuestra tecnología de drones y robots.',
      src:'#/services/domicilios'
    },{
      imgSrc:'https://img.freepik.com/vector-gratis/parada-autobus-gente-diseno-plano_23-2147837215.jpg?t=st=1715059583~exp=1715063183~hmac=8e3d9f4fc3fef93d40d13d83a5dc32d37902d5d3646608bba0895aad50aca9ae&w=740',
      title:'Alertas en el Transporte Público',
      descripcion:'Recibe alertas de seguridad y activa botones de pánico en situaciones de peligro en el transporte público.',
      src:'#/services/alertas'
    },{
      imgSrc:'https://img.freepik.com/vector-gratis/transporte-logistico-set-vehiculos_24877-54157.jpg?t=st=1715059616~exp=1715063216~hmac=e12f20885ee89727c33b4db57c830241b93c1db19560aecc4918c681bf64f2da&w=740',
      title:'Alquiler de Multiples Vehículos',
      descripcion:'Alquila vehículos fácilmente a través de nuestra plataforma en línea para tus desplazamientos.',
      src:'#/services/vehiculos'
    },{
      imgSrc:'https://img.freepik.com/vector-premium/hombre-conductor-tren-cabina_24911-55776.jpg?w=740',
      title:'Seguridad para medios de Transporte',
      descripcion:'Te ofrecemos seguridad para tu vehiculo para que te sientas a salvo en tus viajes.',
      src:'#/services/seguridad'
    }
  ];

  developers = [
    {
      name: 'Robinson Leon',
      description: 'Desarrollador Frontend con varios años de experiencia en Angular y Php.',
      image: './assets/images/robinson.jpg'
    },
    {
      name: 'Emilton Hernandez',
      description: 'Desarrollador Backend especializado en Node.js y bases de datos SQL.',
      image: './assets/images/emilton.jpg'
    },
    {
      name: 'Mario javier',
      description: 'Ingeniero DevOps con experiencia en aseguramiento de calidad.',
      image: './assets/images/mario.png'
    }
    // Puedes añadir más desarrolladores aquí
  ];

  onItemChange($event: any): void {
    console.log('Carousel onItemChange', $event);
  }




}
