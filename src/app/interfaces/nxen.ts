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

export interface Vehiculo{
  placa: string;
  tipo: string;
  marca_v: string;
  modelo_v: string;
  detalles_v: string;
  descripcion_v: string;
  estado_v: string;
}

export interface Alquiler{
  id_alquiler: string;
  placa: string;
  codigo_admin: string;
  codigo_cliente: string;
  f_inicio: Date;
  f_fin: Date;
  estado_a: string;
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

export interface Historial{
  id_historial: string;
  codigo_cliente: string;
  fecha_h: string;
  tipo_ser: string;
  id_ser: string;
  valor: string;
  valoracion: string;
}
