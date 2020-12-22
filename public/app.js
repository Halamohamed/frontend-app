
const img = document.createElement('img');
document.querySelector('#chart').appendChild(img);



fetch('/api')
.then(response => response.json())
.then (data => {
    //img.src = URL.createObjectURL(data);
    img.setAttribute('src', data) ;
    
});