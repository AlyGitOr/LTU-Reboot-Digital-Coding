var arrFavouriteFoods  = ['Lasagne', 'Fish & Chips', 'Bacon Butties', 'Pizza', 'Avocado']
                        //by putting arr you denote it is an array
                       // same way you would strMessage to tell another dev it is a string datatype

for(var counter = 0; counter < arrFavouriteFoods.length; counter++){
    let food = arrFavouriteFoods[counter];
    console.log(counter + ': ' + food);
}
