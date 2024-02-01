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
        case "dd":
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
            return "khumbha";
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

    var bfirstCharacter = boyName.charAt(0);
    var gfirstCharacter = girlName.charAt(0);

    console.log("Boy's Rashi:", getRashi(bfirstCharacter));
    console.log("Girl's Rashi:", getRashi(gfirstCharacter));
    
}
