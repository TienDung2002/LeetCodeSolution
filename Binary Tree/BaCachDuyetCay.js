function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : val)
    this.right = (right === undefined ? null : right)
}

// Root - trái - phải
function preorderTraversal(root) {
    const result = []

    function traverse(node) {
        if (!node) return
        result.push(node.val)
        result.push(...preorderTraversal(node.left))
        result.push(...preorderTraversal(node.right))
    }
    traverse(root)
    return result
}

// trái - root - phải
function inorderTraversal(root) {
    const result = []

    function traverse(node) {
        if (!node) return
        traverse(node.left)
        result.push(node.val)
        traverse(node.right)
    }
    traverse(root)
    return result
}

// trái - phải - root
function postorderTraversal(root){
    const result = []

    function traverse(node){
        if (!node) return
        traverse(node.left)
        traverse(node.right)
        result.push(node.val)
    }
    traverse(root)
    return result
}


root = {
    val: 1,
    left: null,
    right: {
        val: 2,
        left: null,
        right: {
            val: 3,
            left: null,
            right: null
        }
    }
}

// root = []

// root = {
//     val: 1,
//     left: null,
//     right: null
// }

console.log("Duyệt theo Pre-Order", preorderTraversal(root));
console.log("Duyệt theo In-Order", inorderTraversal(root));
console.log("Duyệt theo Post-Order", postorderTraversal(root));