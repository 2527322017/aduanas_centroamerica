const Aduana = require('../models/datosaduana');

const esPaisValido = async(pais = '') => {
const paises = ['GUATEMALA', 'EL SALVADOR', 'HONDURAS', 'COSTA RICA', 'NICARAGUA', 'PANAMA'];
    if ( !paises.includes(pais) && pais != '') {
        throw new Error(`El pais ${ pais } no es valido debe ser cualquiera de los siguientes ` + paises.join(','));
    }
}

const codigoExiste = async( codigo = '' ) => {

    // Verificar si el codigo existe
    const existeCodigo = await Aduana.findOne({ codigo });
    if ( existeCodigo ) {
        throw new Error(`El codigo: ${ codigo }, ya está registrado`);
    }
}

const existeAduanaPorId = async( id ) => {

    // Verificar si el registro existe
    const existeRegistro = await Aduana.findById(id);
    if ( !existeRegistro ) {
        throw new Error(`El id no existe ${ id }`);
    }
}



module.exports = {
    esPaisValido,
    codigoExiste,
    existeAduanaPorId
}

