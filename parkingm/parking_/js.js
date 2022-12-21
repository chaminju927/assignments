(function () { 
  var xhr = new XMLHttpRequest();
  xhr.open("GET",
      "http://localhost:3000/proxy2?=", false);
  xhr.send();
  var obj = JSON.parse(xhr.responseText);
  console.log(obj);

$("#title1").html(obj.gangnamParingInfo.row[0].ADDR_OLD);
$("#text1").html(`구분 : ${obj.gangnamParingInfo.row[0].MONEY_INFO}<br>시간당 요금 : ${obj.gangnamParingInfo.row[0].ADD_MONEY}<br>부제 : ${obj.gangnamParingInfo.row[0].BUJE_SIHENG}<br>오픈 시간 : ${obj.gangnamParingInfo.row[0].START_TM}<br>마감 시간 : ${obj.gangnamParingInfo.row[0].END_TM}<br>평일/주말 : ${obj.gangnamParingInfo.row[0].OPEN_DATE}<br>지불방식 : ${obj.gangnamParingInfo.row[0].PAY_INFO}<br>주차장타입 : ${obj.gangnamParingInfo.row[0].TYPE}`);
$("#title2").html(obj.gangnamParingInfo.row[1].ADDR_OLD);
$("#text2").html(`구분 : ${obj.gangnamParingInfo.row[1].MONEY_INFO}<br>시간당 요금 : ${obj.gangnamParingInfo.row[1].ADD_MONEY}<br>부제 : ${obj.gangnamParingInfo.row[1].BUJE_SIHENG}<br>오픈 시간 : ${obj.gangnamParingInfo.row[1].START_TM}<br>마감 시간 : ${obj.gangnamParingInfo.row[1].END_TM}<br>평일/주말 : ${obj.gangnamParingInfo.row[1].OPEN_DATE}<br>지불방식 : ${obj.gangnamParingInfo.row[1].PAY_INFO}<br>주차장타입 : ${obj.gangnamParingInfo.row[1].TYPE}`);
$("#title3").html(obj.gangnamParingInfo.row[4].ADDR_OLD);
$("#text3").html(`구분 : ${obj.gangnamParingInfo.row[4].MONEY_INFO}<br>시간당 요금 : ${obj.gangnamParingInfo.row[4].ADD_MONEY}<br>부제 : ${obj.gangnamParingInfo.row[4].BUJE_SIHENG}<br>오픈 시간 : ${obj.gangnamParingInfo.row[4].START_TM}<br>마감 시간 : ${obj.gangnamParingInfo.row[4].END_TM}<br>평일/주말 : ${obj.gangnamParingInfo.row[4].OPEN_DATE}<br>지불방식 : ${obj.gangnamParingInfo.row[4].PAY_INFO}<br>주차장타입 : ${obj.gangnamParingInfo.row[4].TYPE}`);
$("#title4").html(obj.gangnamParingInfo.row[34].ADDR_OLD);
$("#text4").html(`구분 : ${obj.gangnamParingInfo.row[34].MONEY_INFO}<br>시간당 요금 : ${obj.gangnamParingInfo.row[34].ADD_MONEY}<br>부제 : ${obj.gangnamParingInfo.row[34].BUJE_SIHENG}<br>오픈 시간 : ${obj.gangnamParingInfo.row[34].START_TM}<br>마감 시간 : ${obj.gangnamParingInfo.row[34].END_TM}<br>평일/주말 : ${obj.gangnamParingInfo.row[34].OPEN_DATE}<br>지불방식 : ${obj.gangnamParingInfo.row[34].PAY_INFO}<br>주차장타입 : ${obj.gangnamParingInfo.row[34].TYPE}`);

}());






// (function parking() {
//   var xhr = new XMLHttpRequest();
//   xhr.open("GET",
//     "http://localhost:3000/proxy2?=", false);
//   xhr.send();
//   const arr = JSON.parse(xhr.responseText);
//   console.log(arr);
  // let skyvalue = arr.response.body.items.item[18].fcstValue;
  // let pty = arr.response.body.items.item[6].fcstValue;
  // let t1hvalue = arr.response.body.items.item[24].fcstValue;
  // let rehvalue = arr.response.body.items.item[30].fcstValue;

  // document.getElementById(tm).innerHTML = `${t1hvalue}℃`;
  // document.getElementById(reh).innerHTML = `${rehvalue}%`;

  // if (pty == 0) {
  //   if (skyvalue == 1) {
  //     location.setAttribute('class', 'sun');
  //   } else if (skyvalue == 3) {
  //     location.setAttribute('class', 'cloud');
  //   } else {
  //     location.setAttribute('class', 'blur');
  //   }
  // } else if (pty == 1 || pty == 2 || pty == 5 || pty == 6) {
  //   location.setAttribute('class', 'rain');
  // } else {
  //   location.setAttribute('class', 'snow');
  // }
// }());
