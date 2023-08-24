export class Dashboard {
  rnc: string;
  razonSocial: string;
  tiposCertificacion: TipoCertificacion[];
}

export class TipoCertificacion {
  tipo: string;
  estado: string;
  inicioPostulacion: string;
  finalizacionPostulacion: string;
}
