/* Đề bài: Viết 1 hàm lấy biểu diễn nhị phân của 1 số nguyên không dấu và trả về số lượng bit '1'
mà nó có (còn được gọi là trọng số Hamming)

Example 1:

Input: n = 00000000000000000000000000001011
Output: 3
Giải thích: Chuỗi đầu vào 00000000000000000000000000001011 có tổng cộng 3 số '1' bits.

Example 2:
Input: n = 00000000000000000000000010000000
Output: 1
Giải thích: Chuỗi đầu vào 00000000000000000000000010000000 có tổng cộng 1 số '1' bit.

Example 3:
Input: n = 11111111111111111111111111111101
Output: 31
Giải thích: Chuỗi đầu vào 11111111111111111111111111111101 có tổng cộng 31 số '1' bits.
 

Hạn chế:
Đầu vào phải là 1 chuỗi nhị phân có độ dài 32.
*/

var hammingWeight = function (n) {
    n = n.toString(2)
    let arr = n.split('')
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '1') count += 1
    }
    return count
}

// var n = 0b00000000000000000000000000001011
// var n = 0b00000000000000000000000010000000
var n = 0b11111111111111111111111111111101
console.log(hammingWeight(n));