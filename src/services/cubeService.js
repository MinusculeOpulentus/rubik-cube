const Cube = require('../models/Cube');


const getAll = () => Cube.getAll();

const getOne = (id) => Cube.getAll().find(x => x.id == id);

const create = (name, description, imageUrl, difficulty) => {
    let cube = new Cube(name, description, imageUrl, difficulty)
    Cube.add(cube);
};

const search = (text, from, to) => Cube.getAll().filter(x => x.name.toLowerCase().includes(text.toLowerCase()));

const cubeService = { 
    getAll, 
    create,
    getOne,
    search,
};
module.exports = cubeService;