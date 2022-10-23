
const { Schema, model } = require('mongoose');

const DatosaduanaSchema = Schema({
    codigo: {
        type: String,
        required: [true, 'El codigo es obligatorio'],
        unique: true
    },
    nombreproyecto: {
        type: String,
        required: [true, 'El proyecto es obligatorio'],
    },
    monto: {
        type: Number,
       // required: [true, 'El monto es obligatorio'],
    },
    fecha: {
        type: String,
    },
    fecha_cierre: {
        type: String,
    },
    pais_ejecuta: {
        type: String,
        emun: ['GUATEMALA', 'EL SALVADOR', 'HONDURAS', 'COSTA RICA', 'NICARAGUA', 'PANAMA']
    },
});



DatosaduanaSchema.methods.toJSON = function() {
    const { __v, ...aduana} = this.toObject();
    return aduana;
}

module.exports = model( 'Aduana', DatosaduanaSchema );
