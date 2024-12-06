const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { fruitController } = require('../controllers');


router.get('/', fruitController.getFruits);  
router.post('/', auth(), fruitController.createFruit);  

router.get('/:fruitId', fruitController.getFruit);  
router.put('/:fruitId', auth(), fruitController.updateFruit); 
router.delete('/:fruitId', auth(), fruitController.deleteFruit);  

module.exports = router;
