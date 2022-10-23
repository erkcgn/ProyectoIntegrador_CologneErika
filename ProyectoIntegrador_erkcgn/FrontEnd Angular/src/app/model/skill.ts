export class Skill {
    id: number;
    imagen: string;
    porcentaje: number;
    outerStrokeColor: string;
    innerStrokeColor: string;

    constructor(imagen: string, porcentaje: number, outerStrokeColor: string, innerStrokeColor: string) {
        this.imagen = imagen;
        this.porcentaje = porcentaje;
        this.outerStrokeColor = outerStrokeColor;
        this.innerStrokeColor = innerStrokeColor;
    }
}
