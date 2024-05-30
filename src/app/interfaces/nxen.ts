export interface Admin{
  codigo_admin: string;
  rol: string;
  usuario: string;
  contrasena: string;
}

export interface Cliente{
  codigo_cliente: string;
  telefono: string;
  email: string;
  usuario_cliente: string;
  contrasena: string;
}

export interface ClienteLista{
  results: Cliente[]
}

export interface Vehicle {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  year:string
}


export interface Solicitud {

  id: number;
  name: string;
  idCar: any;
  namecar:string;
  state:string;
}


export interface Maquina{
  id_maquina: string;
  tipo: string;
  marca_m: string;
  modelo_m: string;
  detalles_m: string;
  descripcion_m: string;
  estado_m: string;
  ubicacion: string;
}

export interface Domicilio{
  id_domicillio: string;
  codigo_cliente: string;
  fecha: Date;
  dir_salida: string;
  dir_destino: string;
  valor: string;
  estado_d: string;
  detalle_d: string;
  id_maquina: string;
}

export interface Action{
  id?: number |null;
  idUser: number;
  fecha_h: string;
  servicio: string;
  id_ser: string;
  valor: number;
}
