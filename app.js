
function setImageSource(imageElement, imagePath) {
    imageElement.src = imagePath;
  }
  
  function addImageEventListeners(buttonElement, imageElement, imagePath) {
    // Store the original image source
    const originalImageSource = imageElement.src;
  
    buttonElement.addEventListener("mouseover", function() {
      setImageSource(imageElement, imagePath);
    });
  
    buttonElement.addEventListener("mouseout", function() {
      setImageSource(imageElement, originalImageSource);
    });
  }
  
  // First set of buttons and image
  const image = document.getElementById("Image");
  const button1 = document.getElementById("green-btn");
  const button2 = document.getElementById("red-btn");
  const button3 = document.getElementById("grey-btn");
  const button4 = document.getElementById("yellow-btn");
  
  addImageEventListeners(button1, image, "/Images/bagcolorgreen.png");
  addImageEventListeners(button2, image, "/Images/bagcolorred.png");
  addImageEventListeners(button3, image, "/Images/bagcolorgrey.png");
  addImageEventListeners(button4, image, "/Images/bag.png");

  const zoom = document.querySelector(".uil-search-plus");
   let isZoom = false;

  
  
  // Second set of buttons and image
  const image2 = document.getElementById("leather-bag");
  const button5 = document.getElementById("color-diff1");
  const button6 = document.getElementById("color-diff2");
  const button7 = document.getElementById("color-diff3");
  
  addImageEventListeners(button5, image2, "/Images/backpack1_ano.png");
  addImageEventListeners(button6, image2, "/Images/backpack1_an.png");
  addImageEventListeners(button7, image2, "/Images/backpack1-removebg-preview.png");

  // Third set of buttons and image 
  const image3 = document.getElementById("kid-bag");
  const button8 = document.getElementById("color-diff7");
  const button9 = document.getElementById("color-diff8");
  const button10 = document.getElementById("color-diff9");

  addImageEventListeners(button8, image3, "/Images/kidbag_purple.png");
  addImageEventListeners(button9, image3, "/Images/kidbag_green-.png");
  addImageEventListeners(button10, image3, "/Images/backpack2-removebg-preview.png");
  