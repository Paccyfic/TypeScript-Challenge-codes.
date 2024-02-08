//5. Write a function that takes a sentence string and returns the number of vowels in the sentence.

function vowelsNumber(sentence: string): void {
    const vowels: string = "aeiouAEIOU";
    let vowelCount: number = 0;

    for (let i: number = 0; i < sentence.length; i++) {
        if (vowels.includes(sentence[i])) {
            vowelCount++;
        }
    }

    console.log(`The number of vowels in the sentence is: ${vowelCount}`);
}


const inputSentence: string = "This is an example sentence";
vowelsNumber(inputSentence);
