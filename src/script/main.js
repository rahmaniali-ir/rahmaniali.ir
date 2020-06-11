
const img = document.querySelector('img')

if(img.complete)
    img.classList.add('loaded')
else
    img.onload = () => img.classList.add('loaded')
