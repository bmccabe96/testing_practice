const reverseString = (s) => {
    let newString = '';
    for(let i = s.length - 1; i >= 0; i--) {
        newString += s[i];
    }
    return newString;
};

export default reverseString;