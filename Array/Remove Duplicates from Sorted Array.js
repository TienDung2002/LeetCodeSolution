/*
Đề bài: Xóa phần tử trùng lặp khỏi mảng, coi k là số các phần tử duy nhất trong mảng,
trả về k

Example 1:
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

Example 2:
Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
*/

var removeDuplicates = function(nums) {
    let k = 0; // Vị trí theo dõi phần tử trùng lặp

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[k]) {
            k++; // Tăng giá trị vị trí lên
            nums[k] = nums[i]; // Di chuyển phần tử duy nhất vào vị trí kế tiếp
            // Gán nums[i] cho num[k] sẽ đảm bảo giá trị từ 0 đến k không có giá trị trùng lặp
        }
    }
    k++; 
    nums.length = k; // Cắt bỏ các phần tử còn lại từ nums

    return k; // Trả về số lượng phần tử duy nhất
};


console.log(removeDuplicates([1,1,2]));