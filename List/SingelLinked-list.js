// Đề bài: nhập vào 1 chuỗi danh sách liên kết đơn, trả về true khi là Palindrome (lặp lại), false nếu ngược lại

// Đây là thao tác xử lí mảng, không phải danh sách liên kết (sai đề)
// var isPalindrome = function(head) {
//     let newArr = []
//     let curNode = head
//     let arrLength = head.length

//     for (let i = 0; i < arrLength; i++) {
//         newArr.push(curNode[i])
//     }

//     let start = 0
//     let end = newArr.length - 1
//     while (start < end) {
//         if (newArr[start] !== newArr[end]) {
//             return false
//         } else {
//             start++
//             end--
//         }
//     }
//     return true
// };


// Thao tác với danh sách liên kết đúng đề bài 
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
var isPalindrome = function (head) {
    let slow = head, 
        fast = head, 
        prev, 
        temp
    
    while (fast && fast.next) {
        // fast sẽ đi nhanh gấp đôi slow
        slow = slow.next, 
        fast = fast.next.next
    }
    prev = slow, 
    slow = slow.next, 
    prev.next = null

    while (slow) {
        temp = slow.next, 
        slow.next = prev, 
        prev = slow, 
        slow = temp
    }
    fast = head, 
    slow = prev

    while (slow){
        if (fast.val !== slow.val) return false
        else fast = fast.next, slow = slow.next
    }
    return true
};

// Run
var head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(2)
head.next.next.next.next = new ListNode(1)

console.log(isPalindrome(head));



