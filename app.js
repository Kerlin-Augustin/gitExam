const correctAnswers = ['A','B','A','B']
const quizForm = document.querySelector('.quiz-form')
const quizLength = correctAnswers.length
const final = document.querySelector('.score')
const scoreBlock = document.querySelector('.scoreBlock')


quizForm.addEventListener('submit', e => {
  e.preventDefault()
  let score = 0;
  const userAnswers = [quizForm.q1.value, quizForm.q2.value, quizForm.q3.value, quizForm.q4.value]

  userAnswers.forEach((answer, index) => {
    if(answer === correctAnswers[index]){
      score++
    }
  })

  score = (score / quizLength) * 100

  scrollTo(0,0)
  // final.innerText = `${score}%`
  scoreBlock.classList.remove('d-none')

  let output = 0
  const timer = setInterval(() => {
    final.innerText = `${output}%`
    if(output === score){
      clearInterval(timer)
    } else {
      output++
    }
  }, 10)
  
})
