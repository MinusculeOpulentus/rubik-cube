const Accessory = require('../models/Accessory');

async function create(name, imageUrl, description) {
    return Accessory.create({name, imageUrl, description})
};

async function getAll() {
    return Accessory.find({}).lean()
};

async function getRemaining(accessoryId) {
    return Accessory.find({_id: {$nin: accessoryId}}).lean();

}

const accessoryService = { 
    create,
    getAll,
    getRemaining,
    
};
module.exports = accessoryService;