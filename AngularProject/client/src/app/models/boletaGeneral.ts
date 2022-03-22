export class BoletaGeneral{
    _id?: string;
    precio: number;
    seccion: string;
    servicio: number;
    cantidad_unidad: number;


    constructor(precioBoleta: number, seccionBoleta: string, servicioBoleta: number, cantidadUnidadBoleta:number)
    {

       this.precio = precioBoleta;
       this.seccion = seccionBoleta;
       this.servicio = servicioBoleta;
       this.cantidad_unidad = cantidadUnidadBoleta;
    }
}