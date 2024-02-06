// function getRashi(firstCharacter) {
//     switch (firstCharacter.toLowerCase()) {
//         case "a":
//         case "l":
//         case "i":
//         case "o":
//         case "u":
//             return "mesha";
//         case "b":
//         case "v":
//         case "u":
//         case "w":
//         case "e":
//             return "vrishabha";
//         case "k":
//         case "chh":
//         case "gh":
//         case "q":
//         case "c":
//             return "mithun";
//         case "dd":
//         case "h":
//             return "karka";
//         case "m":
//         case "tt":
//             return "simha";
//         case "p":
//         case "tthh":
//             return "kanya";
//         case "r":
//         case "t":
//             return "tula";
//         case "n":
//         case "y":
//             return "vruschika";
//         case "bh":
//         case "f":
//         case "dh":
//             return "dhanu";
//         case "kh":
//         case "j":
//             return "makar";
//         case "g":
//         case "s":
//         case "sh":
//             return "khumbha";
//         case "d":
//         case "ch":
//         case "z":
//         case "th":
//             return "meena";
//         default:
//             return "not matching";
//     }
// }

// var boyRashi =" ";
// var girlRashi = " ";

// function calculateRashi() {
//     var boyName = document.getElementById("bname").value;
//     var girlName = document.getElementById("gname").value;

//     var bfirstCharacter = boyName.charAt(0);
//     var gfirstCharacter = girlName.charAt(0);

//     boyRashi = getRashi(bfirstCharacter);
//     girlRashi = getRashi(gfirstCharacter);

//     var boyRashi = console.log("Boy's Rashi:", boyRashi);
//     var girlRashi =console.log("Girl's Rashi:", girlRashi);
//     submit();
    
// }

function getRashi(firstCharacter) {
    switch (firstCharacter.toLowerCase()) {
        case "a":
        case "l":
        case "i":
        case "o":
        case "u":
            return "mesha";
        case "b":
        case "v":
        case "u":
        case "w":
        case "e":
            return "vrishabha";
        case "k":
        case "chh":
        case "gh":
        case "q":
        case "c":
            return "mithun";
        case "d":
        case "h":
            return "karka";
        case "m":
        case "tt":
            return "simha";
        case "p":
        case "tthh":
            return "kanya";
        case "r":
        case "t":
            return "tula";
        case "n":
        case "y":
            return "vruschika";
        case "bh":
        case "f":
        case "dh":
            return "dhanu";
        case "kh":
        case "j":
            return "makar";
        case "g":
        case "s":
        case "sh":
            return "kumbha";
        case "d":
        case "ch":
        case "z":
        case "th":
            return "meena";
        default:
            return "not matching";
    }
}

function submit() {
    var boyName = document.getElementById("bname").value;
    var girlName = document.getElementById("gname").value;

    var bfirstCharacter1 = boyName.charAt(0);
    var gfirstCharacter1 = girlName.charAt(0);

    var bfirstCharacter2 = boyName.charAt(0);
    var gfirstCharacter2 = girlName.charAt(0);

    var bfirstCharacter5 = boyName.charAt(0);
    var gfirstCharacter5 = girlName.charAt(0);

    var bfirstCharacter7 = boyName.charAt(0);
    var gfirstCharacter7 = girlName.charAt(0);

    // console.log("Boy's Rashi:", getRashi(bfirstCharacter));
    // console.log("Girl's Rashi:", getRashi(gfirstCharacter));

    // Call the displayValue function from second.js
    displayValue(getRashi(bfirstCharacter1), getRashi(gfirstCharacter1));
    displayValue2(getRashi(bfirstCharacter2), getRashi(gfirstCharacter2));
    displayValue5(getRashi(bfirstCharacter5), getRashi(gfirstCharacter5));
    displayValue7(getRashi(bfirstCharacter7), getRashi(gfirstCharacter7));
}

const boysRashi1 = ["mesha", "vrishabha", "mithun", "karka", "simha", "kanya", "tula", "vruschika", "dhanu", "makar", "kumbha", "meena"];
const girlsRashi1 = ["mesha", "vrishabha", "mithun", "karka", "simha", "kanya", "tula", "vruschika", "dhanu", "makar", "kumbha", "meena"];

