// declare a variable and assign the value of an empty array that will hold all of our objects.
let beautyImageArray = [];
// findour image container element using document.getElementById
let elImageContainer = document.getElementById('image-container'); 
console.log(beautyImageArray)
let totalClicks = 0;

//create an object constructor that will take in parameters, and store properties of an image
let BeautyImage = function(name, sex, filePath, id) {
    this.name = name;
    this.sex = sex;
    this.filePath = filePath;
    this.id = id;
    this.clicked = 0;
    this.shown = 0;
    this.addClicks = 0;
};
//check if localstorage exists
if(localStorage.length > 0){
    //retrieve store beauty image array fro local storage tht contains our clicks
    //and shown
    
    let getData = localStorage.getItem('storageBeautyImgArray');

    //reassign the value of beautyImageArray to the parsed version of beauty image array that we stored in local 
    //storage
    beautyImageArray = JSON.parse(getData);
    console.log(beautyImageArray)
    }
    else {
        //if local storage does not exist, 
//instantiate our constructor to create multiple instances/objects of beauty images

let Ranked1 = new BeautyImage('Ranked1', 'Female', './images/Ranked 1.jpg', 'Ranked1');
let Ranked2 = new BeautyImage('Ranked2', 'Male', './images/Ranked 2.jpg', 'Ranked2');
let Ranked3 = new BeautyImage('Ranked3', 'Male', './images/Ranked 3.jpg', 'Ranked3');
let Ranked4 = new BeautyImage('Ranked4', 'Male', './images/Ranked 4.jpg', 'Ranked4');
let Ranked5 = new BeautyImage('Ranked5', 'Male', './images/Ranked 5.jpg', 'Ranked5');
let Ranked6 = new BeautyImage('Ranked6', 'Female', './images/Ranked 6.jpg', 'Ranked6');
let Ranked7 = new BeautyImage('Ranked7', 'Female', './images/Ranked 7.jpg', 'Ranked7');
let Ranked8 = new BeautyImage('Ranked8', 'Female', './images/Ranked 8.jpg', 'Ranked8');
let Ranked9 = new BeautyImage('Ranked9', 'Female', './images/Ranked 9.jpg', 'Ranked9');
let Ranked10 = new BeautyImage('Ranked10', 'Male', './images/Ranked 10.jpg', 'Ranked10');
let Ranked11 = new BeautyImage('Ranked11', 'Male', './images/Ranked 11.jpg', 'Ranked11');
let Ranked12 = new BeautyImage('Ranked12', 'Male', './images/Ranked 12.jpg', 'Ranked12');
let Ranked13 = new BeautyImage('Ranked13', 'Male', './images/Ranked 13.jpg', 'Ranked13');
let Ranked14 = new BeautyImage('Ranked14', 'Male', './images/Ranked 14.jpg', 'Ranked14');
let Ranked15 = new BeautyImage('Ranked15', 'Male', './images/Ranked 15.jpg', 'Ranked15');
let Ranked16 = new BeautyImage('Ranked16', 'Female', './images/Ranked 16.jpg', 'Ranked16');
let Ranked17 = new BeautyImage('Ranked17', 'Male', './images/Ranked 17.jpg', 'Ranked17');
let Ranked18 = new BeautyImage('Ranked18', 'Female', './images/Ranked 18.jpg', 'Ranked18');
let Ranked19 = new BeautyImage('Ranked19', 'Male', './images/Ranked 19.jpg', 'Ranked19');
let Ranked20 = new BeautyImage('Ranked20', 'Female', './images/Ranked 20.jpg', 'Ranked20');
let Ranked21 = new BeautyImage('Ranked21', 'Male', './images/Ranked 21.jpg', 'Ranked21');
let Ranked22 = new BeautyImage('Ranked22', 'Male', './images/Ranked 22.jpg', 'Ranked22');
let Ranked23 = new BeautyImage('Ranked23', 'Male', './images/Ranked 23.jpg', 'Ranked23');
let Ranked24 = new BeautyImage('Ranked24', 'Male', './images/Ranked 24.jpg', 'Ranked24');
let Ranked25 = new BeautyImage('Ranked25', 'Female', './images/Ranked 25.jpg', 'Ranked25');



//push our new instances/objects to our imageArray
// beautyImageArray.push(Ugly, Ugly1, Ugly2, Ugly3, Ugly4, Ugly5,Ugly6, Ugly7, Ugly8, Ugly9, Ugly10, Ugly11, Ugly12, Ugly13, Ugly14, Ugly15, Ugly16, Ugly17, Ugly18, Ugly19, Ugly20, Ugly21, Ugly22, Ugly23, Ugly24);

//pushour new instances/objects to our imageArray
beautyImageArray.push( Ranked1, Ranked2, Ranked3, Ranked4, Ranked5, Ranked6, Ranked7, Ranked8, Ranked9, Ranked10, Ranked11, Ranked12, Ranked13, Ranked14, Ranked15, Ranked16, Ranked17, Ranked18, Ranked19, Ranked20, Ranked21, Ranked22, Ranked23, Ranked24, Ranked25);

}
console.log (beautyImageArray)



//instantiate our constructor to creat multiple instances/objects of beauty images
function randomImage() {
    let randomNumber = Math.floor(Math.random() * beautyImageArray.length);
    //declare a variable that will store the image object at the index of our random number
    let imageIndex = beautyImageArray[randomNumber];
    //return our random image object
    return imageIndex;
}

