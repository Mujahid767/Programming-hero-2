const set=new Set();
set.add("apple");
set.add("banana");
set.add("mango");
set.add("lichi");
console.log(set);
console.log(set.size);
//unique elements all


//converting set to array
const test= Array.from(set);
console.log("test",test);
test.push(3)
console.log(set.has("tomato"));
set.delete("banana");
//converting array to set
const arr=[3,4,6,4,3,1,255];
const set2=new Set(arr);
console.log(set2);
set.forEach((value)=>console.log(value));
//for each does not return anything