'use strict';

(function () {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function () {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function (ans, fn) {
        var count;

        if (ans === this.correct) {
            console.log('Correct answer!');
            count = fn(true);
        } else {
            console.log('Wrong answer. Try again :)');
            count = fn(false);
        }

        this.displayScore(count);
    }

    Question.prototype.displayScore = function (count) {
        console.log('correct answers: ' + count);
    }

    var q1 = new Question('Is JavaScript the coolest programming language in the world?',
        ['Yes', 'No'],
        0);

    var q2 = new Question('What is the name of this course\'s teacher?',
        ['John', 'Micheal', 'Jonas'],
        2);

    var q3 = new Question('What does best describe coding?',
        ['Boring', 'Hard', 'Fun', 'Tediuos'],
        2);

    function makeCounter() {
        var count = 0;
        return function (correctAnswer) {
            if (correctAnswer) {
                count++;
            }
            return count;
        }
    }

    var counter = makeCounter();

    function nextQuestion() {
        var questions = [q1, q2, q3];

        var n = Math.floor(Math.random() * questions.length);

        questions[n].displayQuestion();

        var answer = prompt('Please select the correct answer.');

        if (answer !== 'exit') {

            questions[n].checkAnswer(parseInt(answer), counter);

            nextQuestion();
        }

    }
    nextQuestion();
})();
