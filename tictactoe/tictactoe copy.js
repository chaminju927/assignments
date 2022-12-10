const tr1 = document.getElementById('tr1'); 
const tr2 = document.getElementById('tr2');
const tr3 = document.getElementById('tr3');
const trs = [tr1, tr2, tr3];
const tds = [];         //빈배열설정이유???
let turn = 'X';                        

const marking = function(event) {
    const trNumber = trs.indexOf(event.target.parentNode);
    console.log('trNumber', trNumber);       ///????????
    const tdNumber = tds[trNumber].indexOf(event.target);
    console.log('tdNumber', tdNumber);

    if (tds[trNumber][tdNumber].textContent !== '') {   //칸이 이미 채워져있는지?
       console.log('Not empty');                        //true라면 not empty
       
    } else {                                             //채워져있지 않다면
        console.log('Empty');                              //empty 출력 후
        tds[trNumber][tdNumber].textContent = turn;    //
        
        let threeTd = false;                  //세칸 다 채워져 있나?

        if (                                //가로줄 검사
            tds[trNumber][0].textContent === turn &&
            tds[trNumber][1].textContent === turn &&
            tds[trNumber][2].textContent === turn 
         ) {
           c= true;
         }
         if (                              //세로줄 검사
            tds[0][tdNumber].textContent === turn &&
            tds[1][tdNumber].textContent === turn &&
            tds[2][tdNumber].textContent === turn       
         ) {
            threeTd = true;
         }
         if (trNumber - tdNumber === 0) {     //대각선검사 필요한경우 1
            if (
                tds[0][0].textContent === turn &&
                tds[1][1].textContent === turn &&
                tds[2][2].textContent === turn 
            ) {
                threeTd = true;
               }
            }
         if (Math.abs(trNumber - tdNumber)===2) {           //대각선검사 필요한경우2
            if (
                tds[0][2].textContent === turn &&
                tds[1][1].textContent === turn &&
                tds[2][0].textContent === turn
            ) {
                threeTd = true ;
            }
      }
      if (threeTd) {
        alert('You' + '' + 'WIN !');           //다 찼으면 alert 후

        turn = 'X';                                //초기화
        tds.forEach(function (trs) {
            trs.forEach(function (td) {
                td.textContent = '';
            });
        });

        } else {                 //다 안찼으면
           if (turn === 'X') {
               turn = 'O';
             } else {
            turn = 'X';
             }
        }
     }
 };

for (let i = 0; i < 3; i++) {
    tds.push([]);
};

for (let j = 0; j < 3; j++) {
    tds[0].push(tr1.querySelectorAll('td').item(j));
    tds[1].push(tr2.querySelectorAll('td').item(j));
    tds[2].push(tr3.querySelectorAll('td').item(j));
};

for (let k = 0; k < 9; k++) {
    const td = document.getElementsByTagName('td'). item(k);
    td.addEventListener('click', marking);
};
const resetBtn = document.getElementById('reset');

resetBtn.addEventListener('click', function() {
    turn = 'X';
    tds.forEach(function (trs) {
        trs.forEach(function (td) {
           td.textContent = '';
         });
     });
 });

console.log(trs, tds);