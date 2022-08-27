export class Proyectos {
    id?:number;
    nombreE:string;
    descripcionE:string;
    urlimg:string;
    
    constructor(nombreE:string, descripcionE:string, urlimg:string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.urlimg = urlimg;
    }
    
    }