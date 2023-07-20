/* Đề bài: cho 1 chuỗi s, sau khi chuyển tất cả các kí tự viết hoa xuống viết thường và loại bỏ tất cả các kí tự không
phải chữ hoặc số, nó sẽ đọc xuôi ngược như nhau, trả về true nếu đúng như vậy hoặc false nếu ngược lại

Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 
Constraints:
1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.

*/

// Cách 1:
var isPalindrome = function(s) {
    /*
    Trong biểu thức chính quy (regular expression), các cờ (flags) thường được sử dụng:
        g: Cờ global, sử dụng để tìm kiếm tất cả các kết quả phù hợp trong chuỗi thay vì chỉ tìm kiếm kết quả đầu tiên.
        i: Cờ không phân biệt chữ hoa/chữ thường, sử dụng để không phân biệt chữ hoa/chữ thường khi tìm kiếm.
        m: Cờ multi-line, sử dụng để khớp với dòng mới (\n) trong chuỗi.
    */
    // Đổi sang kí tự thường, bỏ các kí tự ngoại lệ
    s = s.toLowerCase().replace(/[^a-z0-9]/gi,'');

    // Sử dụng vòng lặp có 2 biến i: chạy từ đầu chuỗi, j: chạy từ cuối chuỗi và so sánh i với j
    for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
        if (s.charAt(i) !== s.charAt(j)) return false
    }
    return true
};

// Cách 2:
// var isPalindrome = function(s) {
//     let newStr = s.replace(/[^a-z0-9]/gi,"").toLowerCase();
//     return newStr.split("").reverse().join("") === newStr ? true : false;
// };

var s = "race a car"
console.log(isPalindrome(s));