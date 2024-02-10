function getNakshatra(firstCharacter) {
    switch (firstCharacter.toLowerCase()) {
        case "chu":
        case "che":
        case "cho":
        case "la":
        case "c":
        case "chay":
            return "aswini";
        case "lee":
        case "lu":
        case "le":
        case "lo":
        case "l":
            return "bharani";
        case "i":
        case "a":
        case "e":
        case "u":
        case "ea":
        case "ee":
            return "krittika";
        case "o":
        case "bi":
        case "vee":
        case "va":
        case "vi":
        case "vu":
        case "v":
        case "w":
            return "rohini";
        case "we":
        case "ve":
        case "vo":
        case "ka":
        case "ki":
        case "be":
        case "k":
        case "wo":
        case "ka":
        case "ki":
            return "mrigasira";
        case "ku":
        case "gha":
        case "ing":
        case "jha":
            return "ardra";
        case "ke":
        case "ko":
        case "ha":
        case "hi":
        case "h":
            return "punarvasu";
        case "hu":
        case "he":
        case "ho":
        case "ha":
            return "pushyami";
        case "de":
        case "du":
        case "dee":
        case "do":
        case "day":
        case "di":
        case "d":
            return "aslesha";
        case "ma":
        case "me":
        case "mu":
        case "mi":
        case "m":
            return "magha";
        case "mo":
        case "ta":
        case "ti":
        case "tu":
        case "t":
        case "te":
            return "poorvaphalguni";
        case "te":
        case "to":
        case "pa":
        case "pe":
            return "uttaraphalguni";
        case "pu":
        case "poo":
        case "tha":
        case "p":
        case "sha":
        case "na":
        case "teha":
        case "s":
            return "hasta";
        case "pe":
        case "po":
        case "ra":
        case "re":
            return "chitra";
        case "ru":
        case "re":
        case "ro":
        case "taa":
        case "ta":
        case "roo":
        case "r":
            return "swati";
        case "tee":
        case "tue":
        case "teaa":
        case "too":
            return "visakha";
        case "na":
        case "ne":
        case "nu":
        case "nee":
        case "noo":
        case "nae":
        case "ni":
        case "n":
            return "anuradha";
        case "no":
        case "ya":
        case "yi":
        case "uu":
        case "u":
        case "yu":
        case "y":
            return "jyeshta";
        case "ye":
        case "yo":
        case "ba":
        case "be":
        case "bhi":
        case "bha":
        case "bh":
        case "b":
            return "moola";
        case "bu":
        case "bhu":
        case "phu":
        case "f":
        case "dha":
        case "ea ":
        case "eaa":
            return "poorvashadha";
        case "be":
        case "bhe":
        case "bho":
        case "j":
        case "bo":
        case "ja":
        case "ji":
            return "uttarashadha";
        case "ju":
        case "khe":
        case "khee":
        case "khi":
        case "khu":
        case "kho":
        case "je":
        case "jo":
        case "q":
            return "sravana";
        case "ga":
        case "gi":
        case "gu":
        case "ge":
        case "gee":
        case "g":
            return "dhanista";
        case "go":
        case "sa":
        case "si":
        case "su":
            return "satabhisha";
        case "se":
        case "so":
        case "da":
        case "di":
            return "poorvabhadra";
        case "du":
        case "th":
        case "tha":
        case "jh":
        case "jna":
        case "jha":
        case "tra":
        case "z":
            return "uttarabhadra";
        case "de":
        case "do":
        case "cha":
        case "chi":
            return "revati";
        default:
            return "not matching";
    }
}

function submitfour() {
    var boynamethree = document.getElementById("bname").value.toLowerCase();
    var girlnamethree = document.getElementById("gname").value.toLowerCase();

    var boyNakshatra3 = "";
    var girlNakshatra3 = "";

    for (var i = 1; i <= Math.min(4, Math.max(boynamethree.length, girlnamethree.length)); i++) {

        var bSubstring = boynamethree.substring(0, i);
        var gSubstring = girlnamethree.substring(0, i);


        var currentBoyNakshatrathree = getNakshatra(bSubstring);
        var currentGirlNakshatrathree = getNakshatra(gSubstring);

        if (currentBoyNakshatrathree !== "not matching") {
            boyNakshatra3 = currentBoyNakshatrathree;
        }

        if (currentGirlNakshatrathree !== "not matching") {
            girlNakshatra3 = currentGirlNakshatrathree;
        }
    }

    if (boyNakshatra3 !== "" && girlNakshatra3 !== "") {

        submitSecondJsthree(boyNakshatra3, girlNakshatra3);
        submitSecondJsfour(boyNakshatra3, girlNakshatra3);
    } else {
        console.log("Nakshatra not found for both boy and girl.");
    }
}



