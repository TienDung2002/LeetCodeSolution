/* Đề bài: Viết thuật toán để xác định nếu 1 số n là "happy". 1 số "happy" là số được định nghĩa như sau:
- Bắt đầu với 1 số nguyên dương bất kỳ, hãy thay số đó bằng tổng bình phương các chữ số của nó
- Lặp lại quá trình cho tới khi số bằng 1 (tại vị trí số đó sẽ ở lại), hoặc số đó sẽ lặp vô hạn trong 1 chu kỳ không bao gồm 1
- Những số mà quá trình này kết thúc bằng 1 là số "happy"
- Trả về true nếu n là 1 số "happy", false nếu ngược lại
 
Example 1:
Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1

Example 2:
Input: n = 2
Output: false

Hạn chế:
1 <= n <= 231 - 1

Link mô tả ý tưởng:
https://www.youtube.com/watch?v=Egw03gI-Tf0&ab_channel=Techdose
*/

var isHappy = function(n) {
    // Ý tưởng là lấy từng số ra tính bình phương lưu vào num, rồi sum sẽ là tổng của các num
    function getNextNumber(num) {
        let sum = 0
        while(num > 0) {
            // Lấy số cuối từ số gốc (lấy từ phải qua trái)
            const soCuoi = num % 10
            // Tính bình phương từng số đã lấy rồi nhét vào sum
            sum += soCuoi * soCuoi
            // Cập nhật lại số gốc (loại bỏ số đã tính ra khỏi số gốc)
            num = Math.floor(num/10)
        }
        return sum
    }
    // Khởi tạo set: trong set sẽ chỉ chứa các giá trị duy nhất.
    const findUniq = new Set()

    // Ktra xem n có khác 1 không (n = 1 thì trả về true) và sum có tồn tại trong set chưa thì trả về như đề bài
    while(n !== 1 && !findUniq.has(n)) {
        findUniq.add(n)
        n = getNextNumber(n)
    }
    // Nếu break khỏi while thì sẽ so sánh với 1 và trả về true hoặc false
    return n === 1

};

console.log(isHappy(2))