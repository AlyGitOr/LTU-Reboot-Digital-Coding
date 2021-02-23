objRecipe = {
    recipeTitle: 'Beans on Toast',
    servings: 1,
    ingredients: [
        'Baked Beans',
        'Bread',
        'Butter',
        'Black Pepper'
    ],
    directions: [
        'Empty tin of baked beans in a pan',
        'Put bread in toaster and toast until golden brown',
        'Butter the toast',
        'Place beans on top of the toast',
        'Apply black pepper as you see fit'
    ]
};

console.log(objRecipe.recipeTitle);
console.log(objRecipe.servings);
for(counter = 0; counter < objRecipe.ingredients.length; counter++){
    let ingredients = objRecipe.ingredients[counter];
    console.log(ingredients);
}
for(counter = 0; counter < objRecipe.directions.length; counter++){
    let directions = objRecipe.directions[counter];
    console.log(directions);
}