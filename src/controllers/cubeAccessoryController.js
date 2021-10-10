const router = require('express').Router({ mergeParams: true });

const cubeService = require('../services/cubeService')


router.get('/add', async (req, res) => {
   
    let cube = await cubeService.getOne(req.params.cubeId);
    console.log(cube)
    res.render('cube/accessory/add', { cube })
});


module.exports = router;
