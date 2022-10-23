
const { Router } = require('express');
const { check } = require('express-validator');


const { validarCampos } = require('../middlewares/validar-campos');
const { esPaisValido, codigoExiste, existeAduanaPorId } = require('../helpers/db-validators');

const { aduanasGet,
        aduanasPut,
        aduanasPost,
        aduanasDelete,
        aduanasPatch} = require('../controllers/aduanas');

const router = Router();


router.get('/', aduanasGet );

router.put('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( existeAduanaPorId ),
    check('pais_ejecuta').custom( esPaisValido ), 
    validarCampos
],aduanasPut);

router.post('/',[
    check('nombreproyecto', 'El nombreproyecto es obligatorio').not().isEmpty(),
    check('codigo').custom( codigoExiste ),
    // check('pais_ejecuta', 'No es un rol válido').isIn(['GUATEMALA', 'EL SALVADOR', 'HONDURAS', 'COSTA RICA', 'NICARAGUA', 'PANAMA']),
    check('pais_ejecuta').custom( esPaisValido ), 
    validarCampos
], aduanasPost );

router.delete('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( existeAduanaPorId ),
    validarCampos
],aduanasDelete );

router.patch('/', aduanasPatch);

module.exports = router;