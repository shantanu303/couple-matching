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

function submittwo() {
    var boynamesix = document.getElementById("bname").value.toLowerCase();
    var girlnamesix = document.getElementById("gname").value.toLowerCase();

    var boyNakshatra6 = "";
    var girlNakshatra6 = "";

    for (var i = 1; i <= Math.min(4, Math.max(boynamesix.length, girlnamesix.length)); i++) {

        var bSubstring = boynamesix.substring(0, i);
        var gSubstring = girlnamesix.substring(0, i);


        var currentBoyNakshatrasix = getNakshatra(bSubstring);
        var currentGirlNakshatrasix = getNakshatra(gSubstring);

        if (currentBoyNakshatrasix !== "not matching") {
            boyNakshatra6 = currentBoyNakshatrasix;
        }

        if (currentGirlNakshatrasix !== "not matching") {
            girlNakshatra6 = currentGirlNakshatrasix;
        }
    }

    if (boyNakshatra6 !== "" && girlNakshatra6 !== "") {

        submitSecondJs(boyNakshatra6, girlNakshatra6);
    } else {
        console.log("Nakshatra not found for both boy and girl.");
    }
}

function tableSix(firstCharacters) {
    switch (firstCharacters.toLowerCase()) {
        case "aswini":
        case "mrigasira":
        case "punarvasu":
        case "pushyami":
        case "hasta":
        case "anuradha":
        case "sravana":
        case "revati":
        case "swati":
            return "deva";
        case "bharani":
        case "rohini":
        case "ardra":
        case "poorvaphalguni":
        case "uttaraphalguni":
        case "poorvashadha":
        case "uttarashadha":
        case "poorvabhadra":
        case "uttarabhadra":
            return "manushya";
        case "krittika":
        case "aslesha":
        case "magha":
        case "chitra":
        case "visakha":
        case "jyeshta":
        case "moola":
        case "dhanista":
        case "satabhisha":
            return "rakshasa";
        default:
            return "not matching";
    }
}

function submitSecondJs(boyNakshatra6, girlNakshatra6) {
    var boyRashi6 = tableSix(boyNakshatra6);
    var girlRashi6 = tableSix(girlNakshatra6);

    displayValue(boyRashi6, girlRashi6);
}


const boyNakshatrasix = ["deva", "manushya", "rakshasa"];

const girlNakshatrasix = ["deva", "manushya", "rakshasa"];

const tableDatasix = [
    [null, "deva", "manushya", "rakshasa"],
    ["deva", 6, 6, 0],
    ['manushya', 5, 6, 0],
    ["rakshasa", 1, 0, 6],
]

function displayValue(boyRashi6, girlRashi6) {

    // const rowIndex6 = girlNakshatrasix ? girlNakshatrasix.indexOf(girlRashi6) + 1 : 0;
    // const columnIndex6 = boyNakshatrasix ? boyNakshatrasix.indexOf(boyRashi6) + 1 : 0;
     const rowIndex6 = girlNakshatrasix.indexOf(girlRashi6) + 1;
    const columnIndex6 = boyNakshatrasix.indexOf(boyRashi6) + 1;

    if (rowIndex6 > 0 && columnIndex6 > 0) {
        const cellValue = tableDatasix[rowIndex6][columnIndex6];
        var table6 = console.log(`table6: ${cellValue}`);
    } else {
        console.log("Invalid input. Please enter valid Rashi values.");
    }
}

function getNakshatra8(firstCharacter) {
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

function submitthree() {
    var boyName = document.getElementById("bname").value.toLowerCase();
    var girlName = document.getElementById("gname").value.toLowerCase();


    var boyNakshatra8 = "";
    var girlNakshatra8 = "";

    for (var i = 1; i <= Math.min(4, Math.max(boyName.length, girlName.length)); i++) {

        var bSubstring = boyName.substring(0, i);
        var gSubstring = girlName.substring(0, i);

        var currentBoyNakshatra = getNakshatra8(bSubstring);
        var currentGirlNakshatra = getNakshatra8(gSubstring);

        if (currentBoyNakshatra !== "not matching") {
            boyNakshatra8 = currentBoyNakshatra;
        }

        if (currentGirlNakshatra !== "not matching") {
            girlNakshatra8 = currentGirlNakshatra;
        }
    }

    if (boyNakshatra8 !== "" && girlNakshatra8 !== "") {
        submitSecondJs(boyNakshatra8, girlNakshatra8);
    } else {
        console.log("Nakshatra not found for both boy and girl.");
    }
}

function tableEight(firstCharacters) {
    switch (firstCharacters.toLowerCase()) {

        case "aswini":
        case "ardra":
        case "punarvasu":
        case "uttaraphalguni":
        case "hasta":
        case "jyeshta":
        case "moola":
        case "satabhisha":
        case "poorvabhadra":
            return "adi";

        case "bharani":
        case "mrigasira":
        case "pushyami":
        case "poorvaphalguni":
        case "chitra":
        case "anuradha":
        case "dhanista":
        case "poorvashadha":
        case "uttarabhadra":
            return "madhya";

        case "krittika":
        case "rohini":
        case "aslesha":
        case "magha":
        case "swati":
        case "visakha":
        case "uttarashadha":
        case "sravana":
        case "revati":
            return "antya";

        default:
            return "not matching";
    }
}

function submitSecondJs(boyNakshatra8, girlNakshatra8) {
    var boyRashi6 = tableEight(boyNakshatra8);
    var girlRashi6 = tableEight(girlNakshatra8);

    var boysname = tableEight(boyNakshatra8);
    var girlsname = tableEight(girlNakshatra8);

    if (boysname === girlsname) {
        var table8 = console.log("table8 :0");
    }
    else {
        var table8 = console.log("table8 :8")
    }
}

function submit() {
    submitone();
    submittwo();
    submitthree();
}