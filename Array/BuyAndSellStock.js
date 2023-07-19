/* Đề bài: Cho 1 mảng prices trong đó prices[i] là giá của 1 cổ phiếu trong ngày thứ i.
Bạn muốn tối đa hóa lợi nhuận bằng cách chọn 1 ngày để mua cp và chọn 1 ngày khác trong tương lai để bán.
Trả về lợi nhuận tối đa có thể đạt được trong giao dịch, nếu không đạt được bất kỳ lợi nhuận nào, trả về 0

Ví dụ 1:
input: prices = [7,1,5,3,6,4]
output: 5
Giải thích: Mua vào ngày thứ 2 (prices = 1) và bán vào ngày thứ 5 (prices = 6), lợi nhuận = 6-1 = 5.
Lưu ý không được mua ngày 2 và bán ngày 1 vì phải mua trước khi bán.


Ví dụ 2:
input: prices = [7,6,4,3,1]
output: 0
Giải thích: Trong trường hợp này, ngày cuối cùng (prices = 1) và ngày đầu tiên (price = 7) nhưng không có giao dịch 
nào được thực hiện vì không thể bán trước khi mua, lúc này lợi nhuận tối đa = 0.
 
Hạn chế:
1 <= prices.length<= 105
0 <= prices[i] <= 104
*/

var maxProfit = function(prices) {
    let left = 0, right = 1, maxProfit = 0

    while(right < prices.length) {
        // Nếu phần tử left trong mảng nhỏ hơn phần tử right trong mảng
        if (prices[left] < prices[right]){
            let Profit =  prices[right] - prices[left]

            // kiểm tra giá trị maxProfit hiện tại có lớn hơn Profit mới không, nếu có thì cập nhật biến maxProfit
            maxProfit = Math.max(maxProfit, Profit)
        } else {
            // nếu prices[left] > prices[right] thì cập nhật left thành right
            left = right
        }
        right ++
    }
    return maxProfit
};

console.log(maxProfit([7,6,4,3,1]));