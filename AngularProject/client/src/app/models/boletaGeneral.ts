export class BoletaGeneral{
    //CRUD
    _id?: string;
    seccion: string;
    cantidad_unidad: number;
    servicio: number;
    precio: number;
    


    constructor(precioBoleta: number, seccionBoleta: string, servicioBoleta: number, cantidadUnidadBoleta:number)
    {

       this.precio = precioBoleta;
       this.seccion = seccionBoleta;
       this.servicio = servicioBoleta;
       this.cantidad_unidad = cantidadUnidadBoleta;
    }
}