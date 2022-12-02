let code1 = "int x,y,r; if (x<0 || y<0) {     system.out.println('X o Y son negativos'); } else {     r=(x+y)/2;     system.out.println(“La media de X e Y es:” + r ); }"
let code2 = "int x,y,r; if (x<0 || y<0) {     console.log('if I want to do that'); } else {     r=(x+y)/2;     system.out.println(“La media de X e Y es:” + r ); }"
let code3 = "const lowNumber = 2const highNumber = 5console.log ('Armstrong Numbers:');for (let i = lowNumber; i <= highNumber; i++) {    let numberOfDigits = i.toString().length;    let sum = 0;    let temp = i;    while (temp > 0) {        let remainder = temp % 10;        sum += remainder ** numberOfDigits;        temp = parseInt(temp / 10);   }     if (sum == i) {        console.log(i);    }}"
let code4 = "const b = 22;const c = 5;const result1 = a % 10;const result2 = b % 10;const result3 = c % 10;if(result1 == result2 && result1 == result3) {    console.log(a, b, 'and', c,' have the same last digit.');}else {  console.log(a, b, 'and', c,' have different last digit.');}"
let code5 = "const b = 22;const c = 5;const result1 = a % 10;const result2 = b % 10;const result3 = c % 10;if(result1 == result2 && result1 == result3) {    console.log(`${a}, ${b} and ${c} have the same last digit. if`);}else {    console.log(`${a}, ${b} and ${c} have different last digit.`);}"

const keyWords = [
  'if',
  'else',
  '||',
  'while',
  'for',
  '.forEach',
  'case',
  'continue',
  'break',
  '.map'
]

function cc(code) {
  code = code.split(' ').join('')
  let CC = 0

  keyWords.forEach(keyWord => {
    let word = ''
    let wordLength = 1
    let isString = false

    for (let i = 0; i < code.length; i++) {
      const actualChar = code[i]
      const isActualCharACall = "\"\'\`".includes(actualChar)
      word += actualChar
      wordLength++

      if (isActualCharACall && wordLength == 2) {
        isString = isString ? false : true
      }
      if (word == keyWord && !isString) {
        CC++
      }
      if (wordLength == keyWord.length) {
        word = ''
        i = i - (wordLength - 1)
        wordLength = 0
      }
    }
  })
  return CC
}
console.log(cc(code1), ' == ', 3, '\n')
console.log(cc(code2), ' == ', 3, '\n')
console.log(cc(code3), ' == ', 3, '\n')
console.log(cc(code4), ' == ', 2, '\n')
console.log(cc(code5), ' == ', 2, '\n')
