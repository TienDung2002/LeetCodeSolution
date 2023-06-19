/* Đề bài: cho 2 mảng nums1 và nums2 được sắp xếp theo thứ tự tăng dần, 
m là số phần tử của nums1 được hợp nhất,
n là số phần tử của nums2 được hợp nhất,
hãy hợp nhất nums1 và nums2 thành 1 mảng duy nhất được sắp xếp theo thứ tự tăng dần. Mảng đã sắp xếp
cuối cùng không phải hàm trả về mà thay vào đó nó được lưu trữ trong nums1. nums1 sau cùng sẽ có độ
dài là m + n (khi hợp nhất phải bỏ qua phần tử 0 trong nums1, nums2)

Ràng buộc:
+)  nums1.length == m + n
+)  nums2.length == n
+)  0 <= m, n <= 200
+)  1 <= m + n <= 200
+)  -109 <= nums1[i], nums2[j] <= 109

Example 1:
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

Example 2:
Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].

Example 3:
Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
*/

var merge = function (nums1, m, nums2, n) {
    // Đặt chỉ số i và j đánh dấu chỉ phần tử ở cuối của nums1 và nums2 
    let i = m - 1
    let j = n - 1
    // Chỉ số k là phần tử ở cuối của mảng hợp nhất nums1 (vì phải trả về nums1 đã được hợp nhất nums1 và nums2)
    let k = m + n - 1

    while (i >= 0 && j >= 0) {
        // Nếu phần tử trong nums1 với chỉ số i (ở cuối lên) lớn hơn ptu trong nums2 từ cuối lên
        if (nums1[i] >= nums2[j]) {
            // chèn từ cuối ngược dần lên đầu
            nums1[k] = nums1[i]
            i--
        } else {
            nums1[k] = nums2[j]
            j--
        }
        k--
    }
    // Nếu nums2 còn phần tử để ghép vào nums1
    while (j >= 0) {
        nums1[k] = nums2[j]
        j--
        k--
    }
    return nums1
};

var nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3
// var nums1 = [1], m = 1, nums2 = [], n = 0
// var nums1 = [0], m = 0, nums2 = [1], n = 1
console.log(merge(nums1, m, nums2, n));