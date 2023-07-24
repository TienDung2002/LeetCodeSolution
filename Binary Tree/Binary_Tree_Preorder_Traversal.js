/* Đề bài: cho 1 cây nhị phân, trả về thứ tự của giá trị các nút theo thứ tự pre-order

Example 1:
Input: root = [1,null,2,3]
    1
     \
      2
     /
    3
Output: [1,2,3]

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

// Thứ tự duyệt pre-order: root(gốc) -> trái -> phải

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// Phương pháp tiếp cận lặp(iterative approach) sẽ cho hiệu suất tốt hơn đệ quy bên dưới 
// var preorderTraversal = function (root) {
//     // Trường hợp cây rỗng, trả về một mảng rỗng
//     if (!root) return []; 

//     // Mảng kết quả chứa giá trị các nút duyệt theo thứ tự "preorder"
//     const result = []; 
//     // Ngăn xếp dùng để theo dõi các nút cần duyệt
//     const stack = []; 
//     // Bắt đầu từ nút gốc
//     let currentNode = root; 

//     while (currentNode || stack.length > 0) {
//         // Duyệt từng nút một theo thứ tự "preorder"
//         // Lặp cho tới khi không còn nút nào để duyệt
//         while (currentNode) {
//             // Duyệt nút gốc trước và thêm giá trị vào mảng kết quả
//             result.push(currentNode.val); 
//             // Đẩy nút gốc vào stack
//             stack.push(currentNode); 
//             // Di chuyển đến nút con bên trái
//             currentNode = currentNode.left; 
//         }

//         // Lấy một nút từ stack để duyệt cây con bên phải
//         currentNode = stack.pop(); 
//         // Di chuyển đến nút con bên phải
//         currentNode = currentNode.right; 
//     }
    
//     // Trả về mảng kết quả chứa giá trị các nút theo thứ tự "preorder"
//     return result; 
// };


var preorderTraversal = function (root) {
    // Cây rỗng
    if (!root) return []

    // Cây nhiều phần tử (1 phần tử cũng đã được bao hàm)
    const result = []
    result.push(root.val)
    result.push(...preorderTraversal(root.left))
    result.push(...preorderTraversal(root.right))

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

// root = []

root = {
    val: 1,
    left: null,
    right: null
}

console.log(preorderTraversal(root));