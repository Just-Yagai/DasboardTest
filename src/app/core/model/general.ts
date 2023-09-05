import { DatosSecuencias } from "./utils/DatosSecuencias";
import { Delegaciones } from "./utils/delegaciones";
import { Marcas } from "./utils/marcas";
import { RNCEstado } from "./utils/rncEstado";
import { Secuencias } from "./utils/secuencias";

export class ModeloGeneral {
    public Marcas: Marcas[];
    public Delegaciones: Delegaciones[];   
    public DatosSecuencias: DatosSecuencias[];
    public RncEstado: RNCEstado[];

}