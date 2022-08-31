export class Persona{
    id?: number;
    nombre: string;
    apellido: string;
    titulo: string;
    descripcion: string;
    imgPerfil: string;

    constructor(nombre: string, apellido: string, titulo: string, descripcion: string, imgPerfil: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.imgPerfil = imgPerfil;
    }
}