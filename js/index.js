import Question from "./questions.js";
import { Quiz } from "./quiz.js";
// import Question from "./question.js";
const quizOptions= document.getElementById("quizOptions");
const categoryMenu= document.getElementById("categoryMenu");
const difficultyOptions = document.getElementById("difficultyOptions");
const questionsNumber = document.getElementById("questionsNumber");
const startQuiz=document.getElementById("startQuiz");
export const questionsContainer=document.getElementById("questions_container");

// console.log(quizOptions)
// console.log(categoryMenu)
// console.log(difficultyOptions)
// console.log(questionsNumber)
// console.log(startQuiz)

export let quiz;
export let questions;
startQuiz.addEventListener("click",async function(e){
    e.preventDefault();
    const category=categoryMenu.value;
    const difficulty=difficultyOptions.value;
    const numberOfQuestion= questionsNumber.value;
    quiz=new Quiz(category,difficulty,numberOfQuestion)
    questions =await quiz.getQuestions()
   const question= new Question(0);
   quizOptions.classList.replace("d-flex","d-none");
   question.displayAnswers();
   
   

    

 

})
