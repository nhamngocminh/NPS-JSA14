const arrayUser = [
    {
        user: "minh",
        pass: 234
    },
    {
        user: "minh37",
        pass: 345
    },
];
function login() {
    // lay thong tin tu tk & mk o html
    let user = document.querySelector("#user").value;
    let pass = document.querySelector("#pass").value;
    // duyet het phan tu tu mang arrayuser de ktra xem tk & mk giong ko
    for(let item of arrayUser) {
        if((item.user == user) && (item.pass = pass)) {
            localStorage.setItem("user", item.user);
            document.querySelector(".link").href = "https://www.facebook.com/";
        };
    };
};


const arryList = [
    {
        img: "img/dong1.jpg",
        cmt: "Fizz"
    },
    {
        img: "img/dong1.jpg",
        cmt: "Fizz"
    },
    {
        img: "img/dong2.jpg",
        cmt: "Fizz"
    },
    {
        img: "img/dong1.jpg",
        cmt: "Fizz"
    },
    {
        img: "img/dong1.jpg",
        cmt: "Fizz"
    },
    {
        img: "img/dong1.jpg",
        cmt: "Fizz"
    }
]

function showmain() {
    let check = localStorage.getItem("user");
    console.log(check);
    if(check == null) {
        main.style.display = "none";
    }
    if(main) { 
        for(let item of arraylist) {
            main.innerHTML += `
            <div class ="item-conten">
            <img src="${item.img}" alt="">
            <p>${item.cmt}</p>
            </div>
            `
        }
    }
};
showmain();



