import caesar from './caesar.js';

test('Simple one shift', () => {
    expect(caesar('abcd', 1))
    .toBe('bcde');
});

test('Simple multi shift', () => {
    expect(caesar('abcd', 3))
    .toBe('defg');
});

test('Wrapping from z to a', () => {
    expect(caesar('xyz', 1))
    .toBe('yza');
});

test('More than one word and upper', () => {
    expect(caesar('abc Def', 1))
    .toBe('bcd Efg');
});

test('Test large shift', () => {
    expect(caesar('abcd', 50))
    .toBe('yzab');
});

test('Test caps and lower', () => {
    expect(caesar('ABcd', 1))
    .toBe('BCde');
});

test('invalid string', () => {
    expect(caesar('ab1dd', 1))
    .toBe('Not a valid message');
});


