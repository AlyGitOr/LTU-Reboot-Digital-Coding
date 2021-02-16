var temp = 18;

function wearACoat(temperature) {
    if(temperature < 0) {
        console.log('Wear a coat');
 }  else if (temperature < 10) {
        console.log('Wear a coat & hat');
 }  else if (temperature < 15) {
        console.log('Stay inside');
 }  else {
        console.log('You don\'t need a coat');
 }
}

wearACoat(20);
wearACoat(14);
wearACoat(5);
wearACoat(-3);