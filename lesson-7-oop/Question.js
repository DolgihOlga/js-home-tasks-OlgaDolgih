'use strict';

(function () {
    function Question(question, answers, correctAnswer) {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }

    Question.prototype.showQuestion = function () {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ". " + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function (answer) {
        if (answer === this.correctAnswer) {
            console.log('Это правильный ответ!');
        } else {
            console.log('Не верно!');
        }
    }

    var question1 = new Question('В каком году появился JavaScript?',
        [1987, 1995, 2001],
        1);
    var question2 = new Question('Какой компанией был создан JavaScript?',
        ['Sun', 'Microsoft', 'Netscape'],
        2);
    var question3 = new Question('Каким было первое название языка JavaScript?',
        ['Java', 'LiveScript', 'Mocha'],
        2);

    var questions = [question1, question2, question3];

    var key = Math.floor(Math.random() * questions.length);

    var randomQuestion = questions[key];

    randomQuestion.showQuestion();

    var answer = parseInt(prompt('Введите ответ'));

    randomQuestion.checkAnswer(answer);
})();

