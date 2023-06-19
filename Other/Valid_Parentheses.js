/* Đề bài: Đưa ra một chuỗi s chỉ chứa các ký tự '(', ')', '{', '}'và '[', ']'hãy xác định 
xem chuỗi đầu vào có hợp lệ hay không.

Một chuỗi đầu vào hợp lệ nếu:
Dấu ngoặc mở phải được đóng bằng cùng một loại dấu ngoặc.
Dấu ngoặc mở phải được đóng theo đúng thứ tự.
Mỗi dấu ngoặc đóng có một dấu ngoặc mở tương ứng cùng loại.

Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false
*/

// Độ phức tạp O(n)
var isValid = function (s) {
    let closeBlanketStack = []
    for (let i = 0; i < s.length; i++) {
        // Nếu dấu mở ngoặc dc tìm thấy, cho nó vào stack
        if (s[i] == '{') {
            closeBlanketStack.push('}')
        } else if (s[i] == '[') {
            closeBlanketStack.push(']')
        } else if (s[i] == '(') {
            closeBlanketStack.push(')')
        } 
        // Nếu vào case này tức: tức là dấu đóng ngoặc không đúng thứ tự hoặc loại
        else if (closeBlanketStack.pop() !== s[i]) {
            return false
        }
    }
    // Nếu trong stack không còn dấu đóng ngoặc thì trả về true, ngược lại false
    return closeBlanketStack.length == 0
}
s = "([])"
console.log(isValid(s));


/* Work flow
- Giá sử cho input s = '(){}'
- Vòng lặp lặp qua s[0] = "(" sẽ đẩy ")" vào closeBlanketStack:
    Lúc này giá trị của closeBlanketStack = [')']
- Khi s[i] = ")" thì sẽ pop giá trị sau cùng trong closeBlanketStack là ")" và so sánh với s[i] = ')'
- Nếu 2 dấu trùng nhau => tức đóng đúng thứ tự và đúng loại => trả về true, sai thì trả về false
- Vậy là xong 2 kí tự đầu tiên trong input "(" ")", tiếp tục thực hiện tương tự tới hết
*/