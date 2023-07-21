/* Đề bài: cho "head" là một liên kết đơn, xác định rằng liên kết đơn có bất cứ chu trình nào trong đó hay không ?
Có 1 chu trình trong liên kết đơn nếu có 1 số nút trong danh sách có thể được truy cập lại bằng cách liên tục theo con
trỏ tiếp theo. Bên trong, "pos" được dùng để biểu thị vị trí của nút mà con trỏ tiếp theo của đuôi linked list được liên
kết với. 
Lưu ý "pos" không được truyền dưới dạng tham số
Trả về true nếu có 1 chu trình trong liên kết đơn, false nếu ngược lại 

Example 1:
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: Có 1 chu trình trong liên kết đơn, nơi mà đuôi liên kết với nút thứ 1 (0-indexed).
Example 2:


Input: head = [1,2], pos = 0
Output: true
Explanation: TCó 1 chu trình trong liên kết đơn, nơi mà đuôi liên kết với nút thứ 0.


Example 3:
Input: head = [1], pos = -1
Output: false
Explanation: không có chu trình trong liên kết đơn này.
 

Hạn chế:
Số lượng của nút trong liên kết đơn nằm trong khoảng [0, 104].
-105 <= Node.val <= 105
pos is -1 or a valid index in the linked-list.
*/

function ListNode(val) {
    this.val = val;
    this.next = null;
}

/*
Làm rõ vấn đề bài toán: mục đich cuối của bài toán là kiểm tra nút cuối cùng của lkđ có trỏ về null hay không ?
Nếu trỏ về null => tức không có cycle (chu trình), nếu không thì nó sẽ trỏ ngược lại về phần tử khác => có cycle

Sử dụng: 2 con trỏ fast và slow, tưởng tượng như 2 người đang chạy quanh sân vận động, người 1 chạy 200m/s, người 2
chạy 100m/s. Vì người 1 chạy nhanh hơn người 2 nên ở 1 thời điểm nào đó người 1 sẽ gặp người 2. Tương tự với bài toán,
fast đi nhanh hơn slow nên nếu fast gặp đc slow (fast.val == slow.val) thì tức là có chu trình (cycle)

*/
var hasCycle = function (head) {
    let fastP = head
    let slowP = head

    while (fastP && fastP.next) {
        fastP = fastP.next.next
        slowP = slowP.next

        if (fastP === slowP) return true
    }
    return false
};

var head = new ListNode(3)
head.next = new ListNode(2)
head.next.next = new ListNode(0)
head.next.next.next = new ListNode(-4)

// Tạo chu kì bằng cách liên kết nút cuối với nút thứ 1
head.next.next.next.next = head.next;

console.log(hasCycle(head));