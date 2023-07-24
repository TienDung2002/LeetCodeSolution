// 4 cách dùng để gọi "this" trong phương thức hoặc hàm:

/* 
1. Gọi "this" trong 1 đối tượng:
Trong trường hợp dưới, "this" đang tham chiếu tới đối tượng "test"
*/
const test = {
    name: 'Dũng',
    add: function() {
        console.log(this.name);
    }
}

test.add()



/*
2. Gọi "this" trong 1 hàm thông thường: 
"this" sẽ tham chiếu tới đối tượng "global" ("global" trong trình duyệt, 
hoặc đối tượng "global" trong Node.js (global context))
*/
function norFunc() {
    console.log(`This is a function that show name of ${this}`);
}
norFunc(); //This is a function that show name of [object global]



/*
3. Gọi "this" với bind():
"this" lúc này sẽ mang giá trị là tham số truyền vào trong bind()
*/

function thisBind() {
    console.log(`My dog's name is ${this.name}`);
}
const someThing = {
    name: "Bim"
}
const test_1 = thisBind.bind(someThing)
test_1();



/*
4. Gọi "this" với call() và apply()
*/

// const animal = {
//     type: "Dog",
//     legs: 4
// }
// function testCalApp(message) {
//     console.log(`${message}, I've a ${this.type} and it has ${this.legs} legs`);
// }
// testCalApp.call(animal, 'Hello')
// testCalApp.apply(animal, ['Hi'])

const animal = {
    type: "Dog",
    legs: 4
}
function testCalApp() {
    console.log(`I've a ${this.type} and it has ${this.legs} legs`);
}
testCalApp.call(animal)
testCalApp.apply(animal)