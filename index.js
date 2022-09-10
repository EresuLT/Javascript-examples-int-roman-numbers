//* ----------------------ÇÖZÜM 1-----------------------
// list = [{
//         1000: "M",
//         2000: "MM",
//         3000: "MMM"
//     },

//     {
//         100: "C",
//         200: "CC",
//         300: "CCC",
//         400: "CD",
//         500: "D",
//         600: "DC",
//         700: "DCC",
//         800: "DCCC",
//         900: "CM"
//     },

//     {
//         10: "X",
//         20: "XX",
//         30: "XXX",
//         40: "XL",
//         50: "L",
//         60: "LX",
//         70: "LXX",
//         80: "LXXX",
//         90: "XC"
//     },

//     {
//         1: "I",
//         2: "II",
//         3: "III",
//         4: "IV",
//         5: "V",
//         6: "VI",
//         7: "VII",
//         8: "VIII",
//         9: "IX"
//     },

// ]


//* -------------------------ÇÖZÜM 2---------------
// let romen = ""
// let entried = "2841"
// for (i in entried) {
//     console.log(entried[i] * (10 ** (entried.length - 1 - i)));
//     romen += (list[i][(entried[i] * (10 ** (entried.length - 1 - i)))]);
//     console.log(romen);
// }

// function integer_to_roman(num) {
//     if (typeof num !== 'number')
//         return false;

//     var digits = String(+num).split(""),
//         key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
//             "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
//             "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"
//         ],
//         roman_num = "",
//         i = 3;
//     while (i--)
//         roman_num = (key[+digits.pop() + (i * 10)] || "") + roman_num;
//     return Array(+digits.join("") + 1).join("M") + roman_num;
// }

// console.log(integer_to_roman(2481));


//* --------------------ÇÖZÜM 3---------------------
let x = 2954;
let roman = "";
while (x >= 1000) {
    roman += "M";
    x -= 1000;
};
while (x >= 900) {
    roman += "CM";
    x -= 900;
};
while (x >= 500) {
    roman += "D";
    x -= 500;
};
while (x >= 400) {
    roman += "CD";
    x -= 400;
};
while (x >= 100) {
    roman += "C";
    x -= 100;
};
while (x >= 90) {
    roman += "XC";
    x -= 90;
};
while (x >= 50) {
    roman += "L";
    x -= 50;
};
while (x > 40) {
    roman += "XL";
    x -= 40;
};
while (x >= 10) {
    roman += "X";
    x -= 10;
};
while (x >= 9) {
    roman += "IX";
    x -= 9;
};
while (x >= 5) {
    roman += "V";
    x -= 5;
};
while (x >= 4) {
    roman += "IV";
    x -= 4;
};
while (x >= 1) {
    roman += "I";
    x -= 1;
};
console.log(roman);