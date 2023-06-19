/*
Đề bài: cho input là 2 tham số: dãy số nums, giá trị val
Trả về 1 mảng không chứa giá trị val trong mảng nums và giá trị k (số lượng giá trị trong nums không bằng giá trị val)

*/

var removeElement = function (nums, val) {
    let k = 0; // Số lượng phần tử khác val
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i]; // Gán phần tử khác val vào vị trí k
            k++; // Tăng số lượng phần tử khác val lên 1
        }
    }
    // Cắt mảng nums để chỉ chứa các phần tử k và các phần tử khác val sẽ không còn giữ lại, tuy nhiên câu lệnh này thừa so với yêu cầu output trên leetcode
    // nums.length = k; 
    return k; // Trả về số lượng phần tử khác val
};

var nums = [3, 2, 2, 3], val = 3
console.log(removeElement(nums, val));