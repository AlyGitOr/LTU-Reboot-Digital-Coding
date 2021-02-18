//Adding a validation function for the numbers
function isValidNumber(number){
    //We are using a double negative as inNaN returns false on valid numbers
    return !isNaN(number);
}
function calculator(number1,number2,operator){
    strMessage = '';
    //If number1 is not a number
    if(!isValidNumber(number1)){
        //end the function here and pass the mesage below
        return 'Argument 1 must be a number';
    }
    //if number 2 is not a number
    if(!isValidNumber(number2)){
        return 'Argument 2 must be a number';
    }
    //if the operator does not equal +-*/ % 
    if(operator != '+' && operator != '-' && operator != '*' && operator != '/' && operator != '%'){
        //return the message below
        return 'Argument 3 must be an arithmatic operator';
    }
    //Having passed all of the validation, we need to do the maths
    var sum;
    //based on the operator passed in argument 3 do a different sum
    switch(operator){
        case '+':
            sum = number1 + number2;
        break;
        case '-':
            sum = number1 - number2;
        break;
        case '*':
            sum = number1 * number2;
        break;
        case '/':
            sum = number1 / number2;
        break;
        case '%':
            sum = number1 % number2;
        break;
    }
    return sum;
}

//set the value of the sum to equal whatever 
sum = calculator(10,10,'%');
//sum = calculator(10,10,'Alex');
console.log(sum);