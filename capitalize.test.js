import cap from "./capitalize.js";

test('test capitalizing one word', () => {
    expect(cap('hello'))
    .toBe('Hello');
});

test('test capitalized word remains untouched', () => {
    expect(cap('Hello'))
    .toBe('Hello');
});

test('test multiple words', () => {
    expect(cap('testing words yo'))
    .toBe('Testing words yo');
});

test('not valid string (number)', () => {
    expect(cap(134))
    .toBe('Not a valid string');
});

test('not a valid string (word that has first char as a non letter)', () => {
    expect(cap('1heyhey youyou I don\'t like your girlfriend'))
    .toBe("Not a valid string");
});

