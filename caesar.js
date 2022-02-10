const caesar = (s, shift) => {
    shift = shift % 26;
    let cypher = '';
    for (let i = 0; i < s.length; i++) {
        //lowers
        if (s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122) {
            let newCode = s.charCodeAt(i) + shift;
            if (newCode > 122) {
                newCode = 96 + (newCode - 122);
            }
            cypher += String.fromCharCode(newCode);
        }
        //uppers
        else if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) {
            let newCode = s.charCodeAt(i) + shift;
            if (newCode > 90) {
                newCode = 64 + (newCode - 90);
            }
            cypher += String.fromCharCode(newCode);
        }
        //if whitespace, skip
        else if (s[i] === ' ') {
            cypher += ' ';
        }
        else {
            return "Not a valid message";
        }
    }
    return cypher;
};


export default caesar;