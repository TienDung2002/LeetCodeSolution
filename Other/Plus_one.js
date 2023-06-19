/* Đề bài: cho 1 mảng input "digits" gồm các số, trả về output là kết các số đó + 1 
và ở dạng mảng giống ban đầu.

Ràng buộc input:
1 <= digits.length <= 100
0 <= digits[i] <= 9
digits không chứa số 0 ở đầu.

Example 1:
Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].

Example 2:
Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].

Example 3:
Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].
*/


// Một cách khác tham khảo, độ phức tạp O(n), trong đó n là độ dài của chuỗi digits
// var plusOne = function (digits) {
//     // Duyệt trực tiếp mảng digits từ cuối lên đầu
//     for (var i = digits.length - 1; i >= 0; i--) {
//         // +1 giá trị đầu tiên duyệt được (là giá trị cuối cùng trong mảng digist)
//         digits[i]++;
//         // Nếu gặp số 9 thì biến nó thành số 0
//         if (digits[i] > 9) {
//             digits[i] = 0;
//         } else {
//             return digits;
//         }
//     }
//     // sau khi biến thành số 0 ở trên thì thêm số 1 vào trước nó
//     digits.unshift(1);
//     return digits;
// };

// Độ phức tạp O(n), trong đó n là độ dài của chuỗi digits
var plusOne = function (digits) {
    let newOutput = []
    // Ghép các phần tử trong mảng thành 1 số
    let num = Number(digits.join(''));
    // Cộng thêm 1
    num += 1
    // Chuyển ngược lại thành dạng string để truy cập bằng vòng for bên dưới
    num = num.toString()

    for (let i = 0; i < num.length; i++) {
        // Nếu bằng i = 10 thì sẽ tách thành 1 và 0
        if (num[i] === 10) {
            newOutput.push(1, 0)
        } else {
            // Các trường hợp khác thì thêm vào mảng mới
            newOutput.push(num[i])
        }
    }
    // Trả về mảng mới
    return newOutput
};

var digits = [1, 2, 3]
console.log(plusOne(digits));