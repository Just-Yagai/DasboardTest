export class Dashboard {
  rnc: string;
  razonSocial: string;
  tipo_certificacion: TipoCertificacion[];
}

export class TipoCertificacion {
  tipo: string;
  estado: string;
  inicio_postulacion: string;
  finalizacion_postulacion: string;
}
