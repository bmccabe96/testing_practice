import reverse from "./reverseString.js";

test('reverse simple word', () => {
    expect(reverse('hello'))
    .toBe('olleh');
});

test('reverse a sentence', () => {
    expect(reverse('Brian is cool'))
    .toBe('looc si nairB');
});
