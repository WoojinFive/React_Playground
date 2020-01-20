const o1 = {name: 'kim'};
Object.freeze(o1);
const o2 = {name: 'lee'};
// o1 = o2; // error due to const
o1.name = 'park'; // not be changed due to freeze
console.log(o1);