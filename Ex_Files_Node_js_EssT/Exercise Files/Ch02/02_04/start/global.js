
Process.stdout.write("hello \n \n");

const question = [
  "what is your favorite sport?",
  "What was the best part of your day?",
  "What is your favorite hoilday?"
];

const answers = [];

function ask(i = 0) {
  process.stdout.write(`\n\n\n ${questions[i]}`);
  process.stdout.write(` > `);
}

ask(answers.length);

process.stdout.write("data", function(data) {
 answer.push(data.toString().trim());
 if(answers.length < questions.length) {
  ask(answers.length);
 } else {
  process.exit();
 }
});
