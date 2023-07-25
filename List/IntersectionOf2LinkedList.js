/* Đề bài: Cho "headA" và "headB", tìm giao điểm của 2 dsach liên kết đơn. Nếu 2 đs lkđ không có giao điểm, 
trả về null
Các test case được thiết kế sao cho không có chu kỳ (cycles) nào trong toàn bộ cấu trúc được liên kết
Ví dụ, hai danh sách sau đây bắt đầu giao nhau tại nút c1:
    A:      a1 -> a2
                    \
                     c1 -> c2 -> c3
                    /
    B: b1 -> b2 -> b3


Đầu vào cho "judge" được đưa ra như sau (chương trình của bạn không được cung cấp những đầu vào này):

intersectVal: Giá trị của nút nơi xảy ra giao nhau. Là bằng 0 nếu không có nút giao nhau.
listA: Danh sách liên kết đầu tiên.
listB: Danh sách liên kết thứ hai.
SkipA: Số lượng nút bỏ qua phía trước trong danh listA (bắt đầu từ phần đầu) để đến nút giao nhau.
SkipB - Số lượng nút bỏ qua phía trước trong danh listB (bắt đầu từ phần đầu) để đến nút giao nhau.
Sau đó, "judge" sẽ tạo cấu trúc được liên kết dựa trên các đầu vào này và chuyển hai phần đầu, phần listA và 
phần listB cho chương trình của bạn. Nếu bạn trả lại chính xác nút giao nhau, thì giải pháp của bạn sẽ được chấp nhận.

Lưu ý: các danh sách được liên kết phải giữ nguyên cấu trúc ban đầu sau khi được hàm trả về



Example 1:
Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
    A:      4 -> 1
                  \
                   8 -> 4 -> 5
                  /
    B: 5 -> 6 -> 1
Output: giao nhau tại '8'
Giải thích: 
    - Giá trị của nút giao nhau là '8' (nếu 2 ds giao nhau thì intersectVal != 0).
    - Từ đầu A đọc là [4, 1, 8, 4, 5]. Có 2 nút trước giao nhau ở A (nút 4 và 1)
    - Từ đầu B đọc là [5 , 6, 1, 8, 4, 5]. Có 3 nút trước giao nhau ở B (nút 5, 6 và 1)
    - Lưu ý các nút giao nhau không phải là '1' vì các nút có giá trị '1' trong listA (nút thứ 2) 
    và listB (nút thứ 3) là các tham chiếu nút khác nhau. Nói cách khác, chúng trỏ đến 2 giá trị 
    khác nhau trong bộ nhớ. Trong khi nút có giá trị '8' trong listA và listB (nút thứ 3 của listA
    và nút thứ 4 của listB) trỏ đến cùng 1 vị trí trong bộ nhớ




Example 2:
Input: intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
    A: 1 -> 9 -> 1
                  \
                   2 -> 4
                  /
    B:           3
Output: giao nhau tại '2'
Giải thích: 
    - Giá trị của nút giao nhau là '2' (nếu 2 ds giao nhau thì intersectVal != 0).
    - Từ đầu A đọc là [1, 9, 1, 2, 4]. Có 3 nút trước giao nhau ở A (nút 1, 9 và 1)
    - Từ đầu B đọc là [3, 2, 4]. Có 1 nút trước giao nhau ở A (nút 3)




Example 3:
Input: intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
    A: 2 -> 6 -> 4
    B:      1 -> 5
Output: Không giao nhau
Giải thích: 
    - Từ đầu A đọc là [2, 6, 4]
    - Từ đầu B đọc là [1, 5]
    - Hai ds không giao nhau nên intersectVal = 0 trong khi skipA và skipB có thể là giá trị tùy ý
    - Hai ds này không giao nhau nên trả về null




Hạn chế:
- Số nút trong listA là m, trong listB là n:
    1 <= m, n <= 3 * 104
    1 <= Node.val <= 105
    0 <= skipA < m
    0 <= skipB < n
- intersectVal = 0 nếu listA và listB không giao nhau
- intersectVal == listA[skipA] == listB[skipB] nếu listA và listB giao nhau.
*/

function ListNode(val) {
    this.val = val
    this.next = null
}
// O(m+n)
var getIntersectionNode = function (headA, headB) {
    let a = headA, b = headB
    
    /* Đk vòng lặp sẽ đảm bảo tìm cho tới khi a và b cùng chỉ tới 1 nút (nút giao)
    hoặc cho tới khi đi hết danh sách vẫn không tìm thấy nút giao (a === null và b === null)*/
    while (a !== b) {
        /*Nếu a trỏ tới cuối ds a (a === null), ta gán con trỏ a vào danh sách B (a = headB),
        nếu a đang trỏ tới 1 nút trong headA thì tiếp tục trỏ tới nút tiếp theo (a = a.next)*/ 
        a = !a ? headB : a.next
        b = !b ? headA : b.next
    }
    return a
};

// headA
var a = new ListNode(4);
a.next = new ListNode(1);
a.next.next = new ListNode(8);
a.next.next.next = new ListNode(4);
a.next.next.next.next = new ListNode(5);

// headB
var b = new ListNode(5);
b.next = new ListNode(6);
b.next.next = new ListNode(1);
b.next.next.next = new ListNode(8);
b.next.next.next.next = new ListNode(4);
b.next.next.next.next.next = new ListNode(5);

console.log(getIntersectionNode(a, b));
