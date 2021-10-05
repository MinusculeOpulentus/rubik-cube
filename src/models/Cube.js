const uniqid = require('uniqid')

class Cube {
    static #cubes = [
        {   
            id: 'abc',
            name: 'Mirror Cube',
            description: 'Strange cube',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Mirror_Cube_solved.png/1200px-Mirror_Cube_solved.png',
            difficulty: '4'
        },
        {
            id: 'abcef',
            name: 'Ice Cube',
            description: 'US Rapper',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Ice-Cube_2014-01-09-Chicago-photoby-Adam-Bielawski.jpg',
            difficulty: '1'

        }
    ];
    constructor(name, description, imageUrl, difficulty) {
        this.id = uniqid();
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.difficulty = difficulty;
    };

    static getAll() {
        return Cube.#cubes.slice();
    };

    static add(cube) {
        Cube.#cubes.push(cube);
    };
}

module.exports = Cube;