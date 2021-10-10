const router = require('express').Router();

const accessoryService = require('../services/accessoryService');

router.get('/createAccessory', (req, res) => {
    res.render('accessory/createAccessory')
});

router.post('/createAccessory', async (req, res) => {
    let {name, imageUrl, description} = req.body;
    await accessoryService.create(name, imageUrl, description)

    res.redirect('/');
});


module.exports = router;
