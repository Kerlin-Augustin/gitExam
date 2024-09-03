const correctAnswers = [
  'A',
  'B',
  'C',
  'B',
  'A',
  'D',
  'B',
  'D'
]
const quizForm = document.querySelector('.quiz-form')
const quizLength = correctAnswers.length
const final = document.querySelector('.score')
const scoreBlock = document.querySelector('.scoreBlock')


quizForm.addEventListener('submit', e => {
  e.preventDefault()
  let score = 0;
  const userAnswers = [
    quizForm.q1.value, 
    quizForm.q2.value, 
    quizForm.q3.value, 
    quizForm.q4.value,
    quizForm.q5.value,
    quizForm.q6.value,
    quizForm.q7.value,
  ]

  
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
    if(Math.round(output) === Math.round(score)){
      clearInterval(timer)
    } else {
      output++
    }
  }, 10)
  
})
