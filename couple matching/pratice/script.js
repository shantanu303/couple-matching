// const boysRashi = [ "Mesha", "Vrishabha", " Mithun", "Karka", "Simha", "Kanya", "Tula", "Vruschika", "Dhanu", "Makar", "Kumbha", "Meena"];

// const girlsRashi = [ "Mesha", "Vrishabha", " Mithun", "Karka", "Simha", "Kanya", "Tula", "Vruschika", "Dhanu", "Makar", "Kumbha", "Meena"];

// const tableData = [
//     [null, "Mesha", "Vrishabha", " Mithun", "Karka", "Simha", "Kanya", "Tula", "Vruschika", "Dhanu", "Makar", "Kumbha", "Meena"],


//     ["Mesha", 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
//     ['Vrishabha', 1,1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//     ["Mithun", 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1],
//     ["Karka", 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
//     ["Simha", 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
//     ["Kanya", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//     ["Tula", 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1],
//     ["Vruschika", 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
//     ["Dhanu", 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
//     ["Makar", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//     ["Kumbha", 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1],
//     ["Meena", 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
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

// document.body.appendChild(table);

// function displayValue() {
//     const girlsRashiInput = document.getElementById('bname').value;
//     const boysRashiInput = document.getElementById('gname').value;

//     const rowIndex = girlsRashi ? girlsRashi.indexOf(girlsRashiInput) + 1 : 0;
//     const columnIndex = boysRashi ? boysRashi.indexOf(boysRashiInput) + 1 : 0;

//     if (rowIndex > 0 && columnIndex > 0) {
//         const cellValue = tableData[rowIndex][columnIndex];
//         console.log(`Selected value: ${cellValue}`);
//     } else {
//         console.log("Invalid input. Please enter valid Rashi values.");
//     }
// }



function submit() {
    var boyName = document.getElementById("bname").value.trim().toLowerCase();
    var girlName = document.getElementById("gname").value.trim().toLowerCase();

    if (boyName === "" || girlName === "") {
        alert("Please enter both boy and girl names.");
        return;
    }

    var boyRashi = getRashi(boyName.charAt(0));
    var girlRashi = getRashi(girlName.charAt(0));
    var boyNakshatra = getNakshatra(boyName.substring(0, 3));
    var girlNakshatra = getNakshatra(girlName.substring(0, 3));

    displayResult(boyName, girlName, boyRashi, girlRashi, boyNakshatra, girlNakshatra);
}

function resetForm() {
    document.getElementById("bname").value = "";
    document.getElementById("gname").value = "";
    document.getElementById("result").innerHTML = "";
}

function getRashi(firstCharacter) {
    // Sample data for Rashi matching
    var rashiMap = {
        "a": "mesha",
        "l": "mesha",
        "i": "mesha",
        "o": "mesha",
        "u": "mesha",
        "b": "vrishabha",
        "v": "vrishabha",
        "w": "vrishabha",
        "e": "vrishabha",
        "k": "mithun",
        "chh": "mithun",
        "gh": "mithun",
        "q": "mithun",
        "c": "mithun",
        "d": "karka",
        "h": "karka",
        "m": "simha",
        "tt": "simha",
        "p": "kanya",
        "tthh": "kanya",
        "r": "tula",
        "t": "tula",
        "n": "vruschika",
        "y": "vruschika",
        "bh": "dhanu",
        "f": "dhanu",
        "dh": "dhanu",
        "kh": "makar",
        "j": "makar",
        "g": "kumbha",
        "s": "kumbha",
        "sh": "kumbha",
        "z": "meena",
        "th": "meena",
    };
    return rashiMap[firstCharacter] || 'Unknown';
}

