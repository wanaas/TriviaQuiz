var score = 0;
var currentQuestion = 0;
var questions = [{
        title: "How many oscars did the Titanic movie get?",
        answers: ["Eleven", "Twelve", "Nine", "Ten"],
        correct: 0
    },
    {
        title: "What number is on Herbie the beatle?",
        answers: ["19", "40", "53", "6"],
        correct: 2
    },
    {
        title: "What is the name of the prison in the film The Rock?",
        answers: ["The Raft", "Belle Reve", "Pavelock", "Alcatraz"],
        correct: 3
    },
    {
        title: "What is the name of the little dragon in the animated movie Mulan?",
        answers: ["Eleven", "Yao", "Mushu", "Little Brother"],
        correct: 2
    },
    {
        title: "Who is the director of Reservoir Dogs?",
        answers: ["Quentin Tarantino", "Martin Scorsese", "Alfred Hitchcock", "Stanley Kubrick"],
        correct: 0
    },
    {
        title: "Which is the 1995 film starring Mel Gibson - “Every man dies, not every man really lives.”",
        answers: ["Lethal Weapon", "Hacksaw Ridge", "What Women Want", "Braveheart"],
        correct: 3
    },
    {
        title: "Which is the 1998 film starring Robin Williams - “Carpe diem. Seize the day, boys. Make your lives extraordinary.”. Make your lives extraordinary.”",
        answers: ["Mrs. Doubtfire", "Jumanji", "Dead Poets Society", "Good Will Hunting"],
        correct: 2
    },
    {
        title: "Which is the 2008 film starring Chritian Bale - “I believe whatever doesn’t kill you, simply makes you…stranger.”",
        answers: ["Batman Begins", "The Dark Knight", "The Dark Knight Rises", "American Psycho"],
        correct: 1
    },
];



$(document).ready(function() {

    $('.start a').click(function(e) {
        e.preventDefault();
        $('.start').hide();
        $('.quiz').show();
        showQuestion();
    });



});



function showQuestion() {
    let question = questions[currentQuestion];
    $('.quiz h2').text(question.title);


};

function checkAnswer() {



};

function showSummary() {



};