const boysRashi3 = ["aswini", "bharani", "krittika", "rohini", "mrigasira", "ardra", "punarvasu", "pushyami", "aslesha", "magha", "poorvaphalguni", "uttaraphalguni", "hasta", "chitra", "swati", "visakha", "anuradha", "jyeshta", "moola", "poorvashadha", "uttarashadha", "sravana", "dhanista", "satabhisha", "poorvabhadra", "uttarabhadra", "revati"];

const girlsRashi3 = ["aswini", "bharani", "krittika", "rohini", "mrigasira", "ardra", "punarvasu", "pushyami", "aslesha", "magha", "poorvaphalguni", "uttaraphalguni", "hasta", "chitra", "swati", "visakha", "anuradha", "jyeshta", "moola", "poorvashadha", "uttarashadha", "sravana", "dhanista", "satabhisha", "poorvabhadra", "uttarabhadra", "revati"];


const tableData3 = [
    [null, "aswini", "bharani", "krittika", "rohini", "mrigasira", "ardra", "punarvasu", "pushyami", "aslesha", "magha", "poorvaphalguni", "uttaraphalguni", "hasta", "chitra", "swati", "visakha", "anuradha", "jyeshta", "moola", "poorvashadha", "uttarashadha", "sravana", "dhanista", "satabhisha", "poorvabhadra", "uttarabhadra", "revati"],

    ["aswini", 3, 3, 1.5, 3, 1.5, 3, 1.5, 3, 3, 3, 3, 1.5, 3, 1.5, 3, 1.5, 3, 3, 3, 3, 1.5, 3, 1.5, 3, 1.5, 3, 3],
    ["bharani", 3, 3, 1.5, 3, 1.5, 3, 1.5, 3, 3, 3, 3, 1.5, 3, 1.5, 3, 1.5, 3, 3, 3, 3, 1.5, 3, 1.5, 3, 1.5, 3, 3],
    ["krittika", 1.5, 1.5, 0, 1.5, 0, 1.5, 0, 1.5, 1.5, 1.5, 1.5, 0, 1.5, 0, 1.5, 0, 1.5, 1.5, 1.5, 1.5, 0, 1.5, 0, 1.5, 0, 1.5, 1.5],
    ["rohini", 3, 3, 1.5, 3, 1.5, 3, 1.5, 3, 3, 3, 3, 1.5, 3, 1.5, 3, 1.5, 3, 3, 3, 3, 1.5, 3, 1.5, 3, 1.5, 3, 3],
    ["mrigasira", 1.5, 1.5, 0, 1.5, 0, 1.5, 0, 1.5, 1.5, 1.5, 1.5, 0, 1.5, 0, 1.5, 0, 1.5, 1.5, 1.5, 1.5, 0, 1.5, 0, 1.5, 0, 1.5, 1.5],
    ["ardra", 3, 3, 1.5, 3, 1.5, 3, 1.5, 3, 3, 3, 3, 1.5, 3, 1.5, 3, 1.5, 3, 3, 3, 3, 1.5, 3, 1.5, 3, 1.5, 3, 3],
    ["punarvasu", 1.5, 1.5, 0, 1.5, 0, 1.5, 0, 1.5, 1.5, 1.5, 1.5, 0, 1.5, 0, 1.5, 0, 1.5, 1.5, 1.5, 1.5, 0, 1.5, 0, 1.5, 0, 1.5, 1.5],
    ["pushyami", 3, 3, 1.5, 3, 1.5, 3, 1.5, 3, 3, 3, 3, 1.5, 3, 1.5, 3, 1.5, 3, 3, 3, 3, 1.5, 3, 1.5, 3, 1.5, 3, 3,],
    ["aslesha", 3, 3, 1.5, 3, 1.5, 3, 1.5, 3, 3, 3, 3, 1.5, 3, 1.5, 3, 1.5, 3, 3, 3, 3, 1.5, 3, 1.5, 3, 1.5, 3, 3],


    ["magha", 3, 3, 1.5, 3, 1.5, 3, 1.5, 3, 3, 3, 3, 1.5, 3, 1.5, 3, 1.5, 3, 3, 3, 3, 1.5, 3, 1.5, 3, 1.5, 3, 3],
    ["poorvaphalguni", 3, 3, 1.5, 3, 1.5, 3, 1.5, 3, 3, 3, 3, 1.5, 3, 1.5, 3, 1.5, 3, 3, 3, 3, 1.5, 3, 1.5, 3, 1.5, 3, 3],
    ["uttaraphalguni", 1.5, 1.5, 0, 1.5, 0, 1.5, 0, 1.5, 1.5, 1.5, 1.5, 0, 1.5, 0, 1.5, 0, 1.5, 1.5, 1.5, 1.5, 0, 1.5, 0, 1.5, 0, 1.5, 1.5],
    ["hasta", 3, 3, 1.5, 3, 1.5, 3, 1.5, 3, 3, 3, 3, 1.5, 3, 1.5, 3, 1.5, 3, 3, 3, 3, 1.5, 3, 1.5, 3, 1.5, 3, 3],
    ["chitra", 1.5, 1.5, 0, 1.5, 0, 1.5, 0, 1.5, 1.5, 1.5, 1.5, 0, 1.5, 0, 1.5, 0, 1.5, 1.5, 1.5, 1.5, 0, 1.5, 0, 1.5, 0, 1.5, 1.5],
    ["swati", 3, 3, 1.5, 3, 1.5, 3, 1.5, 3, 3, 3, 3, 1.5, 3, 1.5, 3, 1.5, 3, 3, 3, 3, 1.5, 3, 1.5, 3, 1.5, 3, 3],
    ["visakha", 1.5, 1.5, 0, 1.5, 0, 1.5, 0, 1.5, 1.5, 1.5, 1.5, 0, 1.5, 0, 1.5, 0, 1.5, 1.5, 1.5, 1.5, 0, 1.5, 0, 1.5, 0, 1.5, 1.5],
    ["anuradha", 3, 3, 1.5, 3, 1.5, 3, 1.5, 3, 3, 3, 3, 1.5, 3, 1.5, 3, 1.5, 3, 3, 3, 3, 1.5, 3, 1.5, 3, 1.5, 3, 3],
    ["jyeshta", 3, 3, 1.5, 3, 1.5, 3, 1.5, 3, 3, 3, 3, 1.5, 3, 1.5, 3, 1.5, 3, 3, 3, 3, 1.5, 3, 1.5, 3, 1.5, 3, 3],


    ["moola", 3, 3, 1.5, 3, 1.5, 3, 1.5, 3, 3, 3, 3, 1.5, 3, 1.5, 3, 1.5, 3, 3, 3, 3, 1.5, 3, 1.5, 3, 1.5, 3, 3],
    ["poorvashadha", 3, 3, 1.5, 3, 1.5, 3, 1.5, 3, 3, 3, 3, 1.5, 3, 1.5, 3, 1.5, 3, 3, 3, 3, 1.5, 3, 1.5, 3, 1.5, 3, 3],
    ["uttarashadha", 1.5, 1.5, 0, 1.5, 0, 1.5, 0, 1.5, 1.5, 1.5, 1.5, 0, 1.5, 0, 1.5, 0, 1.5, 1.5, 1.5, 1.5, 0, 1.5, 0, 1.5, 0, 1.5, 1.5],
    ["sravana", 3, 3, 1.5, 3, 1.5, 3, 1.5, 3, 3, 3, 3, 1.5, 3, 1.5, 3, 1.5, 3, 3, 3, 3, 1.5, 3, 1.5, 3, 1.5, 3, 3],
    ["dhanista", 1.5, 1.5, 0, 1.5, 0, 1.5, 0, 1.5, 1.5, 1.5, 1.5, 0, 1.5, 0, 1.5, 0, 1.5, 1.5, 1.5, 1.5, 0, 1.5, 0, 1.5, 0, 1.5, 1.5],
    ["satabhisha", 3, 3, 1.5, 3, 1.5, 3, 1.5, 3, 3, 3, 3, 1.5, 3, 1.5, 3, 1.5, 3, 3, 3, 3, 1.5, 3, 1.5, 3, 1.5, 3, 3],
    ["poorvabhadra", 1.5, 1.5, 0, 1.5, 0, 1.5, 0, 1.5, 1.5, 1.5, 1.5, 0, 1.5, 0, 1.5, 0, 1.5, 1.5, 1.5, 1.5, 0, 1.5, 0, 1.5, 0, 1.5, 1.5],
    ["uttarabhadra", 3, 3, 1.5, 3, 1.5, 3, 1.5, 3, 3, 3, 3, 1.5, 3, 1.5, 3, 1.5, 3, 3, 3, 3, 1.5, 3, 1.5, 3, 1.5, 3, 3],
    ["revati", 3, 3, 1.5, 3, 1.5, 3, 1.5, 3, 3, 3, 3, 1.5, 3, 1.5, 3, 1.5, 3, 3, 3, 3, 1.5, 3, 1.5, 3, 1.5, 3, 3],

];

