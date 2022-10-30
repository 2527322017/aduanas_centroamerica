const { response, request } = require('express');
//const bcryptjs = require('bcryptjs');


const Aduana = require('../models/datosaduana');


/* FUNCIONES ENDPOINT GUATEMALA */
const aduanasGet = async(req = request, res = response) => {


    const filter = {fecha_cierre:''}; //solo GT //sin filtros, con filtro ej. {correo:'prueba@test.com'}
    const aduanas = await Aduana.find(filter);
        res.json({
          msg:'API GUATEMALA',
          carnet:'25-2732-2017',
          estudiante:'René Alberto Castaneda Reymundo',
          aduanas
      });
}

const aduanasPost = async(req, res = response) => {
    console.log(req.body);
    const today = new Date();

    if(typeof req.body.fecha === "undefined") { //agregar fecha por defecto
        req.body.fecha = today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate() ;
    }
   // if(typeof req.body.fecha_cierre === "undefined") { //agregar vacio por defecto
        req.body.fecha_cierre = '';
   // }
    if(typeof req.body.pais_ejecuta === "undefined") { //agregar vacio por defecto 
        req.body.pais_ejecuta = '';
    }
    if(typeof req.body.monto === "undefined") { //agregar vacio por defecto 
        req.body.monto = 0;
    }

    const { codigo, nombreproyecto, monto, fecha, fecha_cierre, pais_ejecuta } = req.body;
    const aduana = new Aduana({ codigo, nombreproyecto, monto, fecha, fecha_cierre,  pais_ejecuta });

    // Guardar en BD
    await aduana.save();

    res.json({
        carnet:'25-2732-2017',
        estudiante:'René Alberto Castaneda Reymundo',
        aduana
    });
}

const aduanasPut = async(req, res = response) => {
    const today = new Date();

    if(typeof req.body.fecha === "undefined") { //agregar fecha por defecto
        req.body.fecha = today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate() ;
    }
  //  if(typeof req.body.fecha_cierre === "undefined") { //agregar vacio por defecto 
        req.body.fecha_cierre = '';
   // }
    if(typeof req.body.pais_ejecuta === "undefined") { //agregar vacio por defecto 
        req.body.pais_ejecuta = '';
    }
    if(typeof req.body.monto === "undefined") { //agregar vacio por defecto 
        req.body.monto = 0;
    }

    const { id } = req.params;
    const { _id, ...resto } = req.body;

    const aduana = await Aduana.findByIdAndUpdate( id, resto );
    const aduanaUpdate = await Aduana.findById(id);
    res.json({
        carnet:'25-2732-2017',
        estudiante:'René Alberto Castaneda Reymundo',
        aduanaUpdate
    });
}


const aduanasDelete = async(req, res = response) => {

    const { id } = req.params;

    // Fisicamente lo borramos
    const aduana = await Aduana.findByIdAndDelete(id);


    res.json({
        carnet:'25-2732-2017',
        estudiante:'René Alberto Castaneda Reymundo',
        aduana});
}

const aduanasPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - usuariosPatch'
    });
}

/* FUNCIONES ENDPOINT COSTA RICA */


const aduanasGetCR = async(req = request, res = response) => {


    const filter = {fecha:''}; //solo GT //sin filtros, con filtro ej. {correo:'prueba@test.com'}
    const aduanas = await Aduana.find(filter);
        res.json({
          msg:'API COSTA RICA',
          carnet:'25-2732-2017',
          estudiante:'René Alberto Castaneda Reymundo',
          aduanas
      });
}

const aduanasPostCR = async(req, res = response) => {
    console.log(req.body);
    const today = new Date();

   // if(typeof req.body.fecha === "undefined") { //agregar fecha por defecto
        req.body.fecha = '';// today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate() ;
   // }
    if(typeof req.body.fecha_cierre === "undefined") { //agregar vacio por defecto 
        req.body.fecha_cierre = today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate();
    }
    if(typeof req.body.pais_ejecuta === "undefined") { //agregar vacio por defecto 
        req.body.pais_ejecuta = '';
    }
    if(typeof req.body.monto === "undefined") { //agregar vacio por defecto 
        req.body.monto = 0;
    }

    const { codigo, nombreproyecto, monto, fecha, fecha_cierre, pais_ejecuta } = req.body;
    const aduana = new Aduana({ codigo, nombreproyecto, monto, fecha, fecha_cierre,  pais_ejecuta });

    // Guardar en BD
    await aduana.save();

    res.json({
        carnet:'25-2732-2017',
        estudiante:'René Alberto Castaneda Reymundo',
        aduana
    });
}

const aduanasPutCR = async(req, res = response) => {
    const today = new Date();

//    if(typeof req.body.fecha === "undefined") { //agregar fecha por defecto
        req.body.fecha = '';// today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate() ;
//    }
    if(typeof req.body.fecha_cierre === "undefined") { //agregar vacio por defecto
        req.body.fecha_cierre =  today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate() ;
    }
    if(typeof req.body.pais_ejecuta === "undefined") { //agregar vacio por defecto en caso GT
        req.body.pais_ejecuta = '';
    }
    if(typeof req.body.monto === "undefined") { //agregar vacio por defecto en caso CR
        req.body.monto = 0;
    }

    const { id } = req.params;
    const { _id, ...resto } = req.body;

    const aduana = await Aduana.findByIdAndUpdate( id, resto );
    const aduanaUpdate = await Aduana.findById(id);
    res.json({
        carnet:'25-2732-2017',
        estudiante:'René Alberto Castaneda Reymundo',
        aduanaUpdate
    });
}


const aduanasDeleteCR = async(req, res = response) => {

    const { id } = req.params;

    // Fisicamente lo borramos
    const aduana = await Aduana.findByIdAndDelete(id);


    res.json({
        carnet:'25-2732-2017',
        estudiante:'René Alberto Castaneda Reymundo',
        aduana});
}

const aduanasPatchCR = (req, res = response) => {
    res.json({
        msg: 'patch API - usuariosPatch'
    });
}




module.exports = {
    aduanasGet,
    aduanasPost,
    aduanasPut,
    aduanasDelete,
    aduanasPatch,
    aduanasGetCR,
    aduanasPostCR,
    aduanasPutCR,
    aduanasDeleteCR,
    aduanasPatchCR
}