// Set
const testSet = new Set()
testSet.add(1)
testSet.add(1)
testSet.add('Ba')
testSet.add(true)

console.log(testSet); // output: Set(3) { 1, 'Ba', true }


// Map
const testMap = new Map()
const key1 = { name: "John" };
const key2 = [1, 2, 3];

testMap.set(key1, 'Giá trị liên kết cho một object')
testMap.set(key2, 'Giá trị liên kết cho một array')

// Sử dụng get() để truy cập value
console.log(testMap.get(key1)); // output: Giá trị liên kết cho một object
console.log(testMap.get(key2)); // output: Giá trị liên kết cho một array

for ([key, value] of testMap.entries()) {
    console.log(`${key} - ${value}`);
}
// output: [object Object] - Giá trị liên kết cho một object
//         1,2,3 - Giá trị liên kết cho một array
