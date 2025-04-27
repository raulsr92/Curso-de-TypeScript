"use strict";
/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< TIPO DE DATO ANY <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
/* =============== Creación de valores ===============*/
let variableAny;
/* =============== Asignación de valores ===============*/
//variableAny = "Hola Mundo"
variableAny = 20;
/* =============== Impresión de valores ===============*/
//console.log(`Variable tipo any con asignación de string: ${variableAny}`)
console.log(`Variable tipo any con asignación de Number: ${variableAny}`);
/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< TIPO DE DATO UNKNOWN <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
/* =============== Creación de valores ===============*/
let variableUnknown;
/* =============== Asignación de valores ===============*/
variableUnknown = "Hola Mundo, me llamo Raúl";
/* =============== Impresión de valores ===============*/
if (typeof variableUnknown === "number") {
    console.log(`Variable tipo unknown con asignación de string: ${variableUnknown}`);
}
/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< FUNCIONES NEVER <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
function throwError(message) {
    throw new Error(message);
}
//throwError("Este es un error")
/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< FUNCIONES VOID <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
function logMessage(message) {
    console.log(`Mensaje: ${message}`);
}
logMessage("Este un mensaje impreso con void");
