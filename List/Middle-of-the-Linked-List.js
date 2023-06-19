/* Đề bài: input là dãy số ds liên kết đơn, hãy trả về nút giữa của danh sách được liên kết. 
Nếu có hai nút ở giữa, hãy trả lại nút ở giữa thứ hai.*/

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? 0 : next)
}
var middleNode = function (head) {
    // Khởi tạo 2 con trỏ đều bắt đầu hơn giá trị đầu tiên
    let fast = head, slow = head

    // Đk while: fast và fast.next khác null
    while(fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }
    return slow
}

// Run
var test = new ListNode(1);
test.next = new ListNode(2);
test.next.next = new ListNode(3);
test.next.next.next = new ListNode(4);
test.next.next.next.next = new ListNode(5);
test.next.next.next.next.next = new ListNode(6);

console.log(middleNode(test)); // nút giữa: 4

// Lưu ý: với TH DSLK là số chẵn như trên 1, 2, 3, 4, 5, 6 thì các con trỏ sẽ đi theo thứ tự
// => fast: 1, 3, 5, null (số 7 k có nên sẽ trỏ vào null) => Tổng 4 bước
// fast gấp đôi tốc độ của slow nên slow lúc này đang trỏ vào 3,5 chứ kp phải 3
// => slow: 1, 2, 3, 3,5
// Nên nếu DSLK chẵn thì sẽ trả về nút giữa thứ 2 mang giá trị 4