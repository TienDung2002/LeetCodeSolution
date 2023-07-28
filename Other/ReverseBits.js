/* Đề bài: đảo ngược các bit của một số nguyên không dấu 32 bit đã cho.

Lưu ý: trong một số ngôn ngữ, chẳng hạn như Java, không có kiểu số nguyên không dấu. Trong trường hợp này, 
cả đầu vào và đầu ra sẽ được cung cấp dưới dạng kiểu số nguyên có dấu. Chúng sẽ không ảnh hưởng đến việc 
triển khai của bạn, vì biểu diễn nhị phân bên trong của số nguyên là như nhau, cho dù nó có dấu hay không dấu.
Trong Java, trình biên dịch biểu thị các số nguyên đã ký bằng cách sử dụng ký hiệu bổ sung của 2. Do đó, 
trong Ví dụ 2 ở trên, đầu vào biểu thị số nguyên có dấu -3 và đầu ra biểu thị số nguyên có dấu -1073741825.

Example 1:
Input: n = 0000 0010 1001 0100 0001 1110 1001 1100
Output:    964176192 (0011 1001 0111 1000 0010 1001 0100 0000)
Giải thích: Đầu ra 0000 0010 1001 0100 0001 1110 1001 1100 biểu thị số nguyên không dấu 43261596, 
vì vậy trả về 964176192 với biểu diễn nhị phân của nó là 0011 1001 0111 1000 0010 1001 0100 0000.


Example 2:
Input: n = 1111 1111 1111 1111 1111 1111 1111 1101 (không viết cách, tự viết để hiểu thôi)
Output:   3 221 225 471 (1011 1111 1111 1111 1111 1111 1111 1111)
Giải thích: Đầu ra 111 1111 1111 1111 1111 1111 1111 1101 biểu thị số nguyên không dấu 4294967293, 
vì vậy trả về 3221225471 với biểu diễn nhị phân của nó là 1011 1111 1111 1111 1111 1111 1111 1111.


Hạn chế:
Đầu vào phải là chuỗi nhị phân có độ dài 32
*/

// Cách 1: Không dùng bitwise
// var reverseBits = function(n) {
//     // Chuyển số nguyên n sang chuỗi nhị phân
//     let binaryStr = n.toString(2)
//     // Đảo ngược
//     let reverseBinary = binaryStr.split("").reverse().join("")
//     // Thêm kí tự 0 cho đủ 32 bit
//     reverseBinary = reverseBinary.padEnd(32, '0')
//     // Chuyển chuỗi nhị phân đã đảo thành số nguyên (hệ 10)
//     return Number.parseInt(reverseBinary, 2)
// };


// Cách 2: Dùng bitwise, ý tưởng là duyệt qua từng bit và đảo ngược chúng 1 cách tuần tự
var reverseBits = function(n) {
    var result = 0;
    var count = 32;
  
    while (count--) {
      result *= 2;
      result += n & 1;
      n = n >> 1;
    }
    return result;
  };

// var n = 0b00000010100101000001111010011100
var n = 0b11111111111111111111111111111101
console.log(reverseBits(n));
