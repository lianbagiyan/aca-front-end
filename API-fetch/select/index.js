let img = document.querySelector('.photo-dog');
console.log('img:', img)
let breed = document.querySelector('.select-block');

function addImages(breed) {
    return fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then((r) => r.json())
        .then((r) => {
            console.log(r.message)
        
            img.src = r.message
            console.log('src', img.src)
            console.log(img)
        })
}

breed.addEventListener('change', (name) => {
    img.src = '';
    addImages(name.target.value);
})
