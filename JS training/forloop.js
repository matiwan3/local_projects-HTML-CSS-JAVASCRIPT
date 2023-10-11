// let txt = "Hello World";
// x = txt.replace("World", "Sun")
// console.log(x)

let i = 0
for(i; i < 10; i++){
    console.log("Kotki")
}

x = 0
my_list = ["1","2","3","5"]
while (x < 3) {
    my_list.pop()
    x++
}
console.log(my_list) // 1

var greeter = "hey hi"; // can be overwritten, initializes as undefined **global**

console.log(greeter)

if (true) {
    let hello = "say Hello instead" // exists only in this block, let can be updated but not re-declared.
    var greeter = "say Hello instead"
}

console.log(greeter)
console.log(hello)