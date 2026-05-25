import { useState } from "react";
import Quiz from "./components/Quiz";
import useData from "./hooks/useData"

function StartUP({setFunc}) {
  return (
    <div
      className="w-full flex flex-col items-center text-2xl font-sans rounded-3xl gap-5"
    >
      <h1 className="text-center w-full text-4xl py-4 px-10 rounded-b-full  bg-slate-600 border-b-2 shadow-2xl border-slate-700">Quiz App</h1>
      <ul className="p-6 gap-5 flex flex-col">
        <li className="bg-slate-700 py-4 px-5 rounded-2xl m-1">This is a Multiple Choice based quiz</li>
        <li className="bg-slate-700 py-4 px-5 rounded-2xl m-1">The Questions are presented in a card and can only be changed if answered of timer runs out</li>
        <li className="bg-slate-700 py-4 px-5 rounded-2xl m-1">No negative marking for incorrect answers</li>
        <li className="bg-slate-700 py-4 px-5 rounded-2xl m-1">There is a timer of 1 min for each question and if timer runs out 1 point will be deducted</li>
      </ul>
      <button
        onClick={() => { setFunc((prev) => !prev) }}
        className="text-3xl font-bold py-5 px-10 rounded-3xl text-black bg-slate-300 hover:scale-105 transition-all"
      >
        Start
      </button>
    </div>
  );
}

function QuizLayout() {
  const data = useData()

  if(!data.length){
    return <p className="bg-gray-700 text-white text-3xl">Loading...</p>
  }

  return (
      <div
        className="flex flex-col items-center w-full h-full p-3 gap-5"
      >
        <Quiz data={data}/>
      </div>
  )
}

function App() {
  const [start, setStart] = useState(true)

  return (
    <div className="bg-slate-900 w-full min-h-screen flex items-center flex-col gap-5 text-white">
        {(start) ? ( <StartUP setFunc={setStart} /> ) : ( <QuizLayout /> )}
    </div>
  );
}

export default App;
