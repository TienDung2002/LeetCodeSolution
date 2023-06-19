/* Đề bài: Cho 1 cây gốc nhị phân, trả về thứ tự các giá trị node của nó

Example 1:
Input: root = [1, null, 2, 3]
Output: [1,3,2

Example 2:
Input: root = []
Output: []

Example 3:
Input: root = [1]
Output: [1]

Ràng buộc:
Số nút trong cây nằm trong khoảng [0, 100].
-100 <= Node.val <= 100
*/

// Lưu ý: thứ tự duyệt inorder như sau: trái - nút - phải 

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var inorderTraversal = function(root) {
    const result = []


    function traverse(node) {
        if (node !== null) {
            // Hàm sẽ đệ quy ghé node bên trái tới khi gặp giá trị null
            traverse(node.left)
            // Đẩy giá trị node bên trái vào biến
            result.push(node.val)
            // Tiếp tục ghé node bên phải sau khi đi vào node trái ở trên
            traverse(node.right)
        }
        else {
            return []
        }
    }

    // Bắt đầu đi từ root
    traverse(root)
    return result
};

// const root = {
//     val: 1,
//     left: null,
//     right: {
//         val: 2,
//         left: {
//             val: 3,
//             left: null,
//             right: null
//         },
//         right: null
//     }
// };

// var root = null

// var root = {
//     val: 1,
//     left: null,
//     right: null
// }

var root = {
    val: 1,
    left: null,
    right: {
        val: 2,
        left: {
            val: 3,
            left: {
                val: 4,
                left: null,
                right: null
            },
            right: null
        },
        right: null
    }
}

console.log(inorderTraversal(root));


/*
Giải thích thứ tự duyệt:
    1
     \
      2
     /
    3

    Duyệt tuân theo thứ tự: trải - nút - phải
B1: bắt đầu nút gốc (1)
B2: duyệt cây con trái của nút gốc (1), ở đây nút trái là null
B3: ghé thăm lại nút gốc (1) và thêm giá trị vào result = [1]
B4: bắt đầu duyệt nút phải (2)
    => Xong 1 chu kì duyệt: trái - nút - phải

B5: duyệt tiếp nút trái của nút (2)
B6: tìm thấy nút trái = 3, thêm giá trị vào result = [1, 3]
B7: quay về nút (2), thêm giá trị vào result = [1, 3, 2]
*/