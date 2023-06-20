/* Đề bài: Cho 1 cây nhị phân, trả về true nếu nó có độ cao cân bằng

Example 1:
Input: root = [3,9,20,null,null,15,7]
        3
      /   \
     9    20
        /   \
       15    7
Output: true

Example 2:
Input: root = [1,2,2,3,3,null,null,4,4]
            1
          /  \
         2    2
       /  \
      3    3
     / \
    4   4
Output: false

Example 3:
Input: root = []
Output: true

Ràng buộc:
Số các nút ở trong cây nằm trong khoảng [0, 5000].
-104 <= Node.val <= 104
*/

// Chú ý: cây nhị phân cân bằng là khi chênh lệch chiều cao giữa 2 cây con bất kì không được vượt quá 1
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var isBalanced = function (root) {
    function dfs(node) {
        // Cây rỗng dc coi là cân bằng
        if (!node) return 0

        // Tạo biến đo độ cao của cây, +1 mỗi khi đi qua 1 nút
        let left = dfs.left + 1
        let right = dfs.right + 1

        /* Nếu độ cao 2 cây con bất kì vượt quá 1 thì không cân bằng 
        (return Infinity, false, 0 đều dc, tuy nhiên dùng Infinity để giữ nguyên logic và ý nghĩa của hàm này)*/
        if (Math.abs(left - right) > 1) return Infinity

        // Trả về giá trị độ cao cây lớn nhất
        return Math.max(left, right)
    }
    return dfs(root) == Infinity ? false : true
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
// var root = null
console.log(isBalanced(root));