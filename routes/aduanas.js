
const { Router } = require('express');
const { check } = require('express-validator');


const { validarCampos } = require('../middlewares/validar-campos');
const { esPaisValido, codigoExiste, existeAduanaPorId } = require('../helpers/db-validators');

const { aduanasGet,
        aduanasPut,
        aduanasPost,
        aduanasDelete,
        aduanasPatch,
        aduanasGetCR,
        aduanasPutCR,
        aduanasPostCR,
        aduanasDeleteCR,
        aduanasPatchCR} = require('../controllers/aduanas');

const router = Router();

/* ROUTER GUATEMALA */
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

/* ROUTER COSTA RICA */
router.get('/costarica', aduanasGetCR );

router.put('/costarica/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( existeAduanaPorId ),
    check('pais_ejecuta').custom( esPaisValido ), 
    validarCampos
],aduanasPutCR);

router.post('/costarica',[
    check('nombreproyecto', 'El nombreproyecto es obligatorio').not().isEmpty(),
    check('codigo').custom( codigoExiste ),
    // check('pais_ejecuta', 'No es un rol válido').isIn(['GUATEMALA', 'EL SALVADOR', 'HONDURAS', 'COSTA RICA', 'NICARAGUA', 'PANAMA']),
    check('pais_ejecuta').custom( esPaisValido ), 
    validarCampos
], aduanasPostCR );

router.delete('/costarica/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( existeAduanaPorId ),
    validarCampos
],aduanasDeleteCR );

router.patch('/', aduanasPatchCR);

module.exports = router;