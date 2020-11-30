const list = [10, 15, 3, 7];
const k = 17;

function matchSum(list, k){
 for (var i = 0; i < list.length; i++) {
  list.forEach(num => {
   if (num != list[i]) {
    if (list[i] + num == k) {
     console.log(`${num} + ${list[i]} = ${k} (true)`);
    }
   }
  })
 }
}

matchSum(list, k);