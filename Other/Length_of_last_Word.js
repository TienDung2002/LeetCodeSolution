/* Đề bài: Cho một chuỗi sbao gồm các từ và dấu cách, hãy trả về độ dài của từ cuối cùng trong chuỗi.

Example 1:
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.

Example 2:
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

Example 3:
Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
*/

var lengthOfLastWord = function(s) {
    let count = 0
    // Khai báo biến mang độ dài của chuỗi "s"
    let lengthOfStr = s.length - 1

    // Xóa kí tự trắng cuối chuỗi "s"
    while(lengthOfStr >= 0 && s[lengthOfStr] === ' ') {
        // Mỗi lần tìm thấy kí tự trắng thì giảm length đi
        lengthOfStr--
    }

    // Đếm số kí tự của từ cuối, gặp khoảng trắng đầu tiên từ cuối lên thì kết thúc đếm 
    while(lengthOfStr >= 0 && s[lengthOfStr] !== ' ') {
        // mỗi kí tự không phải khoảng trắng thì tăng count lên 1 đơn vị
        count++
        // Mỗi lần đếm dc 1 kí tự thì giảm độ dài đi 1 đơn vị
        lengthOfStr--
    }
    return count
};



// var s = "   fly me   to   the moon  "
var s = "a"
console.log(lengthOfLastWord(s))