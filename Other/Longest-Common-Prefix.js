/* Đề bài: Viết hàm tìm chuỗi tiền tố chung dài nhất trong một mảng các chuỗi. 
Nếu không có tiền tố chung, hãy trả về một chuỗi trống "" */

// Độ phức tạp O (n * m), , n là số lượng chuỗi trong mảng strs, m là độ dài của chuỗi ngắn nhất trong strs
// Mục đích của thuật toán là với mỗi kí tự trùng khớp thì thêm vào prefix kí tự đó, cuối cùng trả về prefix
// var longestCommonPrefix = function (strs) {
//     if (!strs.length) {
//         return ''
//     } else {
//         let prefix = ''
//         for (let i = 0; i < strs[0].length; i++) {
//             let char = strs[0][i]
//             for (let j = 1; j < strs.length; j++) {
//                 if (strs[j][i] != char) {
//                     return prefix
//                 }
//             }
//             prefix += char
//         }
//         return prefix
//     }
// }




// Độ phức tạp O(n), n là các phần tử trong strs
var longestCommonPrefix = function (strs) {
    // Check nếu strs rỗng thì trả về chuỗi rỗng
    if (strs.length === 0) {
        return '';
    } else {
        // Khởi tạo prefix chứa giá trị đầu tiên của strs, (prefix = 'flower')
        let prefix = strs[0];
        for (let i = 1; i < strs.length; i++) {
            /* Ở lần chạy đầu tiên, prefix với giá trị 'flower' while sẽ tìm xem có 'flower' trong tất cả
            các giá trị của strs hay không*/
            while (strs[i].indexOf(prefix) !== 0) {
            /*  - Nếu không tìm thấy, indexOf trả về false, prefix sẽ bị cắt bớt 1 kí tự cuối
                - Lúc này prefix = 'flowe' và tiếp tục cắt dần tới khi toàn bộ trùng kí tự */
                prefix = prefix.substring(0, prefix.length - 1);

                // Nếu tất cả các kí tự không tìm thấy thì sẽ bị cắt hết, lúc này trả về chuỗi rỗng
                if (prefix === '') {
                    return 'Empty string';
                }
            }
        }
        return prefix;
    }
};
strs = ["flower", "flow", "flight"]
// strs = ["dog","racecar","car"]
console.log(longestCommonPrefix(strs));