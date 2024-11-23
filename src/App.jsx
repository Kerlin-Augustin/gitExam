import { useState } from 'react';

function App() {
  return (
    <>
      
    </>
  )
}

// export default App

const correctAnswers = [
  'A',
  'B',
  'C',
  'B',
  'A',
  'D',
  'B',
  'D',
  'C',
  'D',
  'A',
  'D',
  'D',
  'B',
  'B',
  'C',
  'B',
  'A',
  'C',
  'B',
  'C',
  'A',
  'D',
  'A',
  'B'
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
    quizForm.q8.value,
    quizForm.q9.value,
    quizForm.q10.value,
    quizForm.q11.value, 
    quizForm.q12.value, 
    quizForm.q13.value, 
    quizForm.q14.value,
    quizForm.q15.value,
    quizForm.q16.value,
    quizForm.q17.value,
    quizForm.q18.value,
    quizForm.q19.value,
    quizForm.q20.value,
    quizForm.q21.value,
    quizForm.q22.value,
    quizForm.q23.value,
    quizForm.q24.value,
    quizForm.q25.value,
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
