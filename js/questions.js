import {questions,quiz,questionsContainer} from "./index.js"
export default class Question{
    constructor(index){
        this.index=index;
        this.question=questions[index].question;
        this.category=questions[index].category;
        this.difficulty=questions[index].difficulty;
        this.type=questions[index].type;
        this.answers=this.getAnswers(questions[index]);
        this.correct = questions[index].correct_answer;
        this.answerd= false;

      
       
    }
    getAnswers(answerDetalils) {
        return answerDetalils.incorrect_answers.concat(answerDetalils.correct_answer).sort();
    }
    displayAnswers(){
        const questionMarkUp = `
      <div
        class="question shadow-lg col-lg-6 offset-lg-3  p-4 rounded-3 d-flex flex-column justify-content-center align-items-center gap-3 animate__animated animate__bounceIn"
      >
        <div class="w-100 d-flex justify-content-between">
          <span class="btn btn-category">${this.category}</span>
          <span class="fs-6 btn btn-questions">${this.index + 1} of ${questions.length} Questions</span>
        </div>
        <h2 class="text-capitalize h4 text-center">${this.question}</h2>  
        <ul class="choices w-100 list-unstyled m-0 d-flex flex-wrap text-center">
        ${this.answers.map((answers) => `<li>${answers}</li>`).toString().replaceAll(",", "")}
        </ul>
        <h2 class="text-capitalize text-center score-color h3 fw-bold"><i class="bi bi-emoji-laughing"></i> Score: ${quiz.score}</h2>        
      </div>
    `;
    questionsContainer.innerHTML= questionMarkUp;
    const answers= document.querySelectorAll("ul li");
    for(let i=0;i<answers.length;i++){
        answers[i].addEventListener("click",()=>{
            this.checkAnswer(answers[i]);
            this.nextQuestion();
            

        })
    }
    }
    checkAnswer(answer){
        if(!this.answerd){
            this.answerd=true;
            if(answer.innerHTML==this.correct){
                answer.classList.add("correct","animate__animated","animate__shakeY");
                quiz.score++;  
            }
            else{
                answer.classList.add("wrong","animate__animated","animate__shakeX");
                quiz.score
            }
        }
    }
    nextQuestion(){
        this.index++;
       setTimeout(()=>{
        if(this.index<questions.length){
            const nweQuestion = new Question(this.index)
            nweQuestion.displayAnswers();
        }
        else{
            questionsContainer.innerHTML= quiz.showResults();
            const againBtn= document.querySelector(".again").addEventListener("click",()=>{
                // console.log("bye")
                categoryMenu.value = "";
                difficultyOptions.value = "easy";
                questionsNumber.value = "";
               questionsContainer.querySelector(".question").classList.replace("d-flex","d-none");
               quizOptions.classList.replace("d-none","d-flex");
               
            })
        }
       },1000)
       

    }
}
