// constants for query selector
const myStudentId = document.getElementById('myStudentId'); // Selects the element with the ID 'myStudentId' and assigns it to the constant 'myStudentId'
const customNumber = document.getElementById('customNumber'); // Selects the element with the ID 'customNumber' and assigns it to the constant 'customNumber'
const custColorBtn = document.querySelector('.custColor'); // Selects the element with the class 'custColor' and assigns it to the constant 'custColorBtn'
const randColorBtn = document.querySelector('.randColor'); // Selects the element with the class 'randColor' and assigns it to the constant 'randColorBtn'
const imageSelect = document.getElementById('imageSelect'); // Selects the element with the ID 'imageSelect' and assigns it to the constant 'imageSelect'
const images = document.getElementById('images'); // Selects the element with the ID 'images' and assigns it to the constant 'images'

// function to change bg color from user input and add student id
function setCustomBackgroundColor() {
    const inputValue = parseInt(customNumber.value); // Parses the value of the 'customNumber' input field as an integer and assigns it to 'inputValue'
    myStudentId.textContent = "My georgian student ID: " + 200552718; // Sets the text content of 'myStudentId' element
    document.body.style.backgroundColor = getColor(inputValue); // Changes the background color of the body based on the input value
}

// function to change bg color from random no.
function setRandomBackgroundColor() {
    myStudentId.textContent = "My georgian student ID: " + 200552718; // Sets the text content of 'myStudentId' element
    const randomDigitValue = Math.floor(Math.random() * 100) + 1; // Generates a random number between 1 and 100
    document.getElementById('customNumber').placeholder = randomDigitValue; // Updates the placeholder of 'customNumber' input field with the random number
    document.body.style.backgroundColor = getColor(randomDigitValue); // Changes the background color of the body based on the random number
}

// function to generate options for select list
function addList() {
    const imgs = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"]; // Array of image names
    for (let i = 0; i < imgs.length; i++) { // Iterates over the array of image names
        const option = document.createElement('option'); // Creates a new 'option' element
        option.value = imgs[i]; // Sets the 'value' attribute of the option
        option.textContent = imgs[i]; // Sets the text content of the option
        imageSelect.appendChild(option); // Appends the option to the 'imageSelect' select element
    }
}

// function to change image
function diffImgs() {
    const selectedImage = imageSelect.value; // Gets the selected value from the 'imageSelect' select element
    images.src = "./img/" + selectedImage; // Sets the source of the 'images' element to the selected image
}

// function to get color based on input value
function getColor(value) {
    if (value < 0 || value > 100) {
        return "red";
    } else if (value >= 0 && value < 20) {
        return "green";
    } else if (value >= 20 && value < 40) {
        return "blue";
    } else if (value >= 40 && value < 60) {
        return "orange";
    } else if (value >= 60 && value < 80) {
        return "purple";
    } else {
        return "yellow";
    }
}

// event listeners for on click event of buttons and select
custColorBtn.addEventListener('click', setCustomBackgroundColor); // Adds a click event listener to 'custColorBtn' button
randColorBtn.addEventListener('click', setRandomBackgroundColor); // Adds a click event listener to 'randColorBtn' button
imageSelect.addEventListener('change', diffImgs); // Adds a change event listener to 'imageSelect' select element

// Populate select list options on page load
addList(); // Calls the 'addList' function to populate the select list options on page load
