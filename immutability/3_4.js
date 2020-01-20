var o1 = { name: 'kim', score: [1,2] };
var o2 = Object.assign({}, o1);

o2.score.push(3);

console.log(o1, o2, o1 === o2, o1.score === o2.score);

var o3 = { name: 'kim', score: [1,2] };
var o4 = Object.assign({}, o3);

o4.score = o3.score.concat();
o4.score.push(3);

console.log(o3, o4, o3 === o4, o3.score === o4.score);