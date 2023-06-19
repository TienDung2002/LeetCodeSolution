/* Đề bài: Đưa ra một mảng đã sắp xếp gồm các số nguyên riêng biệt và một giá trị target, 
trả về chỉ mục nếu tìm thấy target. Nếu không, hãy trả về vị trí của chỉ mục nếu nó được 
chèn theo thứ tự.

Bạn phải viết một thuật toán có độ phức tạp O(log n)

Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2

Example 2:
Input: nums = [1,3,5,6], target = 2
Output: 1

Example 3:
Input: nums = [1,3,5,6], target = 7
Output: 4

*/

var searchInsert = function (nums, target) {
    if (nums.length === 0) return 0
    else {
        let count = 0
        for (let i = 0; i < nums.length; i++) {
            // Nếu tìm thấy target trong nums, trả về vị trí của nó
            if (nums[i] === target) {
                return i
            }
            // Nếu không tìm thấy target trong nums
            else {
                // Nếu số trước target < target thì count + 1
                if (nums[i] < target) {
                    count += 1
                } else {
                    // Nếu số sau lớn hơn target thì trả về vị trí chèn của target luôn
                    return count
                }
            }
        }
        return count
    }
}


// var searchInsert = function (nums, target) {
//     if (nums.length === 0) {
//         return 0
//     } else {
//         if (nums.includes(target)) {
//             return nums.indexOf(target)
//         } else {
//             nums.push(target)
//             nums.sort((a, b) => a - b)
//             return nums.indexOf(target)
//         }
//     }
// }


var nums = [1, 3, 5, 6], target = 0
console.log(searchInsert(nums, target))