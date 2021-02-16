function getFullName(firstName, lastName){
  let fullName = firstName + ' ' + lastName;
  return fullName;

}

var fName = "Mary";
var lName = "Smith";

var fName2 = "Phil";
var lName2 = "Barlow";

var fullName1 = getFullName(fName,lName);
console.log(fullName1);
var fullName2 = getFullName(fName2, lName2);
console.log(fullName2);

