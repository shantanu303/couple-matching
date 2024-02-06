// const boysRashi = ["Mesha", "Vrishabha", " Mithun", "Karka", "Simha", "Kanya", "Tula", "Vruschika", "Dhanu", "Makar", "Kumbha", "Meena"];

// const girlsRashi = ["Mesha", "Vrishabha", " Mithun", "Karka", "Simha", "Kanya", "Tula", "Vruschika", "Dhanu", "Makar", "Kumbha", "Meena"];

// const tableData = [
//     [null, "Mesha", "Vrishabha", " Mithun", "Karka", "Simha", "Kanya", "Tula", "Vruschika", "Dhanu", "Makar", "Kumbha", "Meena"],
//     ["Mesha", 2, 2, 0, 0, 0.5, 0, 0, 0, 0, 0, 0, 0],
//     ['Vrishabha', 2, 2, 0, 0, 0.5, 0, 0, 0, 0, 0, 0, 0],
//     ["Mithun", 1, 1, 2, 1, 0.5, 2, 2, 1, 2, 1, 2, 1],
//     ["Karka", 0.5, 0.5, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2],
//     ["Simha", 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
//     ["Kanya", 1, 1, 2, 1, 0.5, 2, 2, 1, 2, 1, 2, 1],
//     ["Tula", 1, 1, 2, 1, 0.5, 2, 2, 1, 2, 1, 2, 1],
//     ["Vruschika", 1, 1, 1, 1, 0, 1, 1, 2, 1, 1, 1, 1],
//     ["Dhanu", 1, 1, 2, 1, 0.5, 2, 2, 1, 2, 1, 2, 1],
//     ["Makar", 0.5, 0.5, 1, 2, 1, 1, 1, 1,  2, 1, 2],
//     ["Kumbha", 1, 1, 2, 1, 0.5, 2, 2, 1, 2, 1, 2, 1],
//     ["Meena", 0.5, 0.5, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2],
// ];

// // Create table element
// const table = document.createElement('table');

// // Add rows and cells to the table
// for (let i = 0; i < girlsRashi.length + 1; i++) {
//     const row = table.insertRow(i);
//     for (let j = 0; j < boysRashi.length + 1; j++) {
//         const cell = row.insertCell(j);
//         if (i === 0 && j > 0) {
//             cell.textContent = boysRashi[j - 1];
//         } else if (i > 0 && j === 0) {
//             cell.textContent = girlsRashi[i - 1];
//         } else if (i > 0 && j > 0) {
//             cell.textContent = tableData[i][j];
//         }
//     }
// }

// function displayValue() {
//     const boysRashiInput = document.getElementById('bname').value;
//     const girlsRashiInput = document.getElementById('gname').value;

//     const rowIndex = girlsRashi ? girlsRashi.indexOf(girlsRashiInput) + 1 : 0;
//     const columnIndex = boysRashi ? boysRashi.indexOf(boysRashiInput) + 1 : 0;
//     document.body.appendChild(table);

//     if (rowIndex > 0 && columnIndex > 0) {
//         const cellValue = tableData[rowIndex][columnIndex];
//         console.log(`Selected value: ${cellValue}`);
//     } else {
//         console.log("Invalid input. Please enter valid Rashi values.");
//     }
// }


const boysRashi = [ "Mesha", "Vrishabha", " Mithun", "Karka", "Simha", "Kanya", "Tula", "Vruschika", "Dhanu", "Makar", "Kumbha", "Meena"];

const girlsRashi = [ "Mesha", "Vrishabha", " Mithun", "Karka", "Simha", "Kanya", "Tula", "Vruschika", "Dhanu", "Makar", "Kumbha", "Meena"];

const tableData = [
    [null, "Mesha", "Vrishabha", " Mithun", "Karka", "Simha", "Kanya", "Tula", "Vruschika", "Dhanu", "Makar", "Kumbha", "Meena"],
    ["Mesha", 2, 2, 0, 0, 0.5, 0, 0, 0, 0, 0, 0, 0],
    ['Vrishabha', 2, 2, 0, 0, 0.5, 0, 0, 0, 0, 0, 0, 0],
    ["Mithun", 1, 1, 2, 1, 0.5, 2, 2, 1, 2, 1, 2, 1],
    ["Karka", 0.5, 0.5, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2],
    ["Simha", 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
    ["Kanya", 1, 1, 2, 1, 0.5, 2, 2, 1, 2, 1, 2, 1],
    ["Tula", 1, 1, 2, 1, 0.5, 2, 2, 1, 2, 1, 2, 1],
    ["Vruschika", 1, 1, 1, 1, 0, 1, 1, 2, 1, 1, 1, 1],
    ["Dhanu", 1, 1, 2, 1, 0.5, 2, 2, 1, 2, 1, 2, 1],
    ["Makar", 0.5, 0.5, 1, 2, 1, 1, 1, 1,  2, 1, 2],
    ["Kumbha", 1, 1, 2, 1, 0.5, 2, 2, 1, 2, 1, 2, 1],
    ["Meena", 0.5, 0.5, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2],
];

// Create table element
const table = document.createElement('table');

// Add rows and cells to the table
for (let i = 0; i < girlsRashi.length + 1; i++) {
    const row = table.insertRow(i);
    for (let j = 0; j < boysRashi.length + 1; j++) {
        const cell = row.insertCell(j);
        if (i === 0 && j > 0) {
            cell.textContent = boysRashi[j - 1];
        } else if (i > 0 && j === 0) {
            cell.textContent = girlsRashi[i - 1];
        } else if (i > 0 && j > 0) {
            cell.textContent = tableData[i][j];
        }
    }
}
function submit() {
    var boyName = document.getElementById("bname").value;
    var girlName = document.getElementById("gname").value;

    var bfirstCharacter = boyName.charAt(0);
    var gfirstCharacter = girlName.charAt(0);
// Add table to the body
document.body.appendChild(table);

    console.log("Boy's Rashi:", getRashi(bfirstCharacter));
    console.log("Girl's Rashi:", getRashi(gfirstCharacter));

}