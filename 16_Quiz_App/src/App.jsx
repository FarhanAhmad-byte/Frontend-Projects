import { useState } from "react";
import Quiz from "./components/Quiz";
import useData from "./hooks/useData"

function StartUP({setFunc}) {
  return (
    <div
      className="flex flex-col items-center text-2xl font-sans border p-3 rounded-3xl"
    >
      <h1 className="text-center">Info</h1>
      <ul className="list-disc p-6">
        <li>This is a Multiple Choice based quiz</li>
        <li>There is not any negative markings</li>
        <li>I can do whatever I want</li>
      </ul>
      <button
        onClick={() => { setFunc((prev) => !prev) }}
        className="text-3xl font-bold border py-5 px-10 rounded-3xl text-white bg-red-700 hover:scale-105 transition-all hover:bg-red-800"
      >
        Start
      </button>
    </div>
  );
}

function QuizLayout() {
  const data = useData()

  if(!data.length){
    return <p className="bg-red-700 text-white text-3xl">Loading...</p>
  }

  return (
      <div
        className="flex flex-col border border-black rounded-3xl p-3 gap-5"
      >
        <Quiz data={data}/>
      </div>
  )
}

function App() {
  const [start, setStart] = useState(true)

  return (
    <div className="w-full h-screen flex justify-center items-center flex-col gap-5">
        {(start) ? ( <StartUP setFunc={setStart} /> ) : ( <QuizLayout /> )}
    </div>
  );
}

export default App;