const tableData1 = [
    [null, "mesha", "vrishabha", "mithun", "karka", "simha", "kanya", "tula", "vruschika", "dhanu", "makar", "kumbha", "meena"],
    ["mesha", 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
    ["vrishabha", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ["mithun", 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1],
    ["karka", 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
    ["simha", 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
    ["kanya", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ["tula", 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1],
    ["vruschika", 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
    ["dhanu", 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
    ["makar", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ["kumbha", 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1],
    ["meena", 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
];

function displayValue(boysRashiInput1, girlsRashiInput1) {
    const rowIndex1 = girlsRashi1.indexOf(girlsRashiInput1);
    const columnIndex1 = boysRashi1.indexOf(boysRashiInput1);

    if (rowIndex1 !== -1 && columnIndex1 !== -1) {
        const cellValue = tableData1[rowIndex1 + 1][columnIndex1 + 1];
        var table1 = ` ${cellValue}`;
        console.log("table1", table1)
    } else {
        console.log("Invalid input. Please enter valid Rashi values.");
    }
}

const boysRashi2 = ["mesha", "vrishabha", "mithun", "karka", "simha", "kanya", "tula", "vruschika", "dhanu", "makar", "kumbha", "meena"];
const girlsRashi2 = ["mesha", "vrishabha", "mithun", "karka", "simha", "kanya", "tula", "vruschika", "dhanu", "makar", "kumbha", "meena"];

const tableData2 = [
    [null, "mesha", "vrishabha", "mithun", "karka", "simha", "kanya", "tula", "vruschika", "dhanu", "makar", "kumbha", "meena"],
    ["mesha", 2, 2, 0, 0, 0.5, 0, 0, 0, 0, 0, 0, 0],
    ['vrishabha', 2, 2, 0, 0, 0.5, 0, 0, 0, 0, 0, 0, 0],
    ["mithun", 1, 1, 2, 1, 0.5, 2, 2, 1, 2, 1, 2, 1],
    ["karka", 0.5, 0.5, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2],
    ["simha", 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
    ["kanya", 1, 1, 2, 1, 0.5, 2, 2, 1, 2, 1, 2, 1],
    ["tula", 1, 1, 2, 1, 0.5, 2, 2, 1, 2, 1, 2, 1],
    ["vruschika", 1, 1, 1, 1, 0, 1, 1, 2, 1, 1, 1, 1],
    ["dhanu", 1, 1, 2, 1, 0.5, 2, 2, 1, 2, 1, 2, 1],
    ["makar", 0.5, 0.5, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2],
    ["kumbha", 1, 1, 2, 1, 0.5, 2, 2, 1, 2, 1, 2, 1],
    ["meena", 0.5, 0.5, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2],
];

function displayValue2(boysRashiInput2, girlsRashiInput2) {
    const rowIndex2 = girlsRashi2.indexOf(girlsRashiInput2);
    const columnIndex2 = boysRashi2.indexOf(boysRashiInput2);

    if (rowIndex2 !== -1 && columnIndex2 !== -1) {
        const cellValue2 = tableData2[rowIndex2 + 1][columnIndex2 + 1];
        var table2 = ` ${cellValue2}`;
        console.log("table2", table2)
    } else {
        console.log("Invalid input. Please enter valid Rashi values.");
    }
}

const boysRashi5 = ["mesha", "vrishabha", "mithun", "karka", "simha", "kanya", "tula", "vruschika", "dhanu", "makar", "kumbha", "meena"];
const girlsRashi5 = ["mesha", "vrishabha", "mithun", "karka", "simha", "kanya", "tula", "vruschika", "dhanu", "makar", "kumbha", "meena"];

const tableData5 = [
    [null, "mesha", "vrishabha", "mithun", "karka", "simha", "kanya", "tula", "vruschika", "dhanu", "makar", "kumbha", "meena"],
    ["mesha", 5, 3, 0.5, 4, 5, 0.5, 4, 5, 5, 0.5, 0.5, 5],
    ['vrishabha', 3, 5, 4, 0.5, 0, 4, 5, 3, 0.5, 5, 5, 0.5],
    ["mithun", 0.5, 5, 5, 1, 4, 5, 5, 0.5, 0.5, 4, 4, 0.5],
    ["karka", 4, 0.5, 1, 5, 5, 1, 0.5, 4, 4, 0.5, 0.5, 4],
    ["simha", 5, 0, 4, 5, 5, 4, 0, 5, 5, 0, 0, 5],
    ["kanya", 0.5, 5, 5, 1, 4, 5, 5, 0.5, 0.5, 4, 4, 0.5],
    ["tula", 3, 5, 4, 0.5, 0, 4, 5, 3, 0.5, 5, 5, 0.5],
    ["vruschika", 5, 3, 0.5, 4, 5, 0.5, 4, 5, 5, 0.5, 0.5, 5],
    ["dhanu", 5, 0.5, 0.5, 4, 5, 0.5, 0.5, 5, 5, 3, 3, 5],
    ["makar", 0.5, 5, 4, 0.5, 0.5, 0, 5, 0.5, 3, 5, 5, 3],
    ["kumbha", 0.5, 5, 4, 0.5, 0.5, 0, 5, 0.5, 3, 5, 5, 3],
    ["meena", 5, 0.5, 0.5, 4, 5, 0.5, 0.5, 5, 5, 3, 3, 5],
];

function displayValue5(boysRashiInput5, girlsRashiInput5) {
    const rowIndex5 = girlsRashi5.indexOf(girlsRashiInput5);
    const columnIndex5 = boysRashi5.indexOf(boysRashiInput5);

    if (rowIndex5 !== -1 && columnIndex5 !== -1) {
        const cellValue5 = tableData5[rowIndex5 + 1][columnIndex5 + 1];
        var table5 = ` ${cellValue5}`;
        console.log("table5", table5)
    } else {
        console.log("Invalid input. Please enter valid Rashi values.");
    }
}

const boysRashi7 = ["mesha", "vrishabha", "mithun", "karka", "simha", "kanya", "tula", "vruschika", "dhanu", "makar", "kumbha", "meena"];
const girlsRashi7 = ["mesha", "vrishabha", "mithun", "karka", "simha", "kanya", "tula", "vruschika", "dhanu", "makar", "kumbha", "meena"];

const tableData7 = [
    [null, "mesha", "vrishabha", "mithun", "karka", "simha", "kanya", "tula", "vruschika", "dhanu", "makar", "kumbha", "meena"],
    ["mesha", 7, 0, 7, 7, 0, 0, 7, 0, 0, 7, 7, 0],
    ['vrishabha', 0, 7, 0, 7, 7, 0, 0, 7, 0, 0, 7, 7],
    ["mithun", 7, 0, 7, 0, 7, 7, 0, 0, 7, 0, 0, 7],
    ["karka", 7, 7, 0, 7, 0, 7, 7, 0, 0, 7, 0, 0],
    ["simha", 0, 7, 7, 0, 7, 0, 7, 7, 0, 0, 7, 0],
    ["kanya", 0, 0, 7, 7, 0, 7, 0, 7, 7, 0, 0, 7],
    ["tula", 7, 0, 0, 7, 7, 0, 7, 0, 7, 7, 0, 0],
    ["vruschika", 0, 7, 0, 0, 7, 7, 0, 7, 0, 7, 7, 0],
    ["dhanu", 0, 0, 7, 0, 0, 7, 7, 0, 7, 0, 7, 7],
    ["makar", 7, 0, 0, 7, 0, 0, 7, 7, 0, 7, 0, 7],
    ["kumbha", 7, 7, 0, 0, 7, 0, 0, 7, 7, 0, 7, 0],
    ["meena", 0, 7, 7, 0, 0, 7, 0, 0, 7, 7, 0, 7],
];

function displayValue7(boysRashiInput7, girlsRashiInput7) {
    const rowIndex7 = girlsRashi7.indexOf(girlsRashiInput7);
    const columnIndex7 = boysRashi7.indexOf(boysRashiInput7);

    if (rowIndex7 !== -1 && columnIndex7 !== -1) {
        const cellValue7 = tableData7[rowIndex7 + 1][columnIndex7 + 1];
        var table7 = ` ${cellValue7}`;
        console.log("table7", table7)
    } else {
        console.log("Invalid input. Please enter valid Rashi values.");
    }
}