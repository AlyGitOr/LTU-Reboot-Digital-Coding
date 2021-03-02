//Prent Default
var hoverElement = document.querySelector('.preventClick');

function alertBox(event){
    event.preventDefault();
    alert('You clicked a link and I stopped it');
}

hoverElement.addEventListener('click',alertBox);
