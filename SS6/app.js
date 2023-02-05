// let input;
// let menu = [];

// do{
//     input = prompt("Moi nguoi dung nhap vao C,R,U,D").toLowerCase().trim();
//     if (input == "c") {
//         let pp = prompt("Moi nguoi dung nhap vao mon an moi").trim();
//         localStorage.setItem("menu", pp);
//     }
//     else if (input == "r") {
//         console.log(menu);
//     }
//     else if (input == "u") {
//         let cc = prompt("Moi nguoi dung nhap vao mon an muon update").trim();
//         localStorage.removeItem("menu", cc);
//         let dd = prompt("Moi nguoi dung nhap vao mon an update").trim();
//         localStorage.setItem("menu", dd);
//     }
//     else if (input == "r") {
//         let gg = prompt("Moi nguoi dung nhap vao mon an muon xoa").trim();
//         localStorage.removeItem("menu", gg);
//     }
// };

let input;
let menu = [];
///// Chống reset localStorage
if (localStorage.menu) {
  menu = JSON.parse(localStorage.getItem("menu"))
} else {
  localStorage.setItem("menu", JSON.stringify(menu))
}
function C() {
    let newFood = prompt("Mời người dùng nhập vào tên món ăn mới").trim();
    menu.push(newFood);

    /// Đẩy món ăn mới lên localStorage
    localStorage.setItem("menu", JSON.stringify(menu))
    console.log("chạy code");
}
function R() {
    alert(menu)
}
function U() {
    let findFood = prompt("Mời người dùng nhập vào tên món ăn muốn update").trim();

    /// Tìm vị trí phần tử trong mảng
    let numberOfFood = menu.indexOf(findFood);
    console.log("numberOfFood: ", numberOfFood);
    menu[numberOfFood] = prompt("Mời người dùng nhập món ăn mới được update");
    console.log(menu);
    localStorage.setItem("menu", JSON.stringify(menu));
}
function D() {
    let foodDelete = prompt("Mời người dùng nhập vào tên món ăn muốn delete").trim();
    let numberFoodDelete = menu.indexOf(foodDelete);
    menu.splice(numberFoodDelete, 1);
    localStorage.setItem("menu", JSON.stringify(menu));
}
do {
  input = prompt("Mời người dùng nhập vào C,R,U,D").trim().toLowerCase();
  if (input == "c") {
    C();
  }
  else if (input == "r") {
    R();
  }
  else if (input == "u") {
    U();
  }
  else if (input == "d") {
    D();
  }
  else if (input == "q") {
    break; // thoát khỏi vòng lặp ngay lập tức
  }
  else {
    alert("Mời người dùng nhập lại!!");
  }
}
while (input != "c" && input != "r" && input != "u" && input != "d");
