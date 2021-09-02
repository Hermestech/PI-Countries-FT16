const {Router} = require('express')

const router = Router()

router.get('/',(req,res) => {
    res.send('Esta es la ruta de actividades')
})

module.exports = router