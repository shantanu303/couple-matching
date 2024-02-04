const boysRashi = [ "Mesha", "Vrishabha", " Mithun", "Karka", "Simha", "Kanya", "Tula", "Vruschika", "Dhanu", "Makar", "Kumbha", "Meena"];

const girlsRashi = [ "Mesha", "Vrishabha", " Mithun", "Karka", "Simha", "Kanya", "Tula", "Vruschika", "Dhanu", "Makar", "Kumbha", "Meena"];

const tableData = [
    [null, "Mesha", "Vrishabha", " Mithun", "Karka", "Simha", "Kanya", "Tula", "Vruschika", "Dhanu", "Makar", "Kumbha", "Meena"],


    ["Mesha", 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
    ['Vrishabha', 1,1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ["Mithun", 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1],
    ["Karka", 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
    ["Simha", 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
    ["Kanya", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ["Tula", 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1],
    ["Vruschika", 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
    ["Dhanu", 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
    ["Makar", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ["Kumbha", 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1],
    ["Meena", 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
];

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

// document.body.appendChild(table);

function displayValue() {
    const girlsRashiInput = document.getElementById('bname').value;
    const boysRashiInput = document.getElementById('gname').value;

    const rowIndex = girlsRashi ? girlsRashi.indexOf(girlsRashiInput) + 1 : 0;
    const columnIndex = boysRashi ? boysRashi.indexOf(boysRashiInput) + 1 : 0;

    if (rowIndex > 0 && columnIndex > 0) {
        const cellValue = tableData[rowIndex][columnIndex];
        console.log(`Selected value: ${cellValue}`);
    } else {
        console.log("Invalid input. Please enter valid Rashi values.");
    }
}
