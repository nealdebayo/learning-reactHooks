let numArr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
];

let another = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]
function snakeArray () {
    this.popFirstArray = function (array) {
      return array.splice(0, 1)
    }
    this.takeLastElements = function (array) {
      return array[array.length - 1]
    }
    this.alternateArray = function (array) {
      array = array.reverse()
      let newArray = []
      const row  = array[0].length

      for (var i = 0; i < row; i++) {
         for (var j = 0; j < row; j++) {       
           if (j === 0) {
           array[i].pop()
            if (i % 2 === 0) {
             array[i].reverse()
           }
           }
           if (array[i][j]){
           newArray.push(array[i][j])
           }
           if (newArray.length === (row - 1)* (row -1)) {
             return newArray
           }
         }
      }
    }
}

function snakeArrayIt(theArray) {
var myArray = new snakeArray()

var output = myArray.popFirstArray(theArray)
output = output[0].filter(a => a)

for (var i =0 ; i < theArray.length; i++){
  output.push(myArray.takeLastElements(theArray[i]))
}
myArray.alternateArray(theArray).map(a => output.push(a))

return output
}

console.log(snakeArrayIt(numArr))
console.log(snakeArrayIt(another))

