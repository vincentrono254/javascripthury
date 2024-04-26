function updateClock() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();

  // Add leading zeros if necessary
  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;

  // Update time elements in the HTML
  document.querySelector('[data-time="hours"]').textContent = hours;
  document.querySelector('[data-time="minutes"]').textContent = minutes;
  document.querySelector('[data-time="seconds"]').textContent = seconds;
}
updateClock();

setInterval(updateClock, 1000);

//greetings
function updateGreeting() {
  var currentTime = new Date();
  var currentHour = currentTime.getHours();
  var greetingElement = document.getElementById("greeting");

  // Define different greetings for different times of day
  var greetings = {
    morning: "Good Morning!",
    afternoon: "Good Afternoon!",
    evening: "Good Evening!",
  };

  // Determine the appropriate greeting based on the current hour
  var greeting;
  if (currentHour >= 5 && currentHour < 12) {
    greeting = greetings.morning;
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = greetings.afternoon;
  } else {
    greeting = greetings.evening;
  }

  // Update the greeting element with the determined greeting
  greetingElement.textContent = greeting;
}

updateGreeting(); // Update greeting when the page loads

//change image

var myImage = document.querySelector("#galleryImage");

function changeImage1(params) {
  myImage.src = "/assets/gallery/image1.jpg";
}
function changeImage2(params) {
  myImage.src = "/assets/gallery/image2.jpg";
}
function changeImage3(params) {
  myImage.src = "/assets/gallery/image3.jpg";
}
//hamburger
document.addEventListener("DOMContentLoaded", function () {
  const openNavMenuButton = document.getElementById("open-nav-menu");
  const closeNavMenuButton = document.getElementById("close-nav-menu");
  const navMenu = document.querySelector(".wrapper");

  openNavMenuButton.addEventListener("click", function () {
    navMenu.classList.add("nav-open");
  });

  closeNavMenuButton.addEventListener("click", function () {
    navMenu.classList.remove("nav-open");
  });
});

// Sample array of image objects
const images = [
  {
    src: "assets/products/img1.png", // Paid image
    description: "AstroFiction.",
    person: "John Doe",
    price: 49,
  },
  {
    src: "assets/products/img2.png", // Paid image
    description: "Space Odissey.",
    person: "Marie Anne",
    price: 15,
  },
  {
    src: "assets/products/img3.png", // Free image
    description: "Doomed City.",
    person: "Jason Cobert",
    price: 0,
  },
  {
    src: "assets/products/img4.png", // Paid image
    description: "Black Dog.",
    person: "Jane Smith",
    price: 20,
  },
  {
    src: "assets/products/img5.png", // Paid image
    description: "My Little Robot.",
    person: "John Smith",
    price: 25,
  },
  {
    src: "assets/products/img6.png", // Free image
    name: "Image 6",
    description: "Garden Girl.",
    person: "Jane Doe",
    price: 0,
  },
];

// Function to update the images displayed
function updateImages(filter) {
  const productsArea = document.getElementById("productsArea");
  productsArea.innerHTML = ""; // Clear current images

  // Determine which images to show based on the filter
  const filteredImages = images.filter((image) => {
    if (filter === "all") return true;
    if (filter === "paid" && image.price > 0) return true;
    if (filter === "free" && image.price === 0) return true;
    return false;
  });

  // Create and append the new image cards to the products area
  filteredImages.forEach((image) => {
    const imageCard = document.createElement("div");
    imageCard.classList.add("image-card");

    const img = document.createElement("img");
    img.src = image.src;
    imageCard.appendChild(img);

    const description = document.createElement("div");
    description.classList.add("description");
    description.textContent = image.description;
    imageCard.appendChild(description);

    const person = document.createElement("div");
    person.classList.add("person");
    person.textContent = `Person: ${image.person}`;
    imageCard.appendChild(person);

    const price = document.createElement("div");
    price.classList.add("price");
    price.textContent = `Price: $${image.price}`;
    imageCard.appendChild(price);

    productsArea.appendChild(imageCard);
  });
}

// Event listener for radio button changes
document.querySelectorAll('input[name="products"]').forEach((radio) => {
  radio.addEventListener("change", function () {
    updateImages(this.id);
  });
});

// Initial call to display all images on page load
updateImages("all");

//temperature in celsius
const temp = 24;
document.getElementById("tempChange").innerHTML = temp + "&deg;C";

//celsius function
function updateFahr() {
  const fahr = (temp * 9) / 5 + 32;

  document.getElementById("tempChange").innerHTML = fahr + "&deg;F";
}

function updateCels() {
  const Celc = temp;

  document.getElementById("tempChange").innerHTML = Celc + "&deg;C";
}
