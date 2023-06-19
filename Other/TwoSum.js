/* Đề bài: Nhập input là 1 mảng và 1 số target là tổng của 2 số trong mảng, trả về true nếu có 1 cặp số
bất kì trong mảng có tổng = target
// Example
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

var input = [2, 8, 4, 15, 7]

// Độ phức tạp O(n^2)
// var twoSum = function (nums, target) {
//     let numsLength = nums.length
//     let output = []

//     for (let i = 0; i <= numsLength - 1; i++) {
//         for (let j = i + 1; j < numsLength; j++) {
//             if (nums[i] + nums[j] === target) {
//                 output.push(i, j)
//                 return output;
//             }
//         }
//     }
//     return null;
// };


// Độ phức tạp O(n)
var twoSum = function (nums, target) {
    let numsMap = new Map()
    let numsLength = nums.length

    for (let i = 0; i < numsLength; i++) {
        let x = target - nums[i]
        if (numsMap.has(x)) {
            return [numsMap.get(x), i]
        }
        numsMap.set(nums[i], i)
    }
    return null
}


console.log(twoSum(input, 9));


