/* Đề bài: nhập 1 só nguyên, trả về true nếu nó là số dối xứng, false nếu ngược lại

Example 1:
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. 
Therefore it is not a palindrome.
*/


// Độ phức tạp O(n), n là số kí tự input nhập vào
var isPalindrome = function(x) {
    // Biến lưu trữ số đảo ngược của x
    let revert = 0
    // Biến sao chép giá trị ban đầu của x
    let copy = x

    while (copy > 0) {
        // Lấy phần dư khi chia copy cho 10
        const surplus = copy % 10
        // Cộng số dư vào biến đảo ngược (tăng giá trị revert lên 1 chữ số)
        revert = revert * 10 + surplus
        // Di chuyển sang số tiếp theo
        copy = Math.floor(copy / 10)
    }
    // So sánh số đảo ngược với x ban đầu để kiểm tra số Palindrome
    return revert == x
};

console.log(isPalindrome(515));

/* Work flow:
Ví dụ x = 123
    // Vòng while 1
    surplus = 123 % 10 = 3 (dư 3)
    revert = 0 * 10 + 3 = 3
    copy = 123 / 10 = 12

    // Vòng while 2
    surplus = 12 % 10 = 2 (dư 2)
    revert = 3 * 10 + 2 = 32
    copy = 12 / 10 = 1

    // Vòng while 3
    surplus = 1 % 10 = 1 (dư 1)
    revert = 32 * 10 + 1 = 321
    copy = 1 / 10 = 0

    so sánh revert = 321 và giá trị ban đầu x = 123
    return true/false (boolean)
*/