


function seven(a, b, c, d, e, f, g) {
    var xhr = new XMLHttpRequest();
    xhr("GET",
    "http://localhost:3000/proxy=", false);
    xhr.send();
    var obj = JSON.parse(xhr.responseText);
}

console.log(obj);

if (a < 100) {
    
}