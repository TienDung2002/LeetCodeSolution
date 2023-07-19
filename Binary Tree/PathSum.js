/* Đề bài: Cho 1 cây nhị phân và 1 số nguyên targetSum, trả về true nếu cây có đường đi từ root đến lá mà
tổng của các giá trị nút trên đường đi bằng với targetSum. Lá là 1 nút không có nút con

Example 1:
Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
Output: true
                    5
                  /  \
                 4    8
                /    / \
               11   13  4
              / \        \
             7   2        1
Explanation: The root-to-leaf path with the target sum is shown (5+4+11+2).


Example 2:
Input: root = [1,2,3], targetSum = 5
Output: false
            1
           / \
          2   3
Explanation: There two root-to-leaf paths in the tree:
(1 --> 2): The sum is 3.
(1 --> 3): The sum is 4.
There is no root-to-leaf path with sum = 5.


Example 3:
Input: root = [], targetSum = 0
Output: false
Explanation: Since the tree is empty, there are no root-to-leaf paths.
*/

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var hasPathSum = function (root, targetSum) {
    // cây rỗng
    if (!root) return false

    // cây có 1 lá
    if (!root.right && !root.left) {
        // Nếu có 1 lá thì so sánh xem có bằng targetSum k rồi trả về kq
        return root.val === targetSum
    }

    /* Gọi đệ quy, kiểm tra cây con trái hoặc phải có đường đi với tổng còn lại 
    (targetNum sau khi trừ đi giá trị nút hiện tại) */
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
}

// Run
const root1 = {
    val: 5,
    left: {
        val: 4,
        left: {
            val: 11,
            left: {
                val: 7,
                left: null,
                right: null
            },
            right: {
                val: 2,
                left: null,
                right: null
            }
        },
        right: null,
    },
    right: {
        val: 8,
        left: {
            val: 13,
            left: null,
            right: null
        },
        right: {
            val: 4,
            left: null,
            right: {
                val: 1,
                left: null,
                right: null
            }
        }
    }
}
const root2 = {
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
const root3 = {}

console.log(hasPathSum(root1, 22));