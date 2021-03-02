//Event listener for the Leeds  Trinity Logo
var hoverElement = document.getElementById('hoverElement');
console.log(hoverElement);
function alertBox(event){
    console.log(event);
    alert('You hovered over my image');
}

hoverElement.addEventListener('mouseout',alertBox);
