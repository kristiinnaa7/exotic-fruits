const { userModel, fruitModel, recipeModel } = require('../models');

function newRecipe(name, ingredients, userId) {
    return recipeModel.create({ name, ingredients, userId })
        .then(recipe => {
            return userModel.updateOne(
                { _id: userId },
                { $push: { recipes: recipe._id } }
            );
        });
}

function getLatestRecipes(req, res, next) {
    const limit = Number(req.query.limit) || 0;

    recipeModel.find()
        .sort({ created_at: -1 })
        .limit(limit)
        .populate('userId')
        .then(recipes => {
            res.status(200).json(recipes);
        })
        .catch(next);
}

function createRecipe(req, res, next) {
    const { _id: userId } = req.user;
    const { name, ingredients } = req.body;

    newRecipe(name, ingredients, userId)
        .then(() => res.status(200).json({ message: 'Recipe created successfully!' }))
        .catch(next);
}

function editRecipe(req, res, next) {
    const { recipeId } = req.params;
    const { name, ingredients } = req.body;
    const { _id: userId } = req.user;

    recipeModel.findOneAndUpdate(
        { _id: recipeId, userId }, 
        { name, ingredients },
        { new: true }
    )
        .then(updatedRecipe => {
            if (updatedRecipe) {
                res.status(200).json(updatedRecipe);
            } else {
                res.status(401).json({ message: 'Not allowed!' });
            }
        })
        .catch(next);
}


function deleteRecipe(req, res, next) {
    const { recipeId } = req.params;
    const { _id: userId } = req.user;

    Promise.all([
        recipeModel.findOneAndDelete({ _id: recipeId, userId }),
        userModel.findOneAndUpdate({ _id: userId }, { $pull: { recipes: recipeId } }),
    ])
        .then(([deletedRecipe]) => {
            if (deletedRecipe) {
                res.status(200).json(deletedRecipe);
            } else {
                res.status(401).json({ message: 'Not allowed!' });
            }
        })
        .catch(next);
}

module.exports = {
    getLatestRecipes,
    newRecipe,
    createRecipe,
    editRecipe,
    deleteRecipe,
   
};
