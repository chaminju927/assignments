const puzzlecontainer = document.querySelector("#bigdiv")
let puzzle=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,""]
let size = 3;

console.log(puzzle)
randomizePuzzle();

function randomizePuzzle() {
    const randomValues = getRandomValues();
    let i = 0; 
    for(let puzzleItem of puzzle) {
        puzzleItem.valueOf = randomValues[i]
        i++;
    }
    const puzzleWithValueOf9 = puzzle.find((item)=>item.valueOf === size *size)
    puzzleWithValueOf9.disabled = true
}

function getRandomValues() {
    const values = []
    for (let i =1; i <= size*size; i++){
        values.push(i)
    }
    const randomValues = values.sort(() => Math.random() - 0.5)
    return randomValues
}