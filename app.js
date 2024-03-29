const rightAnswer = ['B', 'B', 'B', 'B'];
const result = document.querySelector('.result')
//Add event listener to form

const form = document.querySelector('.quiz-form')
console.log(form)

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    //check answers
    userAnswers.forEach((answer, index) => {
        if(answer === rightAnswer[index]){
            score += 25;
        }
    });

    scrollTo(0,0);

    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}% `;
        if(output === score){
            clearInterval(timer)
        }
        else{
            output++;
        }
    }, 10);

  
    result.classList.remove('d-none');
})