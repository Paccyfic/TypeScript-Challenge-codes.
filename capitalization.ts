//6. Write a function that capitalizes the first letter of each word in a sentence.

function capitalizeWords(sentence: string): void {
    const words: string[] = sentence.split(" ");
    const capitalizedWords: string[] = [];

    for (const word of words) {
        const capitalizedWord: string = word.charAt(0).toUpperCase() + word.slice(1);
        capitalizedWords.push(capitalizedWord);
    }

    const capitalizedSentence: string = capitalizedWords.join(" ");
    console.log(`Original sentence: ${sentence}`);
    console.log(`Capitalized sentence: ${capitalizedSentence}`);
}


const inputSentence: string = "this is a pacific's sentence example.";
capitalizeWords(inputSentence);
