import Helper from '../code/helper.js'
const helper = new Helper(); //instantiate the Helper class so you can access the methods inside it.

describe('Unit tests for longestWordInASentence method implementation', () => {

    test('An empty sentence should return falsy', () => {
        const result = helper.longestWordInASentence('');
        expect(result).toBeFalsy();
    })

    test('An empty parameter should return falsy', () => {
        const result = helper.longestWordInASentence();
        expect(result).toBeFalsy();
    })

    test("One word sentence should return the word & it's length", () => {
        const {maxLength, longestWord} = helper.longestWordInASentence('Hello');
        // console.log(`Max length: ${maxLength}. Longest word: ${longestWord}`) //we can use console logs for debugging purpose.
        expect(maxLength).toEqual(5);
        expect(longestWord).toMatch('Hello');
    })

    test('Max length of the longest word in a full sentence', () => {
        const {maxLength, longestWord} = helper.longestWordInASentence('The cow jumped over the moon.');
        expect(maxLength).toEqual(6);
        expect(longestWord).toMatch('jumped');
    })

    test('Passing a number instead of a string in the parameter should return falsy', () => {
        const result = helper.longestWordInASentence(123);
        expect(result).toBeFalsy();
    })

    test("Passing a number in string format should return the number and it's length", () => {
        const {maxLength, longestWord} = helper.longestWordInASentence('123');
        expect(maxLength).toEqual(3);
        expect(longestWord).toMatch('123');
    })

    test("Passing special characters as string in a sentence", () => {
        const {maxLength, longestWord} = helper.longestWordInASentence('When the cow got angry he screamed m@@@@@@@@');
        //special characters in a word will be treated as valid & will be counted as part of the word
        expect(maxLength).toBeTruthy()
        expect(longestWord).toMatch('m@@@@@@@@');
    })
})