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
    ],
    letsCook: function() {  
        console.log("I'm hungry lets cooks " + this.recipeTitle);
    },
};
//this - what does this mean in OO Programming?

objRecipe.letsCook();