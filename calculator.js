const calculator = {
    add: (a, b) => a + b,
    sub: (a, b) => a - b,
    mult: (a, b) => a * b,
    div: (a, b) => b == 0 ? 'Cannot divide by zero' : a / b,
};

export default calculator;