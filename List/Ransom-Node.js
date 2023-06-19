/* Đề bài: Cho hai chuỗi "ransomNote" và "magazine". Trả về true nếu "ransomNote" có thể xây dựng 
từ các kí tự từ chuỗi "magazine" và trả về false nếu không xây dựng đc */



var canConstruct = function (ransomNote, magazine) {
    // Tạo mảng đếm tần số ban đầu gồm 26 phần tử, tất cả đều mang giá trị là 0
    // Mục đích để lưu trữ tần số kí tự xuất hiện có hay không của magazine
    const freqCount = new Array(26).fill(0);

    // Tính tần số của các ký tự trong magazine
    const magaLength = magazine.length
    for (let i = 0; i < magaLength; i++) {
        // Chuyển đổi ký tự sang mã Unicode và trừ đi mã Unicode của 'a'
        // Giá trị đại diện cho khoảng cách từ i đến 'a'
        const charCode = magazine.charCodeAt(i) - 97;
        // Tăng giá trị phần tử tại vị trí charCode nhằm mục đích đếm xem tần số của nó trong freqCount là bao nhiêu lần
        freqCount[charCode]++;
    }

    // Kiểm tra tần suất kí tự trong ransomNote có tồn tại trong freqCount không
    const ransomLength = ransomNote.length
    for (let j = 0; j < ransomLength; j++) {
        const charCode = ransomNote.charCodeAt(j) - 97;
        // Không đủ ký tự để xây dựng ransomNote
        if (freqCount[charCode] === 0) return false
        // Vì mặc định khởi tạo là 0 nên sẽ giảm giá trị freqCount[charCode] đi 
        // => giá trị tần số trở thành số âm 
        // => kí tự bị trả về false
        freqCount[charCode]--;
    }
    // Đủ ký tự để xây dựng ransomNote
    return true;
};

// Run
var result = canConstruct(ransomNote = 'aa', magazine = 'aab')
console.log(result);