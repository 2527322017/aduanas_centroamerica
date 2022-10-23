const { response, request } = require('express');
//const bcryptjs = require('bcryptjs');


const Aduana = require('../models/datosaduana');



const aduanasGet = async(req = request, res = response) => {


    const filter = {}; //sin filtros, con filtro ej. {correo:'prueba@test.com'}
    const aduanas = await Aduana.find(filter);
        res.json({
          msg:'Llamando el GET de mi API',
          aduanas
      });
}

const aduanasPost = async(req, res = response) => {
    console.log(req.body);
    const today = new Date();

    if(typeof req.body.fecha === "undefined") { //agregar fecha por defecto
        req.body.fecha = today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate() ;
    }
    if(typeof req.body.fecha_cierre === "undefined") { //agregar vacio por defecto en caso GT
        req.body.fecha_cierre = '';
    }
    if(typeof req.body.pais_ejecuta === "undefined") { //agregar vacio por defecto en caso GT
        req.body.pais_ejecuta = '';
    }
    if(typeof req.body.monto === "undefined") { //agregar vacio por defecto en caso CR
        req.body.monto = 0;
    }

    const { codigo, nombreproyecto, monto, fecha, fecha_cierre, pais_ejecuta } = req.body;
    const aduana = new Aduana({ codigo, nombreproyecto, monto, fecha, fecha_cierre,  pais_ejecuta });

    // Guardar en BD
    await aduana.save();

    res.json({
        aduana
    });
}

const aduanasPut = async(req, res = response) => {

    const { id } = req.params;
    const { _id, codigo, nombreproyecto, monto, ...resto } = req.body;

    /*if ( password ) {
        // Encriptar la contraseña
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync( password, salt );
    } */

    const aduana = await Aduana.findByIdAndUpdate( id, resto );

    res.json(aduana);
}


const aduanasDelete = async(req, res = response) => {

    const { id } = req.params;

    // Fisicamente lo borramos
    const aduana = await Aduana.findByIdAndDelete(id);


    res.json(aduana);
}

const aduanasPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - usuariosPatch'
    });
}

module.exports = {
    aduanasGet,
    aduanasPost,
    aduanasPut,
    aduanasDelete,
    aduanasPatch
}