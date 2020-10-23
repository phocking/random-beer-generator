const button = document.querySelector('a');
 const beerName = document.querySelector('.name');
 const beerImage = document.querySelector('.beer-image');
 const descriptionOfBeer = document.querySelector('.description');
 const tag = document.querySelector('.tag');
 const abv = document.querySelector('.abv');
 function getBeer(e) {
e.preventDefault();
    fetch('https://api.punkapi.com/v2/beers/random')
.then(response => {
    return response.json();
})
.then(data => {
    console.log(data);
    const name = data[0].name;
    const description = data[0].description;
    const tagLine = data[0].tagline;
    const img = data[0].image_url;
    const abvData = data[0].abv;
    beerName.innerHTML = name;
    descriptionOfBeer.innerHTML = description;
    beerImage.src = img;
    tag.innerHTML = tagLine;
    abv.innerHTML = "Alc: " + abvData + "&#37;";
});

 }
   button.addEventListener('click', getBeer);

   //map practice
   const values = [20, 5, 21, 100, 3];
   const getValue = values.sort(function(a,b) {return a - b});
   console.log(getValue);
