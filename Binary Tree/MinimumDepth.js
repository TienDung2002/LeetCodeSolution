/* Đề bài: Cho 1 cây nhị phân, tìm độ sâu tối thiếu
Độ sâu tối thiểu là số nút dọc theo đường đi ngắn nhất từ nút gốc xuống nút lá gần nhất.
Chú ý: lá là 1 nút không có cây con

Example 1:
Input: root = [3,9,20,null,null,15,7]
        3
      /  \
     9    20
         /  \
        15   7 
Output: 2

Example 2:
Input: root = [2,null,3,null,4,null,5,null,6]
    2
     \
      3
       \
        4
         \
          5
           \
            6
Output: 5
 
Constraints:
The number of nodes in the tree is in the range [0, 105].
-1000 <= Node.val <= 1000
*/

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
var minDepth = function (root) {
    // Cây rỗng => trả về độ cao 0
    if (!root) return 0

    // Cây có 1 nút
    if (root.left == null && root.right == null) return 1

    /* Nếu cây có cây con trái rỗng, trả về cây độ cao cây con phải + 1
    (đếm cả nút gốc) và ngược lại đối với nút phải rỗng*/
    let minL = minDepth(root.left)
    let minR = minDepth(root.right)
    if (root.left == null) return minR + 1
    if (root.right == null) return minL + 1

    return Math.min(minL, minR) + 1
}

var root = {
    val: 3,
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
console.log(minDepth(root));