import { useState } from "react";
import Quiz from "./components/Quiz";
import useData from "./hooks/useData"

function StartUP({setFunc}) {
  return (
    <div
      className="w-full border border-zinc-700 flex flex-col items-center text-2xl font-sans p-3 rounded-3xl gap-5"
    >
      <h1 className="text-center text-4xl py-4 px-10 rounded-[5px] bg-orange-400">Quiz</h1>
      <ul className="list-disc p-6">
        <li>This is a Multiple Choice based quiz</li>
        <li>There is not any negative markings</li>
        <li>I can do whatever I want</li>
      </ul>
      <button
        onClick={() => { setFunc((prev) => !prev) }}
        className="text-3xl font-bold py-5 px-10 rounded-[5px] text-white bg-gray-700 hover:scale-105 transition-all hover:bg-gray-500"
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
        className="flex flex-col items-center w-full p-3 gap-5"
      >
        <Quiz data={data}/>
      </div>
  )
}

function App() {
  const [start, setStart] = useState(true)

  return (
    <div className="bg-gray-800 w-full min-h-screen flex justify-center items-center flex-col gap-5 text-white">
        {(start) ? ( <StartUP setFunc={setStart} /> ) : ( <QuizLayout /> )}
    </div>
  );
}

export default App;
