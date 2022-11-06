//// kiểu dữ liệu: 6 kiểu cb
/*
number: số 0-9
string: chữ a-z '', "", ``
boolean: t/f
null: rỗng
undefine: ko xd (khai bao bien khi ko dat gtri)
object: doi tuong
*/
/*
- toan tu: 
+ tt so hoc: +, -, *, /, %
+ tt so sanh: >, <, ==, ===, ...
+ tt logic: &&, || 
+ tt 3 ngoi: (dieu kien)?"cau lenh 1":"cau lenh 2"
*/ 


////// khai bao bien
/// cu phap: let/var/const
/*let a = 2;
var b = 3;
const pi = 3.14;
///// nen dung let thay vi var
{
    {
        let vung2 ="Day la vung 2";
        {
            var vung3 ="Day la vung 3";
        }
        
    }
    ////// console.log(vung2) // ko in ra
}
console.log(vung3); /// in ra
/*
uu tien dung let vi:
var thuong gay loi lien quan den khai bao bien
let ko gap van de nhu vay va no bao dam tinh cuc bo cua bien
*/


//// cau dieu kien
/*
if(dieu kien){
    /// cau lenh ben trong if
}
else{
    /// cau lenh ben trong else(khi kq tra ve la false)
}
*/

/*if(7>10){
    console.log("dk nay dung");
}
else{
    console.log("dk nay sai");
};




/* bai toan if else nhu sau:
dong vai ng tuyen dung hs tai trg cap 3:
8-10: => hs gioi
6.5-8: => hs kha
5-6.5: => hs tb
0-5: => hs kem
xay dung ctrinh ktra dau vao hs va in ra kq dung if-else 
*/ 

/*let diem = Number(prompt("moi nguoi dung nhap diem"));
console.log("diem", diem);
{
    if(diem => 8){
        alert("hs gioi");
    }
    else if(diem < 8 && diem >= 6.5){
        alert("hs kha");
    }
    else if(diem < 6.5 && diem >= 5){
        alert("hs tb");
    }
    else{
        alert("hs yeu");
    }
};


/*
vong lap: 3 vong lap cb(while, do - while, for)
-while: cu phap

do{
    cau lenh
}
while(dieu kien);



for(box1; box2; box3){
    cau lenh
}

gthich:


while(dieu kien){
    cau lenh lap trinh
}
*/ 



/// in ra cac so tu 0-20
/* let i = 0;
while(i <= 20){
    console.log(i);
    i = i + 1; /// sau moi lan lap i tang 1 dvi
}

/* let i = 0;
do{
    console.log(i);
    i = i + 1; // tang i 1 dvi
}
while (i <= 20);




/* let i = 0
for(let i = 0; i <= 20; i = i + 1){
    console.log(i); 
}
//// kq sau vong lap: i dang la 11

/// array: dc coi la  kieu du lieu rieng
*/ 
/*
cong dung: 
khai bao 1 mang; let arr = [], let arr = new array();
kiem tra du lieu mang
*/
/*let arr = []; 
////console.log(typeof(arr)); // obj => ko dung de ktra mang
console.log(Array.isArray(arr));// kq la true => arr la kdl mang(nen dung)
/// them ptu vao mang: push();
arr.push("ptu1", 1234,"ptu3");
console.log("arr: ", arr);
/// so ptu trong mang: arr.length
/// duyet mang: sd vong lap for(in ra tung mang)
for(let i = 0; i < arr.length; i = i + 1){
    console.log(arr.[i]); // in ra ptu o vtri i trong mang 
};
*/

/// Cap nhat ptu mang: update ptu mang
//arr[1] = "ptu2";

/// Delete ptu mang: arr.splice( , , );
