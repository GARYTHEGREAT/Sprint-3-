// declare a variable and assign the value of an empty array that will hold all of our objects.
let beautyImageArray = [];
// findour image container element using document.getElementById
let elImageContainer = document.getElementById('image-container');


//create an object constructor that will take in parameters, and store properties of an image
let BeautyImage = function(name, sex, filePath, id) {
    this.name = name;
    this.sex = sex;
    this.filePath = filePath;
    this.id = id;
    this.clicked = 0;
    this.shown = 0;
    this.addClicks;
};

//instantiate our constructor to create multiple instances/objects of beauty images
let Ugly = new BeautyImage('Ugly', 'Female', './images/ugly.jpg', 'ugly');
let Ugly1 = new BeautyImage('Ugly1', 'Female', './images/ugly1.jpg', 'ugly1');
let Ugly2 = new BeautyImage('Ugly2', 'Male', './images/ugly2.jpg', 'ugly2');
let Ugly3 = new BeautyImage('Ugly3', 'Male', './images/ugly3.jpg', 'ugly3');
let Ugly4 = new BeautyImage('Ugly4', 'Male', './images/ugly4.jpg', 'ugly4');
let Ugly5 = new BeautyImage('Ugly5', 'Male', './images/ugly5.jpg', 'ugly5');
let Ugly6 = new BeautyImage('Ugly6', 'Female', './images/ugly6.jpg', 'ugly6');
let Ugly7 = new BeautyImage('Ugly7', 'Female', './images/ugly7.jpg', 'ugly7');
let Ugly8 = new BeautyImage('Ugly8', 'Female', './images/ugly8.jpg', 'ugly8');
let Ugly9 = new BeautyImage('Ugly9', 'Female', './images/ugly9.jpg', 'ugly9');
let Ugly10 = new BeautyImage('Ugly10', 'Male', './images/ugly10.jpg', 'ugly10');
let Ugly11 = new BeautyImage('Ugly11', 'Male', './images/ugly11.jpg', 'ugly11');
let Ugly12 = new BeautyImage('Ugly12', 'Male', './images/ugly12.jpg', 'ugly12');
let Ugly13 = new BeautyImage('Ugly13', 'Male', './images/ugly13.jpg', 'ugly13');
let Ugly14 = new BeautyImage('Ugly14', 'Male', './images/ugly14.jpg', 'ugly14');
let Ugly15 = new BeautyImage('Ugly15', 'Male', './images/ugly15.jpg', 'ugly15');
let Ugly16 = new BeautyImage('Ugly16', 'Female', './images/ugly16.jpg', 'ugly16');
let Ugly17 = new BeautyImage('Ugly17', 'Male', './images/ugly17.jpg', 'ugly17');
let Ugly18 = new BeautyImage('Ugly18', 'Female', './images/ugly18.jpg', 'ugly18');
let Ugly19 = new BeautyImage('Ugly19', 'Male', './images/ugly19.jpg', 'ugly19');
let Ugly20 = new BeautyImage('Ugly20', 'Female', './images/ugly20.jpg', 'ugly20');
let Ugly21 = new BeautyImage('Ugly21', 'Male', './images/ugly21.jpg', 'ugly21');
let Ugly22 = new BeautyImage('Ugly22', 'Male', './images/ugly22.jpg', 'ugly22');
let Ugly23 = new BeautyImage('Ugly23', 'Male', './images/ugly23.jpg', 'ugly23');
let Ugly24 = new BeautyImage('Ugly24', 'Male', './images/ugly24.jpg', 'ugly24');




//push our new instances/objects to our imageArray
beautyImageArray.push(Ugly, Ugly1, Ugly2, Ugly3, Ugly4, Ugly5,Ugly6, Ugly7, Ugly8, Ugly9, Ugly10, Ugly11, Ugly12, Ugly13, Ugly14, Ugly15, Ugly16, Ugly17, Ugly18, Ugly19, Ugly20, Ugly21, Ugly22, Ugly23, Ugly24);
















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
    if(event.target.id ===firstImage.id) {firstImage.clicked += 1;}
    else if(event.target.id === secondImage.id){secondImage.clicked += 1;}
    else if(event.target.id === thirdImage.id){thirdImage.clicked += 1;}



//invoke our display images function to display 3 new images
displayImages();
// console.log('event target', event.target);
// console.log ('event', firstImage.clicked, secondImage.clicked, thirdImage.clicked);
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
        //increment the shown property on our current image object by 1
        imageObject.shown += 1;
    }
        
}





//invoke our display images function that will display our intial 3 images
displayImages();
 console.log(elImageContainer);
 console.log('images', firstImage, secondImage, thirdImage);
