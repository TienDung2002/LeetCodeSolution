/* Đề bài: Cho một số nguyên, trả về số bước để giảm nó về 0. Trong một bước, nếu số hiện tại là số chẵn, 
bạn phải chia nó cho 2, nếu không, bạn phải trừ đi 1 từ nó.

Example 1:
Input: num = 14
Output: 6
Explanation: 
    Step 1) 14 is even; divide by 2 and obtain 7. 
    Step 2) 7 is odd; subtract 1 and obtain 6.
    Step 3) 6 is even; divide by 2 and obtain 3. 
    Step 4) 3 is odd; subtract 1 and obtain 2. 
    Step 5) 2 is even; divide by 2 and obtain 1. 
    Step 6) 1 is odd; subtract 1 and obtain 0.

*/

// Độ phức tạp O(log n)
var numberOfSteps = function(num) {
    let count = 0
    while(num > 0) {
        if (num % 2 === 0) {
            num /= 2
        } else {
            num -= 1
        }
        count++
    }
    return count
};

console.log(numberOfSteps(8));