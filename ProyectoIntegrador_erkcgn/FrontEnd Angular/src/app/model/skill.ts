export class Skill {
    id: number;
    nombre: string;
    porcentaje: number;
    outerStrokeColor: string;
    innerStrokeColor: string;

    constructor(nombre: string, porcentaje: number, outerStrokeColor: string, innerStrokeColor: string) {
        this.nombre = nombre;
        this.porcentaje = porcentaje;
        this.outerStrokeColor = outerStrokeColor;
        this.innerStrokeColor = innerStrokeColor;
    }
}
