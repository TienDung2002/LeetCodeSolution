/* Đề bài: Nhập số la mã để chuyển về số nguyên.
Các kí tự số la mã lớn và giá trị tương đương của nó:
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
Trong đó: 
I có thể được đặt trước V (5) và X (10) để tạo thành 4 và 9.
X có thể được đặt trước L (50) và C (100) để tạo thành 40 và 90.
C có thể được đặt trước D (500) và M (1000) để tạo thành 400 và 900.


Ràng buộc bài toán:
Độ dài input 1 <= s.length <= 15
s chỉ gồm các kí tự ('I', 'V', 'X', 'L', 'C', 'D', 'M').
Đảm bảo rằng s là một số La Mã hợp lệ trong phạm vi [1, 3999].
*/


var romanToInt = function (s) {
    const syms = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let result = 0;
    let sLength = s.length

    if (s.includes('IIV')) {
        throw new Error("Có sự lặp lại ký tự không hợp lệ: 'IIV'");
    } else {
        for (let i = 0; i < sLength; i++) {
            const cur = syms[s[i]]
            const next = syms[s[i + 1]]
    
            if (cur < next) {
                result += next - cur
                i++
            } else {
                result += cur
            }
        }
    }
    return result
};

console.log(romanToInt('MMCMXCIV'));