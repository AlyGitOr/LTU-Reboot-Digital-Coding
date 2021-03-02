//Prent Default, good for stopping form click if failed validation
//The required function in html only does the first one ...
//If you don't want a link to be submitted, use it
var hoverElement = document.querySelector('.preventClick');

function alertBox(event){
    event.preventDefault();
    alert('You clicked a link and I stopped it');
}

hoverElement.addEventListener('click',alertBox);
