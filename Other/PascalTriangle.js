/* Đề bài: cho 1 số hàng của tam giác pascal numRows, trả về tam giác pascal

Example 1:
Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

Example 2:
Input: numRows = 1
Output: [[1]]
 
Constraints:
1 <= numRows <= 30
*/

var generate = function (numRows) {
    if (numRows === 0) return []

    /* Khởi tạo mảng triangle, hàng đầu tiên chỉ chứa số 1
    triangle là mảng chứa nhiều mảng con là các hàng (hiểu đơn giản là chứa tất cả hàng của tam giác) */
    var triangle = [[1]]

    // Tạo ra các hàng tiếp theo của tam giác
    for (let i = 1; i < numRows; i++) {
        // Khởi tạo prevRow để lưu hàng đằng trước đó
        var prevRow = triangle[i - 1]

        // Tạo mảng curRow với phần tử đầu tiên là 1 (viền ngoài 2 bên tam giác pascal luôn là 1)
        var curRow = [1]

        // Với các phần tử ở giữa trong cùng 1 hàng (các phần tử trong cùng 1 hàng)
        for (let j = 1; j < i ; j++) {
            curRow.push(prevRow[j - 1] + prevRow[j])
        }

        // Phần tử cuối cùng phải là 1
        curRow.push(1)

        // Đẩy hàng vào trong tam giác
        triangle.push(curRow)
    }
    return triangle
}

console.log(generate(5));

