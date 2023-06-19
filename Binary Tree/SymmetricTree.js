/* Đề bài: Cho gốc của cây nhị phân, hãy kiểm tra xem nó có phải là bản sao của 
chính nó hay không (nghĩa là đối xứng quanh tâm của nó).

Example 1:
Input: root = [1,2,2,3,4,4,3]
                 1
              / ||  \
            2   ||   2
           / \  ||  / \
          3   4 || 3   4
Output: true

Example 2:
Input: root = [1,2,2,null,3,null,3]
            1
         /     \
        2       2
         \        \
          3        3
Output: false
 
Ràng buộc:
Số các nút ở cả 2 cây nằm trong khoảng [1, 1000].
-100 <= Node.val <= 100
*/


// Hàm này để biến mảng input thành cây, mục đích là để kiểm tra hàm isSymmetric, không cần quan tâm
function arrayToTree(arr) {
    if (arr.length === 0) return null;
    
    const root = new TreeNode(arr[0]);
    const queue = [root];
    let i = 1;

    while (i < arr.length) {
        const node = queue.shift();
        if (arr[i] !== null) {
            node.left = new TreeNode(arr[i]);
            queue.push(node.left);
        }
        i++;
        if (i < arr.length && arr[i] !== null) {
            node.right = new TreeNode(arr[i]);
            queue.push(node.right);
        }
        i++;
    }
    return root;
}




function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var isSymmetric = function (root) {
    // Nếu cây rỗng trả về true
    if (!root) return true
    
    // Hàm kiểm tra tính đối xứng
    function isMirror(left, right) {
        // Nếu left và right là null
        if (!left && !right) return true

        // Nếu chỉ có một trong hai nút left hoặc right là null, hoặc giá trị của chúng khác nhau, trả về false
        if (!left || !right || left.val !== right.val) return false

        // Kiểm tra tính đối xứng tiếp theo cho các cặp nút con
        return isMirror(left.left, right.right) && isMirror(left.right, right.left)
    }

    // Gọi hàm kiểm tra đối xứng cho cây con trái và cây con phải của cây gốc
    return isMirror(root.left, root.right)
};

// const arr = [1, 2, 2, 3, 4, 4, 3];
const arr = [1,2,2,null,3,null,3]
const root = arrayToTree(arr);
console.log(isSymmetric(root));



