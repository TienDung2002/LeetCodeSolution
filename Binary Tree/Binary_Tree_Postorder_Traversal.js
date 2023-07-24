/* Đề bài: cho 1 cây nhị phân, trả về thứ tự của giá trị các nút theo thứ tự post-order

Example 1:
Input: root = [1,null,2,3]
    1
     \
      2
     /
    3
Output: [3,2,1]

Example 2:
Input: root = []
Output: []

Example 3:
Input: root = [1]
Output: [1]

Hạn chế:
Số lượng nút trong cây nằm trong khoảng [0, 100].
-100 <= Giá trị của nút <= 100
*/

// Thứ tự duyệt nút theo post-order là: trái -> phải -> root (gốc)

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var postorderTraversal = function (root) {
    const result = []
    function traverse(node) {
        // Nếu nút hiện tại là null, dừng hàm và không thực hiện thêm lệnh nào khác
        if (!node) return
        // traverse() sẽ tự động đi tới nút cuối cùng bên trái
        traverse(node.left)
        // traverse() sẽ tự động đi tới nút cuối cùng bên phải
        traverse(node.right)
        // Sau khi đi qua trái/phải thì sẽ thêm vào result từng giá trị vừa có được
        result.push(node.val)
    }
    // Khởi động hàm traverse() bắt đầu từ gốc
    traverse(root)
    // Nếu node = [] thì result sẽ không có bất cứ giá trị nào, vì thế trả về mảng rỗng []
    return result
};  

// root = {
//     val: 1,
//     left: null,
//     right: {
//         val: 2,
//         left: null,
//         right: {
//             val: 3,
//             left: null,
//             right: null
//         }
//     }
// }

root = []

// root = {
//     val: 1,
//     left: null,
//     right: null
// }

console.log(postorderTraversal(root));