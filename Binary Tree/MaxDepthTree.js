/*Đề bài: tìm độ sâu lớn nhất của một cây nhị phân dựa trên số lượng nút trên đường 
đi từ nút gốc đến nút lá xa nhất.

Ví dụ 1:
Input: root = [3,9,20,null,null,15,7]
            3
          /  \
        9    20
            /  \
          15    7
Output: 3

Ví dụ 2:
Input: root = [1,null,2]
Output: 2

Ràng buộc:
Số lượng nút trong cây nằm trong khoảng [0, 104].
-100 <= Node.val <= 100
*/

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (val === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var maxDepth = function (root) {
    if (!root) return 0

    // Đệ quy tìm độ sâu lớn nhất của từng cây con bên trái và bên phải
    // Lưu ý: khi gọi đệ quy thì nó sẽ tự gọi lại nó cho tới khi gặp giá trị null
    //             root.left = null hoặc root.right = null
    const leftDepth = maxDepth(root.left)
    const rightDepth = maxDepth(root.right)

    // Trả về độ sâu lớn nhất + thêm 1 (vì tính cả nút hiện tại (đầu tiên))
    // Math.max so sánh xem trong 2 biến biến nào có giá trị lớn nhất thì trả về, sau đó cộng thêm 1
    return Math.max(leftDepth, rightDepth) + 1
}

const root = {
    val:3,
    left: {
        val: 9,
        left: null,
        right: null
    },
    right: {
        val: 20,
        left: {
            val: 15,
            left: null,
            right: null
        },
        right: {
            val: 7,
            left: null,
            right: null
        }
    }
}
console.log(maxDepth(root));