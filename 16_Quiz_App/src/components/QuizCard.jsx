/* eslint-disable no-useless-assignment */
import { useState } from "react"

export default function QuizCard({currentQuestion, changeQuestion, currentIndex, dataLastIndex, setSubmitState, score, setScore}) {

  function pickAnswer(element, question, score) {
    const inputs = document.querySelectorAll("input")    
    const parent = element.target.parentElement

    if (question.Answer === element.target.value) {
      score((prev) => prev += 1)
    }
    else{
      parent.style.background = "red"
      parent.style.color = "white"
    }
    // disable every other inputs and highlight correct one
    Array.from(inputs).map((input) => {
      if (input.value === question.Answer) {
        input.parentElement.style.background = "green"
        input.parentElement.style.color = "white"
        input.disabled = true
      } else {
        input.disabled = true
      }
    })
    setShowButton(true)
  }

  const [showButton, setShowButton] = useState(false)

  return (
    <div className="w-120 flex flex-col items-center border border-zinc-700 p-5 rounded-2xl">
      <div className="border-b-2 border-white w-full mx-2 text-2xl p-2 flex justify-between">
          <h1>Quiz {currentQuestion?.no}</h1>
          <h2 className="text-xl">Score: {score}</h2>
      </div>
      <p className="py-5 text-3xl">{currentQuestion?.Question}</p>
      <form className="flex flex-col gap-3"
        >
        <div className="border border-white bg-white text-black text-2xl flex gap-5 rounded-4xl w-100">
          <input onClick={(e) => { pickAnswer(e, currentQuestion, setScore) }}
          className="size-5 self-center color m-2 hover:cursor-pointer"
          name="choice"
          type="radio"
          id="option1"
          value={currentQuestion?.Options[0]} />
          <label htmlFor="option1">{currentQuestion?.Options[0]}</label>
        </div>

        <div className="border border-white bg-white text-black text-2xl flex gap-5 rounded-4xl w-100">
          <input onClick={(e) => { pickAnswer(e, currentQuestion, setScore) }}
          className="size-5 self-center color m-2 hover:cursor-pointer"
          name="choice"
          type="radio"
          id="option2"
          value={currentQuestion?.Options[1]} />
          <label htmlFor="option2">{currentQuestion?.Options[1]}</label>
        </div>

        <div className="border border-white bg-white text-black text-2xl flex gap-5 rounded-4xl w-100">
          <input onClick={(e) => { pickAnswer(e, currentQuestion, setScore) }}
          className="size-5 self-center color m-2 hover:cursor-pointer"
          name="choice"
          type="radio"
          id="option3" 
          value={currentQuestion?.Options[2]} />
          <label htmlFor="option3">{currentQuestion?.Options[2]}</label>
        </div>
        
        <div className="border border-white bg-white text-black text-2xl flex gap-5 rounded-4xl w-100">
          <input onClick={(e) => { pickAnswer(e, currentQuestion, setScore) }}
          className="size-5 self-center color m-2 hover:cursor-pointer"
          name="choice"
          type="radio"
          id="option4"
          value={currentQuestion?.Options[3]} />
          <label htmlFor="option4">{currentQuestion?.Options[3]}</label>
        </div>
      </form>

      {currentIndex < dataLastIndex && showButton ? (<button className="text-2xl font-bold py-5 px-10 rounded-[5px] text-white bg-gray-700 hover:scale-105 transition-all hover:bg-gray-500 mt-5" onClick={ () => changeQuestion( setShowButton ) }>Next Question</button>) : null}

      {currentIndex === dataLastIndex && showButton ? (
        <button onClick={ () => setSubmitState(true) } className="text-2xl font-bold py-5 px-10 rounded-[5px] text-white bg-gray-700 hover:scale-105 transition-all hover:bg-gray-500 mt-5">
          Submit
        </button>
      ) : null }
    </div>
  );
}