
export class Persona{

    public nombre:string; // Public: accesible desde cualquier parte
    protected edad:number; // Protected: accesible desde la clase y subclases
    private esDesarrollador:boolean; // Private: accesible solo desde la clase

    constructor(nombre:string, edad:number, esDesarrollador:boolean){
        this.nombre = nombre;
        this.edad = edad;
        this.esDesarrollador = esDesarrollador
    }

    public saludar():string{
        let esDevResult = this.esDev()
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años. ¿Desarrollador? ${esDevResult}`
    }

    protected obtenerEdad():number{
        return this.edad
    }

    private esDev():boolean{
        return this.esDesarrollador
    }

}



