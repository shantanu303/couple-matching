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

        submitSecondJssix(boyNakshatra6, girlNakshatra6);
    } else {
        console.log("Nakshatra not found for both boy and girl.");
    }
}

function tablesix(firstCharacters) {
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

function submitSecondJssix(boyNakshatra6, girlNakshatra6) {
    var boyRashi6 = tablesix(boyNakshatra6);
    var girlRashi6 = tablesix(girlNakshatra6);

    // console.log("Boy's Rashi:", boyRashi6);
    // console.log("Girl's Rashi:", girlRashi6);

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

    const rowIndex6 = girlNakshatrasix ? girlNakshatrasix.indexOf(girlRashi6) + 1 : 0;
    const columnIndex6 = boyNakshatrasix ? boyNakshatrasix.indexOf(boyRashi6) + 1 : 0;

    if (rowIndex6 > 0 && columnIndex6 > 0) {
        const cellValue = tableDatasix[rowIndex6][columnIndex6];
        table6 = console.log(`table6: ${cellValue}`);
    } else {
        console.log("Invalid input. Please enter valid Rashi values.");
    }
}
