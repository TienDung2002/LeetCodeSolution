/* Cho 1 mảng số nguyên không rỗng, mỗi phần tử xuất hiện 2 lần trừ 1 phần tử. Tìm phần tử duy nhất đó.
Giải bài toán vói độ phức tạp tuyến tính và không sử dụng thêm bộ nhớ 
Example 1:
Input: nums = [2,2,1]
Output: 1

Example 2:
Input: nums = [4,1,2,1,2]
Output: 4

Example 3:
Input: nums = [1]
Output: 1
 
Constraints:
1 <= nums.length <= 3 * 104
-3 * 104 <= nums[i] <= 3 * 104
Mỗi phần tử trong mảng xuất hiện 2 lần trừ 1 phần tử xuất hiện 1 lần
*/ 

var singleNumber = function(nums) {
    let result = 0

    // Sử dụng phép XOR bitwise: trả về true nếu 2 giá trị input khác nhau, true nếu ngược lại. 
    /*
    Chi tiết hơn: XOR sẽ biến tất cả các số đang xét thành dạng nhị phân, ví dụ 0 = 0000, 1 = 0001
    Vậy 2 số giống nhau sẽ giống nhau cả về dạng nhị phân, và áp dụng lí thuyết XOR ở trên thì sẽ trả về
    kết quả là 0, từ đó có được số độc nhất
    */
    for (let i = 0; i < nums.length; i++) {
        result ^= nums[i]
    }
    return result
};

var nums = [2,2,1]
console.log(singleNumber(nums));


/*
singleNumber([2, 2, 1]): Phép XOR giữa tất cả các phần tử là 2 ^ 2 ^ 1, kết quả là 1. Vì vậy, đầu ra là 1.
singleNumber([4, 1, 2, 1, 2]): Phép XOR giữa tất cả các phần tử là 4 ^ 1 ^ 2 ^ 1 ^ 2, kết quả là 4. Vì vậy, đầu ra là 4.
singleNumber([1]): Phép XOR với phần tử duy nhất là 1, kết quả là 1. Vì vậy, đầu ra là 1.
*/ 