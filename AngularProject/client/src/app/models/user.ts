export class User{
    _id?: number;
    correo: string;
    password: string;

    constructor(correoUsuario: string, passUsuario: string){
        this.correo = correoUsuario;
        this.password = passUsuario;
    }
}