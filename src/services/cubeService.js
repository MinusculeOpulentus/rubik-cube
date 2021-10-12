const Cube = require('../models/Cube');
const Accessory = require('../models/Accessory');


//const getAll = () => Cube.getAll();
const getAll = () => Cube.find({}).lean(); // if we use without lean(), returns array of models, not an array of objects

//const getOne = (id) => Cube.getAll().find(x => x.id == id);
const getOne = (id) => Cube.findById(id).populate('accessories').lean();

const create = (name, description, imageUrl, difficulty) => {
    let cube = new Cube({
        name, 
        description, 
        imageUrl, 
        difficulty
        
    });

    //Cube.add(cube);
    return cube.save()
};

const search = async (text, from, to) => {
    //let result = Cube.getAll();
    let result = await getAll();

    if (text) {
        result = result.filter(x => x.name.toLowerCase().includes(text.toLowerCase()))
    };
    if (from) {
        result = result.filter(x => x.difficulty >= from);
    };
    if (to) {
        result = result.filter(x => x.difficulty <= to);
    };

    return result;
};

const attachAccessory = async (cubeId, accessoryId) =>{
    let cube = await Cube.findById(cubeId);
    let accessory = await Accessory.findById(accessoryId);

    cube.accessories.push(accessory);

    return cube.save()
};

const cubeService = { 
    getAll, 
    create,
    getOne,
    search,
    attachAccessory,
};
module.exports = cubeService;