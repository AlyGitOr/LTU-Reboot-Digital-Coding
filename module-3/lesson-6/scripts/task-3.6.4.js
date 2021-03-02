//Prent Default, good for stopping form click if failed validation
var hoverElement = document.querySelector('.preventClick');

function alertBox(event){
    event.preventDefault();
    alert('You clicked a link and I stopped it');
}

hoverElement.addEventListener('click',alertBox);
