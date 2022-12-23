const readline = require("readline");
const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const questions = [
    "what is your name?",
    "What are you going to do with Node.Js?",
    "What are your hobbies?",
    "is node.JS useful to you?"
];

function collectAnswers(questions, done) {
    const answer = [];

    const questions = answer => {
        answer.push(answer.trim());
        if(collectAnswers.length < questions.length) {
            rl.question(
                questions [collectAnswers.length],
                questionAnswered
                );
            { else {
                return done(answers);
            }
        };
rl.question(questions[0], questionAnswered);
    }
}

    collectAnswers(questions, () = > {
        console.log("Thank you for your answers!");
        console.log(answers);
        process.exit();
    });