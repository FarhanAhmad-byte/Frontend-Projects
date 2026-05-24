/* eslint-disable no-useless-assignment */
import { useState } from "react";

function QuizData({currentQuestion, changeQuestion, currentIndex, dataLastIndex, setSubmit}) {
  return (
    <div>
      <h1>Question {currentQuestion?.no}</h1>
      <p>{currentQuestion?.Question}</p>
      <form>
        <input type="radio" id="option1" value={currentQuestion?.Options[0]} />
        <label for="option1">{currentQuestion?.Options[0]}</label>
        <input type="radio" id="option2" value={currentQuestion?.Options[1]} />
        <label for="option2">{currentQuestion?.Options[1]}</label>
        <input type="radio" id="option3" value={currentQuestion?.Options[2]} />
        <label for="option3">{currentQuestion?.Options[2]}</label>
        <input type="radio" id="option4" value={currentQuestion?.Options[3]} />
        <label for="option4">{currentQuestion?.Options[3]}</label>
      </form>
      <button onClick={changeQuestion}>Next Question</button>
      {currentIndex === dataLastIndex ? (
        <button onClick={ setSubmit(false) } className="bg-red p-4 border rounded">
          Submit
        </button>
      ) : null }
    </div>
  );
}

function Result() {
  return(
    <h1>You passed</h1>
  )
}

export default function Quiz({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [submit, setSubmit] = useState(true);

  const changeQuestion = () => {
    setCurrentIndex((prev) =>
      prev < dataLastIndex ? (prev += 1) : (prev = dataLastIndex),
    );
  };

  const dataLastIndex = data.length - 1;
  const currentQuestion = data[currentIndex];

  return (
    <div
      key={currentQuestion?.no}
      className="flex flex-col items-center justify-center border border-black"
    >
      {submit ? <QuizData changeQuestion={changeQuestion} currentQuestion={currentQuestion} currentIndex={currentIndex} dataLastIndex={dataLastIndex} setSubmit={setSubmit} /> : <Result />}
    </div>
  );
}
