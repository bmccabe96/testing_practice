import analyzeArray from './analyzeArray.js';

test('Simple case', () => {
    expect(analyzeArray([5,1,1,5,3]))
    .toEqual({
        'average': 3,
        'min': 1,
        'max': 5,
        'length': 5
    });
});
