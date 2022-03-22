export default class Helper {
    
    wordLength = word => word.split('').length; //return the length of the word passed in the parameter.

    longestWordInASentence = sentence => {
        if(!sentence || !sentence.length) return undefined;
        //we can also return 0 which will be a falsy value.
        //if we return a string with a message e.g. 'error', the unit tests will fail.
        const wordsArray = sentence.split(' '); 
        //since in a sentence new words starts after a space we will split the sentence in chunks after any space occurs.
        
        let longestWord, maxLength = 0;
        wordsArray.forEach(word => {
            const length = this.wordLength(word);
            if(length > maxLength){ 
                //if the condition returns truthy we will replace the value for 'maxLength' & 'longestWord' objects.
                longestWord = word;
                maxLength = length;
            }
        })

        return {maxLength, longestWord}
    } 

}
//testing