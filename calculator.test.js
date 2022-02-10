import calc from './calculator.js';

test('Test adding', () => {
    expect(calc.add(1, 3))
    .toBe(4);
});
test('Test subtracting', () => {
    expect(calc.sub(5, 3))
    .toBe(2);
});
test('Test multiplying', () => {
    expect(calc.mult(2, 3))
    .toBe(6);
});
test('Test dividing', () => {
    expect(calc.div(12, 3))
    .toBe(4);
});

test('test divide by zero', () => {
    expect(calc.div(10,0))
    .toBe('Cannot divide by zero');
});