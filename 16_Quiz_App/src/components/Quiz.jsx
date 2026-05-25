/* eslint-disable no-useless-assignment */
import { useState } from "react";

function QuizData({currentQuestion, changeQuestion, currentIndex, dataLastIndex, setSubmitState, score, setScore}) {

  function inputChange(element, question, score) {
    const inputs = document.querySelectorAll("input")    
    const parent = element.target.parentElement

    if (question.Answer === element.target.value) {
      parent.style.background = "green"
      parent.style.color = "white"
      score((prev) => prev += 1)
    }
    else{
      parent.style.background = "red"
      parent.style.color = "white"
    }
    // disable every other inputs 
    Array.from(inputs).map((input) => {
      input.disabled = true
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
          <input onClick={(e) => { inputChange(e, currentQuestion, setScore) }}
          className="size-5 self-center color m-2"
          name="choice"
          type="radio"
          id="option1"
          value={currentQuestion?.Options[0]} />
          <label htmlFor="option1">{currentQuestion?.Options[0]}</label>
        </div>

        <div className="border border-white bg-white text-black text-2xl flex gap-5 rounded-4xl w-100">
          <input onClick={(e) => { inputChange(e, currentQuestion, setScore) }}
          className="size-5 self-center color m-2"
          name="choice"
          type="radio"
          id="option2"
          value={currentQuestion?.Options[1]} />
          <label htmlFor="option2">{currentQuestion?.Options[1]}</label>
        </div>

        <div className="border border-white bg-white text-black text-2xl flex gap-5 rounded-4xl w-100">
          <input onClick={(e) => { inputChange(e, currentQuestion, setScore) }}
          className="size-5 self-center color m-2"
          name="choice"
          type="radio"
          id="option3" 
          value={currentQuestion?.Options[2]} />
          <label htmlFor="option3">{currentQuestion?.Options[2]}</label>
        </div>
        
        <div className="border border-white bg-white text-black text-2xl flex gap-5 rounded-4xl w-100">
          <input onClick={(e) => { inputChange(e, currentQuestion, setScore) }}
          className="size-5 self-center color m-2"
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

function Result({result, dataLastIndex}) {

  return(
    <div className="bg-orange-300">
      <h1 className="border-b border-white">Result</h1>
      <h1>Total Questions {dataLastIndex + 1}</h1>
      <p>Correct Answer {result}</p>
      <p>{(dataLastIndex + 1)/2 < result ? "passed" : "failed"}</p>
    </div>
  )
}

export default function Quiz({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0)

  const incrementQuestionIndex = (setShowButtonState) => {
    // increment current state if it is less than last index of the data and set show button state to false
    setCurrentIndex((prev) =>
      prev < dataLastIndex ? (prev += 1) : (prev = dataLastIndex),
    );
    setShowButtonState(false)
  };

  const dataLastIndex = data.length - 1;
  const currentQuestion = data[currentIndex];

  return (
    <div
      key={currentQuestion?.no}
      className=""
    >
      {submitted ? <Result result={score} dataLastIndex={dataLastIndex} /> : <QuizData changeQuestion={ incrementQuestionIndex } currentQuestion={currentQuestion} currentIndex={currentIndex} dataLastIndex={dataLastIndex} setSubmitState={setSubmitted} score={score} setScore={setScore} />}
    </div>
  );
}
