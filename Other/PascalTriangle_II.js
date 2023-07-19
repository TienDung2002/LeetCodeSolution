/* Đề bài: cho số nguyên rowIndex, trả về số hàng = rowIndex trong tam giác pascal

        1
       1 1
      1 2 1
     1 3 3 1
    1 4 6 4 1

Example 1:
Input: rowIndex = 3
Output: [1,3,3,1]

Example 2:
Input: rowIndex = 0
Output: [1]

Example 3:
Input: rowIndex = 1
Output: [1,1]
 
Ràng buộc:
0 <= rowIndex <= 33
*/

var getRow = function (rowIndex) {
    if (rowIndex === 0) return [1]

    // Khởi tạo biến chứa tam giác pascal chứa hàng đầu tiên của tam giác
    var triangle = [[1]];

    // Tạo các hàng tiếp theo
    for (let i = 1; i <= rowIndex; i++) {
        // Biến lưu trữ cả hàng đằng trước 
        var prevRow = triangle[i - 1]

        // Biến lưu trữ hàng hiện tại
        var curRow = [1]

        for (let j = 1; j < i; j++) {
            curRow.push(prevRow[j - 1] + prevRow[j])
        }

        // Nhét 1 vào cuối biến lưu trữ hàng hiện tại
        curRow.push(1)

        // Nhét hàng hiện tại vào biến chứa tam giác pascal
        triangle.push(curRow)
    }
    return triangle[triangle.length - 1]
}

console.log(getRow(0));