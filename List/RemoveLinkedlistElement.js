/* Đề bài: cho 1 ds lkđ, và 1 số nguyên val. Tìm số nguyên val trong ds lkđ cho trước và 
loại bỏ nó ra khỏi ds lkđ. Trả về ds lkđ mới

Example 1:
Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]

Example 2:
Input: head = [], val = 1
Output: []

Example 3:
Input: head = [7,7,7,7], val = 7
Output: []
 
Hạn chế:
Số nút trong ds lkđ nằm trong khoảng [0, 104].
1 <= Node.val <= 50
0 <= val <= 50

*/

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var removeElements = function (head, val) {
    if (!head) return head

    // Trường hợp ngay nút đầu tiên đã bằng val
    while(head) {
        if (head.val === val) {
            head = head.next
        } else {
            break
        }
    }

    let cur = head
    while(cur && cur.next) {
        // Nếu gặp cur.val === val thì nhảy cóc ra nút đằng sau nút có giá trị = val luôn
        if (cur.next === val) {
            cur.next = cur.next.next
        } 
        // Nếu cur.val !== val thì tiếp tục đi lần lượt nút
        else {
            cur = cur.next
        }
    }
    return head
}

var head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(6)
head.next.next.next = new ListNode(3)
head.next.next.next.next = new ListNode(4)
head.next.next.next.next.next = new ListNode(5)
head.next.next.next.next.next.next = new ListNode(6)
console.log(removeElements(head, 6));