function getNakshatra(substring) {
    // Sample data for Nakshatra matching
    var nakshatraMap = {
        "chu": "aswini",
        "che": "aswini",
        "cho": "aswini",
        "la": "aswini",
        "c": "aswini",
        "chay": "aswini",
        "lee": "bharani",
        "lu": "bharani",
        "le": "bharani",
        "lo": "bharani",
        "l": "bharani",
        "i": "krittika",
        "a": "krittika",
        "e": "krittika",
        "u": "krittika",
        "ea": "krittika",
        "ee": "krittika",
        "o": "rohini",
        "bi": "rohini",
        "vee": "rohini",
        "va": "rohini",
        "vi": "rohini",
        "vu": "rohini",
        "v": "rohini",
        "w": "rohini",
        "we": "mrigasira",
        "ve": "mrigasira",
        "vo": "mrigasira",
        "ka": "mrigasira",
        "ki": "mrigasira",
        "be": "mrigasira",
        "k": "mrigasira",
        "wo": "mrigasira",
        "ku": "ardra",
        "gha": "ardra",
        "ing": "ardra",
        "jha": "ardra",
        "ke": "punarvasu",
        "ko": "punarvasu",
        "ha": "punarvasu",
        "hi": "punarvasu",
        "hu": "pushyami",
        "he": "pushyami",
        "ho": "pushyami",
        "ha": "pushyami",
        "de": "aslesha",
        "du": "aslesha",
        "dee": "aslesha",
        "do": "aslesha",
        "day": "aslesha",
        "di": "aslesha",
        "d": "aslesha",
        "ma": "magha",
        "me": "magha",
        "mu": "magha",
        "mi": "magha",
        "m": "magha",
        "mo": "poorvaphalguni",
        "ta": "poorvaphalguni",
        "ti": "poorvaphalguni",
        "tu": "poorvaphalguni",
        "t": "poorvaphalguni",
        "te": "poorvaphalguni",
        "te": "uttaraphalguni",
        "to": "uttaraphalguni",
        "pa": "uttaraphalguni",
        "pe": "uttaraphalguni",
        "pu": "hasta",
        "poo": "hasta",
        "tha": "hasta",
        "p": "hasta",
        "sha": "hasta",
        "na": "hasta",
        "teha": "hasta",
        "s": "hasta",
        "pe": "chitra",
        "po": "chitra",
        "ra": "chitra",
        "re": "chitra",
        "ru": "swati",
        "re": "swati",
        "ro": "swati",
        "taa": "swati",
        "ta": "swati",
        "roo": "swati",
        "r": "swati",
        "tee": "visakha",
        "tue": "visakha",
        "teaa": "visakha",
        "too": "visakha",
        "na": "anuradha",
        "ne": "anuradha",
        "nu": "anuradha",
        "nee": "anuradha",
        "noo": "anuradha",
        "nae": "anuradha",
        "ni": "anuradha",
        "n": "anuradha",
        "no": "jyeshta",
        "ya": "jyeshta",
        "yi": "jyeshta",
        "uu": "jyeshta",
        "u": "jyeshta",
        "yu": "jyeshta",
        "y": "jyeshta",
        "ye": "moola",
        "yo": "moola",
        "ba": "moola",
        "be": "moola",
        "bhi": "moola",
        "bha": "moola",
        "bh": "moola",
        "bu": "poorvashadha",
        "bhu": "poorvashadha",
        "phu": "poorvashadha",
        "f": "poorvashadha",
        "dha": "poorvashadha",
        "ea ": "poorvashadha",
        "eaa": "poorvashadha",
        "be": "uttarashadha",
        "bhe": "uttarashadha",
        "bho": "uttarashadha",
        "j": "uttarashadha",
        "bo": "uttarashadha",
        "ja": "uttarashadha",
        "ji": "uttarashadha",
        "ju": "shravan",
        "khe": "shravan",
        "khee": "shravan",
        "khi": "shravan",
        "khu": "shravan",
        "kho": "shravan",
        "je": "shravan",
        "jo": "shravan",
        "q": "shravan",
        "ga": "dhanista",
        "gi": "dhanista",
        "gu": "dhanista",
        "ge": "dhanista",
        "gee": "dhanista",
        "g": "dhanista",
        "go": "satabhisha",
        "sa": "satabhisha",
        "si": "satabhisha",
        "su": "satabhisha",
        "se": "poorvabhadra",
        "so": "poorvabhadra",
        "da": "poorvabhadra",
        "di": "poorvabhadra",
        "du": "uttarabhadra",
        "th": "uttarabhadra",
        "tha": "uttarabhadra",
        "jh": "uttarabhadra",
        "jna": "uttarabhadra",
        "jha": "uttarabhadra",
        "tra": "uttarabhadra",
        "z": "uttarabhadra",
        "de": "revati",
        "do": "revati",
        "cha": "revati",
        "chi": "revati"
    };
    return nakshatraMap[substring.toLowerCase()] || 'Unknown';
}

function displayResult(boyName, girlName, boyRashi, girlRashi, boyNakshatra, girlNakshatra) {
    var result = `
        <h2>Matching Result</h2>
        <p>Boy's Name: ${boyName}</p>
        <p>Girl's Name: ${girlName}</p>
        <p>Boy's Rashi: ${boyRashi}</p>
        <p>Girl's Rashi: ${girlRashi}</p>
        <p>Boy's Nakshatra: ${boyNakshatra}</p>
        <p>Girl's Nakshatra: ${girlNakshatra}</p>
    `;
    document.getElementById("result").innerHTML = result;
}
