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
            return "bharani"

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
            return "mrigashira";

        case "ku":
        case "gha":
        case "ing":
        case "jha":
            return "aardhra";

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
        case "de":
        case "do":
        case "dee":
        case "doo":
        case "day":
        case "di":
        case "d":
            return "ashlesha";

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
            return "poorva phalguni";

        case "te":
        case "to":
        case "pa":
        case "pe":
            return "uttara phalguni";

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
            return "swaati";


        case "tee":
        case "tue":
        case "teaa":
        case "too":
            return "vishaakha";

        case "na":
        case "ne":
        case "nu":
        case "nee":
        case "noo":
        case "nae":
        case "ni":
        case "n":
            return "anuraadha";

        case "no":
        case "ya":
        case "yi":
        case "uu":
        case "u":
        case "yu":
        case "y":
            return "jyeshtha";

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
            return "poorvashaada";

        case "be":
        case "bhe":
        case "bho":
        case "j":
        case "bo":
        case "ja":
        case "ji":
            return "uttarashaada";

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
            return "dhanishta";

        case "go":
        case "sa":
        case "si":
        case "su":
            return "shatabhisha";

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
            return "uttara bhadra";


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

    for (var i = 1; i <= Math.min(4, Math.max(boyName.length, girlName.length)); i++) {
        var bSubstring = boyName.substring(0, i);
        var gSubstring = girlName.substring(0, i);

        var boyNakshatra = getNakshatra(bSubstring);
        var girlNakshatra = getNakshatra(gSubstring);

        if (boyNakshatra !== "not matching") {
            console.log("Boy's Nakshatra:", boyNakshatra);
        }

        if (girlNakshatra !== "not matching") {
            console.log("Girl's Nakshatra:", girlNakshatra);
        }
    }
}