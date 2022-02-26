"use strict";

function interviewQuestion(job) {
    return function (name) {
        if (job === "teacher") {
            return "What subject do you teach " + name + "?";
        } else if (job === "designer") {
            return name + " can you please explain what UX design is?";
        } else {
            return "Hello" + " " + name + ", what do you do?";
        }
    }
}

console.log(interviewQuestion("teacher")("John"));


