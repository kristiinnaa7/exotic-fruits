const mongoose = require('mongoose');
const Recipe = require('./models/recipeModel'); // Adjust the path if necessary

const recipes = [
    {
        name: 'Exotic Passion Fruit and Lime Cake',
        ingredients: [
            '½ Oats',
            '¾ cup Coconut Flour',
            '2 tbsp Coconut Sugar',
            '3 tbsp Coconut Oil',
            '0.12 tsp Himalayan Salt',
            '2 tbsp Cacao Powder',
            '¼ cup Nut Milk',
            '9 tbsp Coconut Nectar',
            '1 Mango',
            '½ cup Coconut Oil',
            '2 Passion Fruit',
            '1 Lime',
        ],
        imageUrl: 'cake.jpg'
    },
    {
        name: 'Hawaiian Mimosas',
        ingredients: [
            'Coconut Rum',
            'Pineapple Juice (cold)',
            'Champagne or Prosecco (cold)',
            'Pineapple slices and/or cherries for garnish',
        ],
        imageUrl: 'Hawaiian.jpg'
    },
    {
        name: 'Tropical Fruit Salad Ingredients',
        ingredients: [
            '1 Pineapple',
            '12 Mandarins',
            '5 Kiwis',
            '3 Mangos',
            '2 cups strawberries',
            '1 Lemon',
            '¼ cup honey',
        ],
        imageUrl: 'salad.jpg'
    },
];

async function seedRecipes() {
    try {
        await mongoose.connect('mongodb://localhost:27017/exotic-fruits', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('Database connected successfully.');

        await Recipe.deleteMany(); // Clear existing recipes to avoid duplicates
        console.log('Existing recipes removed.');

        await Recipe.insertMany(recipes);
        console.log('Recipes added successfully.');

        mongoose.connection.close();
    } catch (error) {
        console.error('Error seeding recipes:', error);
        mongoose.connection.close();
    }
}

seedRecipes();
