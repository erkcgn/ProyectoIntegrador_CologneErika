export class Experiencia {
    id? : number;
    nombreE : string;
    descripcionE : string;
    color: string;
    opacity: string;

    constructor(nombreE: string, descripcionE: string, color: string, opacity: string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.color = color;
        this.opacity = opacity;
    }
}
