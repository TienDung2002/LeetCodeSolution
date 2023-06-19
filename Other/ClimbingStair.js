/* Đề bài: bạn sẽ leo thang mất n bước, mỗi lần có thể leo 1 hoặc 2 bước. Có bao nhiêu cách để có thể leo thang?

Example 1:
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
 
Ràng buộc:
1 <= n <= 45

// Link hướng dẫn: phương pháp lập bảng (bottom-up approach) - keyword: fibonacci
https://www.youtube.com/watch?v=RrFg9SZ8VoM&ab_channel=CodeAndCoffee
*/

var climbStairs = function (n) {
    // Khởi tạo mảng rỗng để lưu giá trị tính toán
    // dynamic programming (dp) (quy hoạch động)
    let dp = []
    // Vì nếu n = 0 || n = 1 thì chỉ có 1 cách duy nhất là leo 1 bước nên đặt 2 giá trị ban đầu như sau:
    dp[0] = 1
    dp[1] = 1
    // Tính các giá trị tiếp theo
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    // Khi out khỏi vòng for là lúc i = n nên ta return dp[n]
    return dp[n]
};
console.log(climbStairs(2));


// Làm với cách dùng while
// var climbStairs = function (n) {
//     let dp = []
//     dp[0] = 1
//     dp[1] = 1
//     let i = 2
//     while (i <= n) {
//         dp[i] = dp[i - 1] + dp[i - 2]
//         i+=1
//     }
//     return dp[n]
// };
// console.log(climbStairs(5));