function submitSecondJsthree(boyNakshatra3, girlNakshatra3) {
    const rowIndex3 = girlsRashi3.indexOf(girlNakshatra3);
    const columnIndex3 = boysRashi3.indexOf(boyNakshatra3);

    if (rowIndex3 !== -1 && columnIndex3 !== -1) {
        const cellValue = tableData3[rowIndex3 + 1][columnIndex3 + 1];
        var table3 = ` ${cellValue}`;
        console.log("table3", table3)
    } else {
        console.log("Invalid input. Please enter valid Rashi values.");
    }
}

const boysRashi4 = ["aswini", "bharani", "pushyami", "rohini", "moola", "aslesha", "magha", "uttaraphalguni", "swati", "visakha", "jyeshta", "poorvashadha", "poorvabhadra", "uttarashadha",
    "satabhisha", "revati", "krittika", "mrigasira", "ardra", "punarvasu", "poorvaphalguni", "uttarabhadra", "hasta", "chitra", "anuradha", "sravana", "dhanista", "abhijit"];

const girlsRashi4 = ["aswini", "bharani", "pushyami", "rohini", "moola", "aslesha", "magha", "uttaraphalguni", "swati", "visakha", "jyeshta", "poorvashadha", "poorvabhadra", "uttarashadha",
    "satabhisha", "revati", "krittika", "mrigasira", "ardra", "punarvasu", "poorvaphalguni", "uttarabhadra", "hasta", "chitra", "anuradha", "sravana", "dhanista", "abhijit"];


