let search_value = [];
let search_text = document.querySelector(".maintext");
let list = document.querySelector(".list-body");
let all = false;

let select = 0;


Object.prototype.forEach = function(fn) {
  for(let i in this) {
      fn(i, this[i])
  }
}

function onkey(e){
  if(e.keyCode == 13 && document.querySelector(".intext").value != "") {
    search_value.push({
      text: document.querySelector(".intext").value,
      check: false,
      index: 0
    })
    reflesh();
  }
}

divcreat = function(div, obj) {
  let toglebtn = document.createElement("input");
  let litext = document.createElement("label");
  let btn = document.createElement("button");
  if(obj.check) {
    div.className = "true"
  }else {
    div.className = "false"
  }
  litext.innerText = obj.text;

  toglebtn.type = "button";
  toglebtn.value = "    ";
  btn.className = "xbtn-out";
  btn.innerText = "X"

  toglebtn.addEventListener("click", () => {
    obj.check = !obj.check;
    reflesh()
  })
  btn.addEventListener("click", () => {
    search_value.splice(obj.index, 1);
    reflesh()
  })
  div.addEventListener("mouseover", function() {
    btn.className = "xbtn-over";
  })
  div.addEventListener("mouseout", function() {
    btn.className = "xbtn-out";
  })


  div.appendChild(toglebtn);
  div.appendChild(litext);
  div.appendChild(btn);

}

function togle(index) {
  if (search_value[index].check) {
    search_value[index].check = false;
  }else {
    search_value[index].check = true;
  }

  reflesh()
}

function reflesh() {
  document.querySelector(".intext").value = "";
  list.innerHTML="";
  search_value.forEach((value, index) => {
    search_value[index].index=index;
    let li = document.createElement("li");
    li.className = "lists"
    let div = document.createElement("div");
    divcreat(div, value);
    li.appendChild(div);

    if(select == 0) {
      list.appendChild(li);
    }else if(select == 1) {
      if(!value.check) { 
        list.appendChild(li);
      }
    }else if(select == 2) {
      if(value.check) { 
        list.appendChild(li);
      }
    }
  })
  document.getElementById("btn1").value = search_value.length+" items left"
}

document.getElementById("btn2").addEventListener("click", () => {
  if(select != 0) {
    select = 0;
    document.getElementById("btn2").className = "btn-on"
    document.getElementById("btn3").className = "btn-off"
    document.getElementById("btn4").className = "btn-off"
    reflesh();
  }
});

document.getElementById("btn3").addEventListener("click", () => {
  if(select != 1) {
    select = 1;
    document.getElementById("btn2").className = "btn-off"
    document.getElementById("btn3").className = "btn-on"
    document.getElementById("btn4").className = "btn-off"
    reflesh();
  }
});

document.getElementById("btn4").addEventListener("click", () => {
  if(select != 2) {
    select = 2;
    document.getElementById("btn2").className = "btn-off"
    document.getElementById("btn3").className = "btn-off"
    document.getElementById("btn4").className = "btn-on"
    reflesh();
  }
});

document.getElementById("btn5").addEventListener("click", () => {
  let subarr = [];
  search_value.forEach((value, index) => {
    if(value.check) {
      subarr.push(value);
      // search_value.splice(search_value.indexOf(value), 1);
    }
  })
  subarr.forEach((value) => {
    search_value.splice(search_value.indexOf(value), 1);
  })
  reflesh()

});


document.getElementById("allclick").addEventListener("click", () => {
  all = !all;
  if(all) {
    document.getElementById("allclick").className = "allcheck-on";
    search_value.forEach((value) => value.check = true)
  }else {
    document.getElementById("allclick").className = "allcheck-off";
    search_value.forEach((value) => value.check = false)
  }
  reflesh();
})

setInterval(() => {
  let allcheck = 0;
  for(let i of search_value){
    if(!i.check){ 
      document.getElementById("allclick").className = "allcheck-off";
      console.log("전체 해제")
      all = false;
      break;
    }else {
      allcheck++;
    }
  }
  if(allcheck == search_value.length && allcheck != 0) {
    document.getElementById("allclick").className = "allcheck-on";
    console.log("전체 체크")
    all = true;
  }
  if(search_value.length == 0){
    document.getElementById("allclick").className = "allcheck-off";
    console.log("없어요")
    all = false;
  }
}, 10);