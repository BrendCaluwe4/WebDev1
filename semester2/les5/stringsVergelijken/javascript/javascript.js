let string1 = "blablabla"
let string2 = "blablabla"
console.log(string1 == string2);
console.log(string1 === string2);


let sliced = string1.slice(0,string1.length)
console.log(string1 == sliced);
console.log(string1 === sliced);

let concat = "blabla".concat("bla");
console.log(string1 == concat);
console.log(string1 === concat);