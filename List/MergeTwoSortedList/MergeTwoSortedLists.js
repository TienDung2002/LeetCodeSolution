/* Đề bài: Cho 2 danh sách liên kết đơn, sắp xếp và gộp chúng, 
trả về 1 danh sách liên kết đơn đã được gộp và sắp xếp

Example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:
Input: list1 = [], list2 = []
Output: []

Example 3:
Input: list1 = [], list2 = [0]
Output: [0]
*/


// Sử dụng đệ quy, độ phức tạp O(m+n)
// function ListNode(val, next) {
//     this.val = (val === undefined ? 0 : val)
//     this.next = (next === undefined ? null : next)
// }
// var mergeTwoLists = function (l1, l2) {
//     if (!l1) return l2;
//     else if (!l2) return l1;
//     else if (l1.val <= l2.val) {
//         l1.next = mergeTwoLists(l1.next, l2);
//         return l1;
//     } else {
//         l2.next = mergeTwoLists(l1, l2.next);
//         return l2
//     }
// };



// Sử dụng cách khác, độ phức tạp O(m+n)
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
var mergeTwoLists = function (list1, list2) {
    // Nếu 1 trong 2 list là null thì trả về list còn lại
    if (!list1) return list2
    else if (!list2) return list1
    else {
        // Khởi tạo node đầu mới
        let head = new ListNode()
        // Node hiện tại để thêm các node sau (đây sẽ là 1 danh sách mới)
        let current = head

        while (list1 !== null && list2 !== null) {
            if (list1.val <= list2.val) {
                // gán giá trị hiện tại của con trỏ trên list1 vào node tiếp theo của current
                current.next = list1
                // Di chuyển list1 lên 1 node
                list1 = list1.next
            } else {
                // Logic tương tự
                current.next = list2
                list2 = list2.next
            }
            // Mỗi lần gán giá trị xong (logic trong if) current sẽ di chuyển lên node tiếp theo để gán giá trị tiếp
            // Cứ tưởng tượng giống như mở thêm không gian để thêm 1 số mới trong mảng vậy
            current = current.next
        }
        // Nối danh sách còn lại vào current (các giá trị chưa được xét đến vẫn phải nổi vào trong current)
        // Nếu list 1 còn phần tử thì nối phần còn lại vào current.next
        if (list1) current.next = list1;
        // Tương tự logic
        if (list2) current.next = list2;

        // Trả về danh sách sau khi ghép
        return head.next
    }
}


// Run
var list1 = new ListNode(1)
list1.next = new ListNode(2)
list1.next.next = new ListNode(4)

var list2 = new ListNode(1)
list2.next = new ListNode(3)
list2.next.next = new ListNode(4)

let resultArr = []
let value = mergeTwoLists(list1, list2)
while (value) {
    resultArr.push(value.val)
    value = value.next
}
console.log(resultArr);