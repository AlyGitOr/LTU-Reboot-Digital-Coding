//Writing a display of the 7  times table (using console log)
//multiplier = 7;

//the for loop typically takes three arguments, the 1st argument sets the counter value
for(multiplier=1; multiplier<=12; multiplier++){
    for(
        counter=1; //set the initial value of the counter. Does not revisit this arguments
        counter<=12; //conditional logic
        counter++  // add 1 to counter after each iteration
    ) {
        sum = multiplier * counter;
        message = multiplier + ' * ' + counter + ' = ' + sum
        console.log(message);
    }
}