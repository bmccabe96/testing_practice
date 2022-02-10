function isCharacterALetter(char) {
    return (/[a-zA-Z]/).test(char)
  }

const capitalize = (s) => {
    try {
        if (!isCharacterALetter(s.charAt(0))) {
            return "Not a valid string";
        }
        return s.split('')[0].toUpperCase() + s.split('').splice(1).join('');
    } catch (error) {
        return "Not a valid string";
    }
}

export default capitalize;