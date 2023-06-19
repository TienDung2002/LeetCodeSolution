/* Đề bài: cho 2 chuỗi "needle" và "haystack" trả về vị trí của "needle" đầu tiên xuất hiện trong "haystack",
nếu không "needle" không tồn tại trong "haystack" trả về -1 

Ràng buộc: "haystack" và "needle" dc coi như chỉ xử lí chuỗi không viết hoa
*/

// var strStr = function(haystack, needle) {
//   if (needle === '') {
//     return 0
//   } else {
//     for (let i = 0; i < haystack.length; i++) {
//       if (haystack[i] === needle[0]) {
//         let j = 0
//         while (j < needle.length && haystack[i + j] === needle[j]) {
//           j++
//         }
//         if (j === needle.length) return i
//       }
//     }
//     return -1
//   }
// };





var strStr = function(haystack, needle) {
    if (needle === '') return 0; // Nếu `needle` là chuỗi rỗng, trả về 0

    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) { // Tìm điểm bắt đầu tiềm năng
            let j = 0;
            while (j < needle.length && haystack[i+j] === needle[j]) {
                j++;
            }
            if (j === needle.length) { // Tìm thấy khớp
                return i;
            }
        }
    }

    return -1; // `needle` không xuất hiện trong `haystack`
};
var haystack = 'sadbutsad', needle = 'sad'
console.log(strStr(haystack, needle));
