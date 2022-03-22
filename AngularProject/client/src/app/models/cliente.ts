export class Cliente{
    _id?: string;
    nombres: string;
    apellidos: string;
    telefono: number;
    email: string;

    constructor(nombresCliente: string, apellidosCliente: string, telefonoCliente: number, emailCliente:string)
    {

       this.nombres = nombresCliente;
       this.apellidos = apellidosCliente;
       this.telefono = telefonoCliente;
       this.email = emailCliente;
    }
}