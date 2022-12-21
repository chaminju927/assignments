(function hh() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET",
    "http://localhost:3010/proxy2?=", false);
    xhr.send();
    var obj = JSON.parse(xhr.responseText);
    console.log(obj);

})();
