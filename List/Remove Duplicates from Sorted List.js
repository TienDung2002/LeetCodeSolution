/* Đề bài: Cho 1 dãy danh sách lkđ đã sắp xếp, loại bỏ tất cả các giá trị trùng lặp và trả về ds lkđ không
có giá trị trùng lặp và vẫn được sắp xếp

Example 1:
Input: head = [1,1,2]
Output: [1,2]

Example 2:
Input: head = [1,1,2,3,3]
Output: [1,2,3]
 
Ràng buộc:
- Các phần tử trong nodes nằm trong khoảng [0, 300].
- Giá trị của các phần tử trong node nằm trong khoảng 100 <= Node.val <= 100
- Danh sách dc đảm bảo sắp xếp theo thứ tự tăng dần
*/

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

// var deleteDuplicates = function (head) {
//     // Xử lí danh sách rỗng
//     if (!head) {
//         return head
//     } else {
//         let current = head
//         while (current !== null && current.next !== null) {
//             // Nếu giá trị của current bằng với current.next thì nhảy current.next thêm 1 đơn vị
//             if (current.val === current.next.val) {
//                 current.next = current.next.next
//             } else {
//                 current = current.next
//             }
//         }
//         return head
//     }
// };


// Nâng cao của đoạn code trên, thêm vào là trả về 1 mảng các phần tử
var deleteDuplicates = function (head) {
    if (!head) {
        return head
    } else {
        let current = head, result = [current.val]
        while (current.next) {
            if (current.val !== current.next.val) {
                result.push(current.next.val)
            }
            current = current.next
        }
        return result
    }
};


var head = new ListNode(1)
head.next = new ListNode(1)
head.next.next = new ListNode(2)
head.next.next.next = new ListNode(3)
head.next.next.next.next = new ListNode(3)
console.log(deleteDuplicates(head));