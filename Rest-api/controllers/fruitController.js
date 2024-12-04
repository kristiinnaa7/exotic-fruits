const { fruitModel } = require('../models');

function getFruits(req, res, next) {
    fruitModel.find()
        .then(fruits => res.json(fruits))
        .catch(next);
}

function getFruit(req, res, next) {
    const { fruitId } = req.params;

    fruitModel.findById(fruitId)
        .then(fruit => res.json(fruit))
        .catch(next);
}

function createFruit(req, res, next) {
    const { name, origin, description } = req.body;
    const { _id: userId } = req.user;

    fruitModel.create({ name, origin, description, createdBy: userId })
        .then(fruit => res.status(200).json(fruit))
        .catch(next);
}

function updateFruit(req, res, next) {
    const { fruitId } = req.params;
    const { name, origin, description } = req.body;

    fruitModel.findByIdAndUpdate(fruitId, { name, origin, description }, { new: true })
        .then(updatedFruit => res.status(200).json(updatedFruit))
        .catch(next);
}

function deleteFruit(req, res, next) {
    const { fruitId } = req.params;

    fruitModel.findByIdAndDelete(fruitId)
        .then(() => res.status(200).json({ message: 'Fruit deleted successfully' }))
        .catch(next);
}

module.exports = {
    getFruits,
    createFruit,
    getFruit,
    updateFruit,
    deleteFruit,
}
