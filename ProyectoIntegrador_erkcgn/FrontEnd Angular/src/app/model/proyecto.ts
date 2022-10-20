export class Proyecto {
    id?: number;
    nombreP: string;
    descripcionP: string;
    imgP: string;
    imgP2: string;
    imgP3: string;    
    link: string;

    constructor(nombreP: string, descripcionP: string, imgP: string, imgP2: string, imgP3: string, link: string){
        this.nombreP = nombreP;
        this.descripcionP = descripcionP;
        this.imgP = imgP;
        this.imgP2 = imgP2;
        this.imgP3 = imgP3;        
        this.link = link;
    }
}
