let searchBox = document.querySelector('#selector');
let images = document.querySelectorAll('a');

searchBox.addEventListener("keyup", (event) => {
  for(let i = 0; i < images.length; i++) {
    // value = image caption or null search input
    if (images[i].dataset.title.includes(searchBox.value.toLowerCase()) || searchBox.value.length == 0) { 
        images[i].style.display = "inline";
    } else {
      images[i].style.display = 'none';
   }
 }
});
