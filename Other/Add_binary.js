/* Đề bài: Cho hai chuỗi nhị phân a và b, trả về tổng của chúng dưới dạng chuỗi nhị phân

Example 1:
Input: a = "11", b = "1"
Output: "100"

Example 2:
Input: a = "1010", b = "1011"
Output: "10101"

Ràng buộc:
1 <= a.length, b.length <= 104
a và b chỉ bao gồm '0' hoặc '1'
Mỗi chuỗi không chứa các số 0 đứng đầu ngoại trừ chính số 0 đó.
*/

var addBinary = function (a, b) {
    let i = a.length - 1
    let j = b.length - 1
    let carry = 0, result = ''

    while (i >= 0 || j >= 0 || carry >= 0) {
        let bitA, bitB
        if (i >= 0) {
            bitA = parseInt(a[i]);
        } else {
            bitA = 0
        }
        if (j >= 0) {
            bitB = parseInt(b[i]);
        } else {
            bitB = 0
        }
        const sum = bitA + bitB + carry

        // Phép chia lấy dư, nó chính là chia số hệ 10 thành số nhị phân (binary)
        result = (sum % 2) + result
        // Phép chia số nguyên để loại bỏ bit cuối cùng của sum
        carry = Math.floor(sum / 2)
        // Dịch sang các bit tiếp theo
        i--
        j--
    }
    return result
}

var a = "1010", b = "1011"
console.log(addBinary(a, b));