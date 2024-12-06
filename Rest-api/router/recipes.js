const express = require('express');
const router = express.Router();
const { auth } = require('../utils'); 
const { recipeController } = require('../controllers');


router.get('/', recipeController.getLatestRecipes);
router.post('/', auth(), recipeController.createRecipe);
router.put('/:recipeId', auth(), recipeController.editRecipe);
router.delete('/:recipeId', auth(), recipeController.deleteRecipe);

module.exports = router;
