/*setTimeout(SayHi, 5000);

function SayHi() {
    alert("Hi My friend , Have a good day ! ");
}

var i = 0;
while (i < 2) {
    document.write("happy birth day to you </br>");
    i++;
}
var name = "hung";
document.write("happy birthday to" + name + "</br>");
document.write("happy birth day to you </br>");


var count = 10;
while (count > 0) {
    document.write(count + " bottles of beer on the table </br>");
    document.write("take one down, play it around </br>");
    count--;
}
document.write("no more bottles of beer on the table </br>"); */
/* BattleShip Game */
//khai bao bien hit-so lan ban trung Ship
var hit_ship = 0;
// lay du lieu tu Promt de kiem tra
// gia su co 2 Ship can hit
for (let i = 0; i <= 4; i++) {

    // tao  Promt de user nhap vi tri 
    let choose_number = prompt("nhap vi tri danh (1-7)", "ban chon so may ?"); // dang o dang String

    // chuyen tu String sang Number
    choose_number = parseInt(choose_number);
    //gioi han gia tri chon tu 1-7
    if (choose_number <= 0 || choose_number >= 8) {
        alert("YOu input wrong number !! Try Again.");
    }
    if (choose_number == 3 || choose_number == 5) {
        alert("You hit !!!")
        hit_ship++;
        if (hit_ship == 2) {
            break;
        }
    } else {
        alert("You Miss!!!");
    }
}

if (hit_ship == 2) {
    document.write("You Won!!!");
} else {
    document.write("You Losed !! Let Try Again.");
}

/* Mistakes : 
use wrong name of function
how to use "let" ?
 */