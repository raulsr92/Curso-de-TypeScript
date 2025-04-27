"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, edad, esDesarrollador) {
        this.nombre = nombre;
        this.edad = edad;
        this.esDesarrollador = esDesarrollador;
    }
    Persona.prototype.saludar = function () {
        var esDevResult = this.esDev();
        return "Hola, mi nombre es ".concat(this.nombre, " y tengo ").concat(this.edad, " a\u00F1os. \u00BFDesarrollador? ").concat(esDevResult);
    };
    Persona.prototype.obtenerEdad = function () {
        return this.edad;
    };
    Persona.prototype.esDev = function () {
        return this.esDesarrollador;
    };
    return Persona;
}());
exports.Persona = Persona;
