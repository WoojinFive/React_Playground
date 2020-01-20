var o1 = {name: 'kim', score: [1,2]};
Object.freeze(o1);
o1.name = 'lee';
o1.city = 'seoul'; // not be added
o1.score.push(3); // can be added. array stored in other meemory space
Object.freeze(o1.score);
o1.score.push(4); // not be added. error
console.log(o1);