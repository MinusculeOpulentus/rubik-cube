const express = require('express');
const cubeService = require('../services/cubeService')
const router = express.Router();
const Cube = require('../models/Cube');



const home = async (req, res) => {
    let cubes = await cubeService.getAll();
    //let test = await Cube.findByName('Mirror Cube')
    res.render('index', {
        cubes
    });
};

const about = (req, res) => {
    res.render('about');

};

const search = async (req, res) => {
    
    let text = req.query.search;
    let from = req.query.from;
    let to = req.query.to;

    let cubes = await cubeService.search(text, from, to);

    res.render('index', { 
        title: 'SEARCH',
        text,
        from, 
        to,
        cubes,
    });
}

router.get('/', home);
router.get('/about', about);
router.get('/search', search);

module.exports = router;