/*--------- Variables ----------*/
const arrAnimalFilters = document.querySelectorAll('.animalFilter');
const arrAnimalImages = document.querySelectorAll('.animalImage');
//console.log(arrAnimalFilters);

/*--------- Event Listeners (The target is what is clicked) ----------*/
//looping through each object
//Attach five event listener for each unique node
for(counter=0; counter < arrAnimalFilters.length; counter++){
    //console.log(counter);

    let currentFilter = arrAnimalFilters[counter];
    //console.log(currentFilter);
    //now attach the event listener - the magic about to happen
    currentFilter.addEventListener('click',filterImages);

}

/*--------- Functions ----------*/
function filterImages(event) {
    //console.log(event.target.innerHTML);
    var animalName = event.target.innerHTML.toLowerCase();
    console.log(animalName);

    /*--------- Filter Images ----------*/
    //first give them a class in the html file
    //Emmet shortcut Hold Alt key and click on change spot - type for all
    for(counter=0; counter < arrAnimalImages.length; counter++){
        let currentImage = arrAnimalImages[counter];
        //hide everything first with the stmt below before showing all
        currentImage.style.display = 'none'
        console.log(currentImage);
         if(animalName == 'all'){
           currentImage.style.display = 'inline';
        } else {
            let currentImageAnimal = currentImage.getAttribute('animal');
            console.log(currentImageAnimal);
            if(currentImageAnimal == animalName){
               currentImage.style.display = 'inline';
            }
        }
    }
}