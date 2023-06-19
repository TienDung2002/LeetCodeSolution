/* Đề bài: Nhập số nguyên n, trả về 1 mảng chuỗi trong đó: 
answer[i] == "FizzBuzz" nếu i chia hết cho 3 and 5.
answer[i] == "Fizz" nếu i chia hết cho 3.
answer[i] == "Buzz" nếu i chia hết cho 5.
answer[i] == i (là 1 chuỗi) nếu không trường hợp nào ở trên là đúng.

Example 1:
Input: n = 3
Output: ["1","2","Fizz"]

Example 2:
Input: n = 5
Output: ["1","2","Fizz","4","Buzz"]
*/


// Độ phức tạp O(n), trong đó n là giá trị đầu vào của hàm fizzBuzz
var fizzBuzz = function (n) {
    let newArr = []
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            newArr.push('FizzBuzz');
        } 
        else if (i % 3 === 0) {
            newArr.push('Fizz');
        }
        else if (i % 5 === 0) {
            newArr.push('Buzz');
        }
        else {
            newArr.push(String(i));
        }
    }
    return newArr;
};

console.log(fizzBuzz(15));