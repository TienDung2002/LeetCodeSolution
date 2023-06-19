/* Đề bài: Cho 1 số nguyên không âm x, trả về căn bậc hai được làm tròn xuống số nguyên gần nhất
và số trả về cũng không âm. Bạn không được sử dụng bất kì hàm hoặc toán tử tích lũy nào
Ví dụ như: pow(x, 0.5) trong C++ hoặc x ** 0,5 trong Python

Example 1:
Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.

Example 2:
Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
*/

var mySqrt = function(x) {
    r = x;
    while (r*r > x)
        r = ((r + x/r) / 2) | 0;
    return r;
};
console.log(mySqrt(256));