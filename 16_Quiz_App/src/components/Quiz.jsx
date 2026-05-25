/* eslint-disable no-useless-assignment */
import { useState } from "react";
import QuizResultCard from "./QuizResultCard";
import QuizCard from "./QuizCard";


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
      {submitted ? <QuizResultCard result={score} totalQuestion={dataLastIndex + 1} /> : <QuizCard changeQuestion={ incrementQuestionIndex } currentQuestion={currentQuestion} currentIndex={currentIndex} dataLastIndex={dataLastIndex} setSubmitState={setSubmitted} score={score} setScore={setScore} />}
    </div>
  );
}
