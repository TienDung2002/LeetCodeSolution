/* Đề bài: cho một chuỗi columnTitle đại diện cho cột tiêu đề trong Excel, trả về số cột tương ứng của nó
For example:

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...
 

Example 1:
Input: columnTitle = "A"
Output: 1

Example 2:
Input: columnTitle = "AB"
Output: 28

Example 3:
Input: columnTitle = "ZY"
Output: 701

Hạn chế: 
1 <= columnTitle.length <= 7
columnTitle chỉ bao gồm những chữ cái tiếng anh viết hoa.
columnTitle chứa giá trị trong khoảng ["A", "FXSHRXW"].
*/

// Cách 1:
// var titleToNumber = function(columnTitle) {
//     let index = 0; // Biến lưu vị trí đang xét trong chuỗi columnTitle
//     let totalCharCode = 0; // Biến lưu tổng giá trị charCode tương ứng của chuỗi

//     // Bắt đầu vòng lặp while, kiểm tra nếu index nhỏ hơn độ dài của columnTitle, tiếp tục vòng lặp
//     while (index < columnTitle.length) {
//         // Tính toán giá trị số tương ứng của các ký tự trong chuỗi columnTitle
//         // totalCharCode * 26: Dịch chuyển giá trị hiện tại lên một chữ số (tương ứng với việc nhân với 26)
//         // columnTitle.charCodeAt(index) - 65 + 1: Lấy mã ASCII của ký tự tại vị trí index và trừ đi 65 để tính giá trị của ký tự từ 'A' (ví dụ: 'A' - 'A' + 1 = 1, 'B' - 'A' + 1 = 2, ...)
//         // Tổng hai phần trên chính là giá trị số tương ứng của ký tự tại vị trí index trong chuỗi columnTitle
//         totalCharCode = totalCharCode * 26 + (columnTitle.charCodeAt(index) - 65 + 1)

//         index++; // Tăng index lên 1 để xét đến ký tự tiếp theo trong chuỗi columnTitle
//     }

//     return totalCharCode; // Trả về giá trị số tương ứng của chuỗi columnTitle
// };



// Cách 2: 
var titleToNumber = function(columnTitle) {
    let totalCharCode = 0;

    for (let i = 0; i < columnTitle.length; i++) {
        totalCharCode = totalCharCode * 26 + (columnTitle.charCodeAt(i) - 64);
    }

    return totalCharCode;
};


console.log(titleToNumber('ZY'));