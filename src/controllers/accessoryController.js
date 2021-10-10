const express = require('express');
const router = express.Router();

router.get('/createAccessory', (req, res) => {
    res.render('accessory/createAccessory')
});

router.post('/createAccessory', (req, res) => {
    let accessory = req.body;

    console.log(accessory);
    res.redirect('/');
});


module.exports = router;
