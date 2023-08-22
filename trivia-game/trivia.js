//At the top of your trivia.js file, create global variables to simplify access to DOM objects
var startButton = document.getElementById("start-btn");
//Call the first variable questionDiv and select the DOM element containing the #question id.
var questionDiv = document.getElementById("question");
//Call the second variable answerDiv and select the DOM element containing the #answer id.
var answerDiv = document.getElementById("answer");
//Call the third variable feedbackDiv and select the DOM element containing the #feedback id.
var feedbackDiv = document.getElementById("feedback");
//Create a fourth variable using let and call it currentQuestion, and give it an initial value of null. This variable will store the question that is returned from the Promise.
let currentQuestion = null;


//create a function skeleton named getTriviaQuestion  inside function return new promise, inside promise, use the setTimer method to introduce delay
function getTriviaQuestion() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const index = Math.floor(Math.random() * questions.length);//randomly select a question from the questions array
            const question = questions[index];//store the question in the question variable
            if (index > questions.length) {//handle the error if the index is greater than the length of the questions array
                reject('An error occurred while fetching the trivia question.');
              } else {
                resolve(question);//resolve the promise with the question
              } 
        }, 1000);//delay to simulate time to fetch data

    });
}