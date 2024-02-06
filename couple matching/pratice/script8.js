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
            return "shravan";
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

function submit() {
    var boyName = document.getElementById("bname").value.toLowerCase();
    var girlName = document.getElementById("gname").value.toLowerCase();

    var boyNakshatra8 = "";
    var girlNakshatra8 = "";

    for (var i = 1; i <= Math.min(4, Math.max(boyName.length, girlName.length)); i++) {
        var bSubstring = boyName.substring(0, i);
        var gSubstring = girlName.substring(0, i);

        var currentBoyNakshatra = getNakshatra(bSubstring);
        var currentGirlNakshatra = getNakshatra(gSubstring);

        if (currentBoyNakshatra !== "not matching") {
            boyNakshatra8 = currentBoyNakshatra;
        }

        if (currentGirlNakshatra !== "not matching") {
            girlNakshatra8 = currentGirlNakshatra;
        }
    }

    if (boyNakshatra8 !== "" && girlNakshatra8 !== "") {
        // console.log("Boy's Nakshatra:", boyNakshatra);
        // console.log("Girl's Nakshatra:", girlNakshatra);
        submitSecondJs(boyNakshatra8, girlNakshatra8);
    } else {
        console.log("Nakshatra not found for both boy and girl.");
    }
}

function tableeight(firstCharacters) {
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
    var boyRashi6 = tableeight(boyNakshatra8);
    var girlRashi6 = tableeight(girlNakshatra8);

    var boysname = tableeight(boyNakshatra8);
    var girlsname = tableeight(girlNakshatra8);

    if (boysname === girlsname) {
        var table8 = console.log("table :0");
    }
    else {
        var table8 = console.log("table :8")
    }
}