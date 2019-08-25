var questions = [
    [1, "Edward in the Twilight series is a 'vegetarian vampire', meaning he drinks only non-human, animal blood.", "true"],
    [2, "The African elephant is the largest carnivore on land.", "false"],
    [3, "The deadliest weapon of World War I was the machine gun.", "true"],
    [4, "In the famous novel of the same name, Frankenstein is a monster constructed from body parts.", "false"],
    [5, "Dracula was a real-life figure in history.", "false"],
    [6, "Tug-of-war was once an Olympic sport", "true"]
];

var answer;
var response;

for (var i = 0; i < questions.length; i += 1) {

    answer = prompt(questions[i][1]);
    response = answer.toLocaleLowerCase();

    if (response === questions[i][2]) {
        document.write(`<h2>Question ${questions[i][0]} correct.</h2>`);
    } else {
        document.write(`<h2>Question ${questions[i][0]} wrong.</h2>`);
    }
}