export class ModeloFilterSecuencia {

    constructor(
        public rnc: string,
        public id: number,
        public nombre: string,
        public ambienteID: number,
        public canalID: number,
        public TipoECF: number,
        public pageSize:number,
        public pageNumber:number
    ){}
}