//define event handler function that will increment the times clicked for the firstImage
function imageClicked(event) {
    //if the id of target html element matches the first, second or third images objects, increment that objects clicked property by !
    if(event.target.id === firstImage.id) 
    {firstImage.clicked += 1;
    totalClicks +=1;
    }
    else if(event.target.id === secondImage.id)
    {secondImage.clicked += 1;
    totalClicks +=1;
    }
    else if(event.target.id === thirdImage.id)
    {thirdImage.clicked += 1;
    totalClicks +=1;
    }


//<old Code>
//invoke our display images function to display 3 new images
// console.log('event target', event.target);
//  console.log ('event', firstImage.clicked, secondImage.clicked, thirdImage.clicked);
 displayImages();
// }
// </old Code>

//everytime an image is clicked, save our beauty image array to local storage
localStorage.setItem('storageBeautyImgArray', JSON.stringify(beautyImageArray)); 
localStorage.setItem('storageTotalClicks', JSON.stringify(totalClicks)); 

//increment property allClicks each time any image object is clicked
    for (let i = 0; i < beautyImageArray.length; i++){
        beautyImageArray[i].addClicks +=1;
    }
    //check if number of clicks equals X then display chart
    if (beautyImageArray[0].addClicks >= 25){
        displayChart(); 
        
        console.log('displayChart')
        for (let x = 0; x < beautyImageArray.length; x++){
            beautyImageArray[x].shown = 0;
            beautyImageArray[x].clicked = 0;

        }
        // console.log('set beautyImageArray properties to zero');
        //  localStorage.clear();
    //else display three new random beauty images
    } else {
        localStorage.setItem('storagebeautyImageArray', JSON.stringify(beautyImageArray));
        displayImages();
    }


//invoke my chart function to display mamy data for images clicked and shown
//displayChart();
}


//declare three variables that will eventually hold our image objects that are being displayed on the page
let firstImage; 
let secondImage;
let thirdImage;

// //define a function that will display our random images
// displayImages() {
//     //re-assign the image container html to an empty string so that it removes previously shown images
//     elImageContainer.innerHTML = '';
// //creatte al loop that will iterate 3 timetimes to display 3 images
// for(let i =0; i < 3; i++) {
//     //create a new img html element 
//     let elImage = document.createElement('img');
//     //declare a variable and assign it the value that is returned from invoking randomImage function
//     let imageObject = randomImage();
//     //append our img tag to image contaniiner.
//     elImageContainer.appendChild(elImage);
// //set an id attribute to our new img element
// elImage.setAttribute('id',imageObject.id);
// //change the src attribute on our new image element to the filepath property on our current image object
// elImage.src =imageObject.filePath;
// //attach an event listener to our new img element 
// elImage.addEventListener('click', imageClicked);
// //increment the shown properth on our current image object by 1
// imageObject.shown += 1;
// //write conditionals that will check what iteration our for loop is on and assign our firstImage, secondImage, and thirdImage variables the value
// //of our current image object
// if(i === 0) {
//     firstImage = imageObject;
// } else if(i === 1) {
//     function displayImages() { }

// }
// }
//define a function that will display our random images
function displayImages() {
    //re-assign the image container html to an empty string so that it removes our previously shown images
    elImageContainer.innerHTML = '';
    //create a loop that will iterate 3 times to display 3 images
    for(let i =0; i < 3; i++) {
        //declare a variable and assign it the value that is returned from invoking randomImage function
        let imageObject = randomImage();
        //write conditionals that will check what iteration our for loop is on and assign our firstImage, secondImage, and thirdImage variables the value of our current image object
        if(i === 0) {
            firstImage = imageObject;
        } else if(i === 1) {
            while(imageObject.id === firstImage.id) {
                imageObject = randomImage();
                console.log('second while', imageObject.id);
                
            }
            secondImage = imageObject;
        } else {
            while(imageObject.id === firstImage.id || imageObject.id === secondImage.id)
            {
                imageObject = randomImage();
                console.log('third while', imageObject.id);
            }
            thirdImage = imageObject;
        }
        
        
        
        //create a new img html element
        let elImage = document.createElement('img');
        
        //append our img tag to image container
        elImageContainer.appendChild(elImage);
        //set an id attribute to our new img element
        elImage.setAttribute('id', imageObject.id);
        //change the src attribute on our new image element to the filepath property on our current image object
        elImage.src = imageObject.filePath;
        //attach an event listener to our new img element
        elImage.addEventListener('click', imageClicked);
        

        if (totalClicks >= 25 ) {
        // remove event listener l
        elImage.removeEventListener('click', imageClicked);
     }
//increment the shown property on our current image object by 1
        imageObject.shown += 1; 
        console.log(imageObject.shown)
    }
        
}





//invoke our display images function that will display our intial 3 images
displayImages()
 //<old code>
//console.log(elImageContainer);
// console.log('images', firstImage, secondImage, thirdImage);


//displayChart()

// //increment property allClicks each time any image object is clicked
  //   for (let i = 0; i < beautyImageArray.length; i++){
 //        beautyImageArray[i].addClicks +=1;
//     }
//     //check if number of clicks equals X then display chart
//     if (beautyImageArray[0].addClicks >= 25){
//         displayChart();
//         console.log('displayChart')
//         for (let x = 0; x < beautyImageArray.length; x++){
//             beautyImageArray[x].shown = 0;
//             beautyImageArray[x].clicked = 0;
//             beautyImageArray[x].addClicks = 0;
//         }
//         console.log('set beautyImageArray properties to zero');
//         localStorage.clear();
//     //else display three new random beauty images
//     } else {
//         localStorage.setItem('storagebeautyImageArray', JSON.stringify(beautyImageArray));
//         displayImages();
//     }


console.log('displayImages fire');
displayImages();
