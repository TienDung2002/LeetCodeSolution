/* Đề bài: Cho một mảng có kích thước n, trả về phần tử xuất hiện trong đa số (ptử xuất hiện nhiều nhất).
Phần tử đa số là phần tử xuất hiện hơn ⌊n/2⌋ lần. Bạn có thể cho rằng phần tử đa số luôn tồn tại trong mảng.


Example 1:
Input: nums = [3,2,3]
Output: 3

Example 2:
Input: nums = [2,2,1,1,1,2,2]
Output: 2
 
Hạn chế:
n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109

*/

// Áp dụng thuật toán Boyer-Moore Voting, vì ptử xuất hiện nhiều nhất luôn chiếm hơn nửa số lượng phần 
// tử trong mảng (vì majority element xuất hiện nhiều hơn n/2 lần)
var majorityElement = function(nums) {
    let count = 1
    // Biến candidate sau cùng sẽ chứa phần tử xuất hiện nhiều nhất, gán giá trị đàu tiên cho candidate
    let candidate = nums[0]

    // Bắt đầu lặp từ giá trị thứ 2 đổ đi
    for (let i = 1; i < nums.length; i++) {
        if (count === 0) {
            // Nếu count đang = 0 thì gán phần tử hiện tại cho candidate và tăng count lên 1
            candidate = nums[i]
            count = 1
        } else if (nums[i] === candidate) {
            // Nếu phần tử hiện tại bằng candidate thì tiếp tục tăng count lên 1
            count++
        } else {
            // Phần tử hiện tại khác candidate thì giảm count đi 1
            count--
        }
    }
    return candidate
}

var nums = [6,5,5]
console.log(majorityElement(nums));