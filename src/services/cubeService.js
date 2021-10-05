const Cube = require('../models/Cube');
const cubeDb = [
    {
    name: 'Mirror Cube',
    description: 'Strange cube',
    imageUrl: 'https://www.ecosia.org/images?q=mirror%20cube%20rubik#id=CF1633E2506FB67E403CC320584D54E47F1ACB1D',
    difficulty: '4'
    }
];

const getAll = () => cubeDb.slice();

const create = (name, description, imageUrl, difficulty) => {
    let cube = new Cube(name, description, imageUrl, difficulty)
    cubeDb.push(cube);
};

const cubeService = {
    create, 
    getAll
};
module.exports = cubeService;