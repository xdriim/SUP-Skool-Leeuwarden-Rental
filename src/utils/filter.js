import json from './sup.json';
// Habrá que hacer un import de usuarios y ver su fecha de creación

export const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

const currentYear = new Date().getFullYear();
export const anios = [];
for (let index = currentYear; index >= 2013; index--) {
    anios.push(index);
}

export const anyos = anios;

// Primer año: Creación de cuenta -----> Último año: Actual

export function filtratMes(mes){
    return json.filter( (dato) => dato.name === mes);
}

export function filtratAny(any){
    return json.filter( (dato) => dato.any === any);
}

export function filtratComplet(){
    return 'd';
}
