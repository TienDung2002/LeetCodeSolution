/* Đề bài: cho 1 dãy 'nums' chứa các phần tử đã được sắp xếp theo thứ tự tăng dần, chuyển
các phần tử đó thành cây nhị phân cân bằng

Example 1:
Input: nums = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
            0
          /   \ 
        -3     9
        /     /
     -10     5
Explanation: [0,-10,5,null,-3,null,9] cũng được chấp nhận:
            0
          /   \ 
        -10    5
          \     \
          -3     9


Example 2:
Input: nums = [1,3]
Output: [3,1]
    3       1
   /         \
  1           3
Explanation: [1,null,3] and [3,1] đều là cây cân bằng chiều cao.

Ràng buộc:
1 <= nums.length <= 104
-104 <= nums[i] <= 104
'nums' đã được sắp xếp theo thứ tự tăng dần
*/


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var sortedArrayToBST = function (nums) {
    function constructBTS(start, end) {
        // Lưu ý: ví dụ arr = [4, 5, 9] thì chỉ lần lượt là 0, 1, 2
        // Nếu chỉ số đầu tiên > chỉ số cuối thì trả về null để chỉ 1 cây rỗng
        if (start > end) return null

        // Tính chỉ số giữa
        const middle = Math.floor((start + end) / 2)

        // Tạo nút mới với nums[middle] làm gốc
        const root = new TreeNode(nums[middle])

        // Đệ quy xây cây con trái và phải
        root.left = constructBTS(start, middle - 1) // end == middle - 1
        root.right = constructBTS(middle + 1, end)  // start == middle + 1

        // Sau khi xây hoàn thiện cả cây con trái và phải trả về nút gốc
        return root
    }
    // Gọi hàm và trả về kết quả
    return constructBTS(0, nums.length - 1)
}

const nums = [-10,-3,0,5,9]
// const nums = [1, 3]
console.log(sortedArrayToBST(nums));


/* Logic hoạt động:
1) Gọi hàm sortedArrayToBST(nums) với nums = [-10, -3, 0, 5, 9].
2) Tại lần gọi đầu tiên, start = 0, end = 4. Vì start <= end, nên tiếp tục thực hiện.
3) Tính toán middle = (start + end) / 2 = (0 + 4) / 2 = 2.
4) Tạo một nút mới với giá trị là nums[middle] = nums[2] = 0. Nút này sẽ trở thành gốc của cây con hiện tại.
5) Tiếp tục gọi đệ quy với hai cây con trái và phải của nút gốc:
    Gọi constructBTS(start, middle - 1) với start = 0, end = middle - 1 = 2 - 1 = 1 (cây con trái).
    Gọi constructBTS(start, middle + 1) với start = 3, end = middle + 1 = 3 + 1 = 4 (cây con phải).
6) Trong cây con trái:
    - Tại lần gọi đầu tiên, start = 0, end = 1. Vì start <= end, tiếp tục thực hiện.
    - Tính toán middle = (start + end) / 2 = (0 + 1) / 2 = 0.
    - Tạo nút mới với giá trị nums[middle] = nums[0] = -10. Nút này trở thành gốc của cây con trái.
    - Tiếp tục gọi đệ quy cho cây con trái và cây con phải, nhưng do start > end, cây con trái trở thành một cây con trống (null).
7) Trong cây con phải:
    - Tại lần gọi đầu tiên, start = 3, end = 4. Vì start <= end, tiếp tục thực hiện.
    - Tính toán middle = (start + end) / 2 = (3 + 4) / 2 = 3.
    - Tạo nút mới với giá trị nums[middle] = nums[3] = 5. Nút này trở thành gốc của cây con phải.
    - Tiếp tục gọi đệ quy cho cây con trái và cây con phải, nhưng do start > end, cây con phải trở thành một cây con trống (null).
8) Quá trình đệ quy kết thúc và trả về cây BST hoàn chỉnh
*/