const tableData4 = [
    [null, "aswini", "bharani", "pushyami", "rohini", "moola", "aslesha", "magha", "uttaraphalguni", "swati", "visakha", "jyeshta", "poorvashadha", "poorvabhadra", "uttarashadha",
    "satabhisha", "revati", "krittika", "mrigasira", "ardra", "punarvasu", "poorvaphalguni", "uttarabhadra", "hasta", "chitra", "anuradha", "sravana", "dhanista", "abhijit"],

    ["aswini", 4, 2, 2, 2, 2, 2, 2, 3, 1, 1, 3, 3, 2, 1, 4, 2, 2, 2, 2, 2, 2, 3, 1, 1, 3, 3, 2, 1],
["bharani", 2, 4, 3, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 0, 2, 4, 3, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 0],
    ["pushyami", 3, 3, 4, 3, 2, 3, 2, 3, 3, 1, 3, 0, 3, 1, 3, 3, 4, 3, 2, 3, 2, 3, 3, 1, 3, 0, 3, 1],
    ["rohini", 2, 2, 3, 4, 2, 3, 1, 3, 2, 2, 2, 2, 0, 2, 2, 2, 3, 4, 2, 3, 1, 3, 2, 2, 2, 2, 0, 2],
    ["moola", 2, 2, 2, 2, 4, 1, 1, 2, 2, 1, 0, 2, 2, 1, 2, 2, 2, 2, 4, 1, 1, 2, 2, 1, 0, 2, 2, 1],
    ["aslesha", 2, 2, 3, 2, 1, 4, 0, 2, 2, 1, 2, 2, 2, 2, 2, 2, 3, 2, 1, 4, 0, 2, 2, 1, 2, 2, 2, 2],
    ["magha", 2, 3, 2, 1, 1, 0, 4, 2, 2, 2, 2, 2, 2, 1, 2, 3, 2, 1, 1, 0, 4, 2, 2, 2, 2, 2, 2, 1],
    ["uttaraphalguni", 3, 2, 3, 1, 2, 2, 2, 4, 3, 0, 3, 2, 3, 1, 3, 2, 3, 1, 2, 2, 2, 4, 3, 0, 3, 2, 3, 1],
    ["swati", 1, 3, 3, 2, 2, 2, 2, 3, 4, 1, 2, 2, 2, 3, 1, 3, 3, 2, 2, 2, 2, 3, 4, 1, 2, 2, 2, 3],
    ["visakha", 1, 2, 1, 2, 1, 1, 2, 0, 1, 4, 1, 1, 2, 2, 1, 2, 1, 2, 1, 1, 2, 0, 1, 4, 1, 1, 2, 2],
    ["jyeshta", 3, 2, 3, 2, 0, 2, 2, 3, 2, 1, 4, 2, 2, 2, 3, 2, 3, 2, 0, 2, 2, 3, 2, 1, 4, 2, 2, 2],
    ["poorvashadha", 2, 3, 0, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 3, 2, 3, 0, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 3],
    ["poorvabhadra", 2, 2, 3, 0, 2, 2, 2, 3, 2, 2, 2, 2, 4, 2, 2, 2, 3, 0, 2, 2, 2, 3, 2, 2, 2, 2, 4, 2],
    ["uttarashadha", 1, 0, 1, 2, 1, 2, 1, 1, 3, 2, 2, 3, 2, 4, 1, 0, 1, 2, 1, 2, 1, 1, 3, 2, 2, 3, 2, 4],


    ["satabhisha", 4, 2, 2, 2, 2, 2, 2, 3, 1, 1, 3, 3, 2, 1, 4, 2, 2, 2, 2, 2, 2, 3, 1, 1, 3, 3, 2, 1],
    ["revati", 2, 4, 3, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 0, 2, 4, 3, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 0],
    ["krittika", 3, 3, 4, 3, 2, 3, 2, 3, 3, 1, 3, 0, 3, 1, 3, 3, 4, 3, 2, 3, 2, 3, 3, 1, 3, 0, 3, 1],
    ["mrigasira", 2, 2, 3, 4, 2, 3, 1, 3, 2, 2, 2, 2, 0, 2, 2, 2, 3, 4, 2, 3, 1, 3, 2, 2, 2, 2, 0, 2],
    ["ardra", 2, 2, 2, 2, 4, 1, 1, 2, 2, 1, 0, 2, 2, 1, 2, 2, 2, 2, 4, 1, 1, 2, 2, 1, 0, 2, 2, 1],
    ["punarvasu", 2, 2, 3, 2, 1, 4, 0, 2, 2, 1, 2, 2, 2, 2, 2, 2, 3, 2, 1, 4, 0, 2, 2, 1, 2, 2, 2, 2],
    ["poorvaphalguni", 2, 3, 2, 1, 1, 0, 4, 2, 2, 2, 2, 2, 2, 1, 2, 3, 2, 1, 1, 0, 4, 2, 2, 2, 2, 2, 2, 1],
    ["uttarabhadra", 3, 2, 3, 1, 2, 2, 2, 4, 3, 0, 3, 2, 3, 1, 3, 2, 3, 1, 2, 2, 2, 4, 3, 0, 3, 2, 3, 1],
    ["hasta", 1, 3, 3, 2, 2, 2, 2, 3, 4, 1, 2, 2, 2, 3, 1, 3, 3, 2, 2, 2, 2, 3, 4, 1, 2, 2, 2, 3],
    ["chitra", 1, 2, 1, 2, 1, 1, 2, 0, 1, 4, 1, 1, 2, 2, 1, 2, 1, 2, 1, 1, 2, 0, 1, 4, 1, 1, 2, 2],
    ["anuradha", 3, 2, 3, 2, 0, 2, 2, 3, 2, 1, 4, 2, 2, 2, 3, 2, 3, 2, 0, 2, 2, 3, 2, 1, 4, 2, 2, 2],
    ["sravana", 2, 3, 0, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 3, 2, 3, 0, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 3],
    ["dhanista", 2, 2, 3, 0, 2, 2, 2, 3, 2, 2, 2, 2, 4, 2, 2, 2, 3, 0, 2, 2, 2, 3, 2, 2, 2, 2, 4, 2],
    ["abhijit", 1, 0, 1, 2, 1, 2, 1, 1, 3, 2, 2, 3, 2, 4, 1, 0, 1, 2, 1, 2, 1, 1, 3, 2, 2, 3, 2, 4],

];

function submitSecondJsfour(boyNakshatra3, girlNakshatra3) {
    const rowIndex4 = girlsRashi4.indexOf(girlNakshatra3);
    const columnIndex4 = boysRashi4.indexOf(boyNakshatra3);

    if (rowIndex4 !== -1 && columnIndex4 !== -1) {
        const cellValue = tableData3[rowIndex4 + 1][columnIndex4 + 1];
        var table4 = ` ${cellValue}`;
        console.log("table4", table4)
    } else {
        console.log("Invalid input. Please enter valid Rashi values.");
    }
}