/* Đề bài: cho 2 cây nhị phân p và q, viết 1 hàm để kiểm tra chúng có giống nhau hay không.
Hai cây được coi là trùng nhau nếu chúng có cùng cấu trúc cây và các nốt có cùng giá trị

Example 1:
Input: p = [1,2,3], q = [1,2,3]
    1           1
   / \        /  \
  2   3      2    3
Output: true

Example 2:
Input: p = [1,2], q = [1,null,2]
    1       1
   /         \
  2           2
Output: false

Example 3:
Input: p = [1,2,1], q = [1,1,2]
   1        1
 /  \     /  \
2    1   1    2
Output: false

Ràng buộc:
Số lượng các node ở cả hai cây nằm trong khoảng [0, 100].
-104 <= Node.val <= 104
*/

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var isSameTree = function (p, q) {
    // Nếu 2 cây đều rỗng 
    if (!p && !q) {
        return true
    }
    // Nếu 1 cây rỗng và 1 cây không rỗng
    else if (!p || !q) {
        return false
    }
    // Nếu 2 cây có giá trị
    else {
        // Nếu nút đầu tiên của 2 cây khác giá trị
        if (p.val !== q.val) {
            return false
        }
        else {
            const leftSame = isSameTree(p.left, q.left)
            const rightSame = isSameTree(p.right, q.right)
            return leftSame && rightSame
        }
    }
}
// p = [1,2,3], q = [1,2,3]
const p = {
    val: 1,
    left: {
        val: 2,
        left: null,
        right: null
    },
    right: {
        val: 3,
        left: null,
        right: null
    }
}
const q = {
    val: 1,
    left: {
        val: 2,
        left: null,
        right: null
    },
    right: {
        val: 3,
        left: null,
        right: null
    }
}

console.log(isSameTree(p, q));