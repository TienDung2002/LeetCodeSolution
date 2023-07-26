/* Đề bài: cho một số nguyên columnNumber, trả về tiêu đề cột tương ứng khi nó xuất hiện trong 1 trang
tính excel
Ví dụ:
A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...

Example 1:
Input: columnNumber = 1
Output: "A"

Example 2:
Input: columnNumber = 28
Output: "AB"

Example 3:
Input: columnNumber = 701
Output: "ZY"
 
Hạn chế:
1 <= columnNumber <= 231 - 1
*/

var convertToTitle = function (columnNumber) {
    let title = ''

    while (columnNumber > 0) {
        // Tính phần dư sau khi chia cho 26 (vì ta chuyển dần từ bên trái sang phải)
        // columnNumber - 1 vì nếu không đem cộng vào mã ASCII thì bị lệch 1 đơn vị (65 là 'A')
        const phanDu = (columnNumber - 1) % 26

        // Trong bảng mã ASCII 65 là mã unicode của 'A'
        let letter = String.fromCharCode(phanDu + 65)

        // Cộng dồn các chữ cái vừa tính được vào biến title
        title = letter + title

        // Cập nhật lại columnNumber xem đã đủ điều kiện để break khỏi while chưa
        columnNumber = Math.floor((columnNumber - 1) / 26)
    }

    return title
};

console.log(convertToTitle(701));