// function findUniq(arr) {
//   return arr.find((item) => arr.indexOf(item) === arr.lastIndexOf(item))    
// }

// console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]))

/*let arry = [4,45,1,785,674,]
console.log(arry.sort(arry.length-1))
*/
function uniqueInOrder(iterable){
    var res = [];
    for (var i = 0; i < iterable.length; i++) {
      if (iterable[i] != iterable[i+1]) res.push(iterable[i]);
    }
    return res;
  }

  console.log(uniqueInOrder('AAAABBBCCDAABBB'))
