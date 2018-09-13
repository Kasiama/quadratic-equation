module.exports = function solveEquation(equation) {
  let arr = equation.split(" ")
  let a = arr[0]
  let b = parseInt(arr[3]+arr[4])
  let c = parseInt(arr[7]+arr[8])
  let D = Math.pow(b, 2) - (4 * a * c)
  let x1 = (-1* b + Math.sqrt(D)) / (2*a)
  let x2 = (-1* b - Math.pow(D, 0.5))/ (2*a)
   x1 = Math.round(x1)
   x2=Math.round(x2)

 	let res =[x1,x2].sort(function compareNumbers(a, b) {
  return a - b;
})
 	return res
}
