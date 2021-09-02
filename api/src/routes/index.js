const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countriesRoutes = require('./countries')
const activitiesRoutes = require('./activities')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/countries', countriesRoutes)
router.use('/activities', activitiesRoutes)

router.get('/', (req, res) => {
    res.status(200).send('Página de inicio de 🎌')
})

module.exports = router;
