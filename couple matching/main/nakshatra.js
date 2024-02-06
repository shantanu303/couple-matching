// function getNakshatra(firstCharacter) {
//     // firstCharacter = firstCharacter.toLowerCase();
//     switch (firstCharacter.toLowerCase()) {
//         case "chu":
//         case "che":
//         case "cho":
//         case "la":
//             return "aswini";

//         case "lee":
//         case "lu":
//         case "e":
//         case "lo":
//             return "bharani"

//         case "a":
//         case "e":
//         case "u":
//         case "ea":
//             return "kritika";

//         case "o":
//         case "va":
//         case "vi":
//         case "vu":
//             return "rohini";

//         case "we":
//         case "wo":
//         case "ka":
//         case "ki":
//             return "mrigashira";

//         case "ku":
//         case "gha":
//         case "ing":
//         case "jha":
//             return "aardhra";

//         case "ke":
//         case "ko":
//         case "ha":
//         case "hi":
//             return "punarvasu";

//         case "hu":
//         case "he":
//         case "ho":
//         case "da":
//             return "pushyami";
//         case "de":
//         case "du":
//         case "de":
//         case "do":
//             return "ashlesha";
//         case "ma":
//         case "me":
//         case "mu":
//         case "me":
//             return "magha";
//         case "mo":
//         case "ta":
//         case "ti":
//         case "tu":
//             return "poorva phalguni";

//         case "te":
//         case "to":
//         case "pa":
//         case "pe":
//             return "uttara phalguni";

//         case "pu":
//         case "sha":
//         case "na":
//         case "teha":

//             return "hasta";
//         case "pe":
//         case "po":
//         case "ra":
//         case "re":
//             return "chitra";

//         case "ru":
//         case "re":
//         case "ro":
//         case "taa":
//             return "swaati";


//         case "tee":
//         case "tue":
//         case "teaa":
//         case "too":
//             return "vishaakha";

//         case "na":
//         case "ne":
//         case "nu":
//         case "ne":
//             return "anuraadha";

//         case "no":
//         case "ya":
//         case "yi":
//         case "uu":
//             return "jyeshtha";

//         case "ye":
//         case "yo":
//         case "ba":
//         case "be":
//             return "moola";

//         case "bu":
//         case "dha":
//         case "ea ":
//         case "eaa":
//             return "poorva shaada";

//         case "be":
//         case "bo":
//         case "ja":
//         case "ji":
//             return "uttarashaada";

//         case "ju":
//         case "je":
//         case "jo":
//         case "sha":

//             return "shravan";


//         case "ga":
//         case "gi":
//         case "gu":
//         case "ge":
//             return "dhanishta";

//         case "go":
//         case "sa":
//         case "si":
//         case "su":
//             return "shatabhisha";

//         case "se":
//         case "so":
//         case "da":
//         case "di":
//             return "poorvabhadra";


//         case "du":
//         case "th":
//         case "jh":
//         case "jna":
//             return "uttara bhadra";


//         case "de":
//         case "do":
//         case "cha":
//         case "chi":
//             return "revati";

//         default:
//             return "not matching";
//     }
// }

// function submit() {
//     var shantanuName = document.getElementById("bname").value.toLowerCase();
//     var asthaName = document.getElementById("gname").value.toLowerCase();

//     for (var i = 1; i <= 3; i++) {
//         var shantanuFirstCharacters = shantanuName.substring(0, i);
//         var asthaFirstCharacters = asthaName.substring(0, i);

//         if (shantanuFirstCharacters === asthaFirstCharacters) {
//             console.log("First " + i + " characters match. Nakshatra:", getNakshatra(shantanuFirstCharacters));
//             return; // Stop further checking if a match is found
//         }
//     }

//     console.log("No matching conditions found.");
// }
function getNakshatra(firstCharacters) {
    switch (firstCharacters.toLowerCase()) {
        case "chu":
        case "che":
        case "cho":
        case "la":
            return "aswini";

        case "li":
        case "lu":
        case "le":
        case "lo":
            return "bharani";

        case "a":
        case "e":
        case "u":
        case "ea":
            return "kritika";

        case "o":
        case "va":
        case "vi":
        case "vu":
            return "rohini";

        case "we":
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
            return "punarvasu";

        case "hu":
        case "he":
        case "ho":
        case "da":
            return "pushyami";

        case "de":
        case "du":
        case "dei":
        case "doi":
            return "ashlesha";

        case "ma":
        case "mi":
        case "mu":
        case "me":
            return "magha";

        case "mo":
        case "ta":
        case "ti":
        case "tu":
            return "poorva phalguni";

        case "te":
        case "to":
        case "pa":
        case "pe":
            return "uttara phalguni";

        case "pu":
        case "sha":
        case "na":
        case "teha":
            return "hasta";

        case "pee":
        case "poi":
        case "ra":
        case "re":
            return "chitra";

        case "ru":
        case "rei":
        case "ro":
        case "taa":
            return "swaati";

        case "tee":
        case "tue":
        case "teaa":
        case "too":
            return "vishaakha";

        case "na":
        case "ne":
        case "nu":
        case "nei":
            return "anuraadha";

        case "no":
        case "ya":
        case "yi":
        case "uu":
            return "jyeshtha";

        case "ye":
        case "yo":
        case "ba":
        case "be":
            return "moola";

        case "bu":
        case "dha":
        case "ea":
        case "eaa":
            return "poorva shaada";

        case "bei":
        case "bo":
        case "ja":
        case "ji":
            return "uttarashaada";

        case "ju":
        case "je":
        case "jo":
        case "sha":
            return "shravan";

        case "ga":
        case "gi":
        case "gu":
        case "ge":
            return "dhanishta";

        case "go":
        case "sa":
        case "si":
        case "su":
            return "shatabhisha";

        case "sei":
        case "so":
        case "da":
        case "di":
            return "poorvabhadra";

        case "du":
        case "th":
        case "jh":
        case "jna":
            return "uttara bhadra";

        case "de":
        case "doi":
        case "cha":
        case "chi":
            return "revati";

        default:
            return "not matching";
    }
}

function submit() {
    var boyName = document.getElementById("bname").value;
    var girlName = document.getElementById("gname").value;

    var bfirstCharacter = boyName.charAt(0);
    var gfirstCharacter = girlName.charAt(0);

    console.log("Boy's Rashi:", getRashi(bfirstCharacter));
    console.log("Girl's Rashi:", getRashi(gfirstCharacter));

}