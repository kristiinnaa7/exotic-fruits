const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { fruitController } = require('../controllers');

// middleware that is specific to this router

router.get('/', fruitController.getFruits);  // Get all fruits
router.post('/', auth(), fruitController.createFruit);  // Create a new fruit

router.get('/:fruitId', fruitController.getFruit);  // Get a specific fruit by ID
router.put('/:fruitId', auth(), fruitController.updateFruit);  // Update a specific fruit by ID
router.delete('/:fruitId', auth(), fruitController.deleteFruit);  // Delete a specific fruit by ID

module.exports = router;
