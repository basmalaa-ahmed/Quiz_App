export  class Quiz{
    constructor (category,difficulty,number){
        this.category=category;
        this.difficulty=difficulty;
        this.number=number;
        this.score=0
    }
    getApi() {
        return `https://opentdb.com/api.php?amount=${this.number}&category=${this.category}&difficulty=${this.difficulty}`;
      }
      async getQuestions() {
        const response = await fetch(this.getApi());
        const question= await response.json();
        return question.results
      }
      showResults(){
        return ` <div
       class="question shadow-lg col-lg-6 offset-lg-3  p-4 rounded-3 d-flex flex-column justify-content-center align-items-center gap-3"
     >
       <h2 class="mb-0">
       ${
         this.score==this.number
           ? `Congratulations`
           : `Your score is ${this.score} out of ${this.number}`
       }      
       </h2>
       <button class="again btn rounded-pill"><i class="bi bi-arrow-repeat"></i> Try Again</button>
     </div>
   `;
      }
    
}