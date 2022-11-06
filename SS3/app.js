/*
Buổi 2: 
- Kiến thức sơ lược về Javascript
*/

////// Giới thiệu thêm về vòng lặp trong đó
/*
for in: duyệt mảng theo thứ tự phần tử
for of: duyệt mảng theo từng phần tử mảng
*/

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
///// In ra từng phần tử mảng

////  C1: dùng for 
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }


// //// C2 :Dùng for in
// for (let key in arr) {
//   console.log(arr[key]);
// }

// //// C3: Dùng for of
// for (let key of arr) {
//   console.log(key);
// }


////// Giới thiệu Switch Case: giống hệt if else khác cách trình bày

/*
Xây dựng chương trình nhập vào tháng => in ra số ngày tương ứng mà tháng đó có:
*/

// let inputMonth = Number(prompt("Mời người dùng nhập vào tháng"));
// let year = Number(prompt("Mời người dùng nhập vào năm"))
// let inputMonth = 5;

// switch (inputMonth) {
//   case 1:
//     console.log(`Tháng ${inputMonth} có 31 ngày`);
//     break;

//   case 4:
//     alert(`Tháng ${inputMonth} có 30 ngày`);
//     break;

//   case 2:
//     /// Kiểm tra năm nhuận để xem tháng 2 có bao nhiêu ngày:
//     /*
//     Điều kiện kiểm tra năm nhuận:
//     1. Năm nhuận là năm chia hết cho 4 và 100
//     2. Năm nhuận là năm chia hết cho 400
//     */
//     if (year % 4 == 0 && year % 100 == 0) {
//       alert(`Tháng ${inputMonth} có 29 ngày`);
//     }
//     else if (year % 400 == 0) {
//       alert(`Tháng ${inputMonth} có 29 ngày`);
//     }
//     else {
//       alert(`Tháng ${inputMonth} có 28 ngày`);
//     }

//     break;
// }



/*
Bài tập: Một nhà hàng gặp khó khăn trong việc quản lý menu order. 
Xây dựng chương trình Order gồm những tính năng sau: 
mặc định: trong menu luôn có 3 món ban đầu là: 
let menu = ["khoai tây chiên", "lạc luộc", "kim chi"];
Cho người dùng nhập vào: C,R,U,D trong đó:
- C: Create => Thêm 1 món ăn mới vào menu
- R: Read => Hiển thị ra những món đã order (trong mảng menu)
- U: Update => Nhập tên món muốn thay thế (nhập không đúng món bắt nhập lại hoặc thoát nếu không muốn)
=> "Nhập tên món mới"
- D: Delete => Nhập tên món muốn delete (nhập không đúng thì nhập lại hoặc thoát ra)
=> xóa món đó trong menu.
*/

let menu = ["khoai tây chiên", "lạc luộc", "kim chi"];
let input;
do {

  input = prompt("Mời người dùng nhập vào C,R,U,D").toLocaleLowerCase().trim();
  if (input == "c") {
    menu.push(prompt("Mời người dùng nhập vào món mới").trim());
  }
  else if (input == "r") {
    console.log(menu);
  }
  else if (input == "u") {
    let phanTuMuonThayThe = prompt("Mời người dùng nhập vào phần tử muốn thay thế").trim();
    let ViTriPhanTuMuonThayThe = menu.indexOf(phanTuMuonThayThe);
    menu[ViTriPhanTuMuonThayThe] = prompt("Mời người dùng nhập vào món ăn mới").trim();
  }
  else if (input == "d") {
    let phanTuMuonXoa = prompt("Mời người dùng nhập vào phần tử muốn xóa").trim();
    let ViTriPhanTuMuonXoa = menu.indexOf(phanTuMuonXoa);
    menu.splice(ViTriPhanTuMuonXoa, 1);
  }
  else {
    alert("Đã thoát chương trình");

  }

  // input = prompt("Mời người dùng nhập vào C,R,U,D").toLocaleLowerCase().trim();
}
while (input == "c" || input == "r" || input == "u" || input == "d");




////// Function: Giới thiệu về hàm
/*
- Hàm là 1 chuong trình con được định nghĩa ra để xử lý tính năng mình muốn
- Hàm có thể tận dụng lại vô số lần
- Tối ưu code rất nhiều
*/

//// Khai báo hàm: 
// function sum() {
//   alert("Đây là khai báo hàm không tham số")
// }

// // chạy hàm
// sum();

//// Khai báo hàm có tham số
// function sum(a, b) {
//   console.log(a + b);
// }
// sum(1, 2); // 3

////// Khai báo hàm có trả về giá trị:
// function sum(a, b) {
//   return a + b;
// }
// console.log(
//   sum(3, 4)
// );


/*
Bài toán: 
In ra các số nguyên tố từ 1 => 10 biết: 
- Số nguyên tố là số chia hết cho 1 và chính nó
- In ra dưới dạng danh sách (arrray)
*/
function snt() {
    // Xây dựng bài toán
    let danhSachSnt = []
    for (let i = 2; i <= 10; i++) {
      let dem = 0;
      for (let j = 1; j < i; j++) {
        if (i % j == 0) {
          dem++;
        }
      }
      if (dem == 1) {
        danhSachSnt.push(i);
      }
    }
    return danhSachSnt;
  }
  
  console.log(
    snt()
  );








  