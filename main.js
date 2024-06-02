import inquirer from "inquirer";
const answers = await inquirer.prompt({
    name: "Sentence",
    type: "input",
    message: "Enter your sentence to count the word:"
});
const words = answers.Sentence.trim().split(" ");
console.log(words);
//print the words counts of the  sentence of the console
console.log(`your sentence word count is ${words.length}`);
