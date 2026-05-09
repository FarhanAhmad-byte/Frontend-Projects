import { useState } from 'react'
import { nextCard, previousCard } from "./index.js"
import QuestionCard from "./QuestionCard.jsx"
import AnswerCard from "./AnswerCard.jsx"


function App({ loadedData }) {
  let [number, setNumber] = useState(0)

  const currentProgress = Math.ceil(((number + 1) / loadedData.Questions.length ) * 100)

  return (
    <div className="flex flex-col justify-center items-center w-full h-full gap-2" id="container">

        <h1 className="text-black font-bold text-3xl">Flash Cards</h1>

        <div className="relative w-100 h-10 bg-white rounded-[7px] m-1 p-1 flex items-center border border-purple-800">
          <div className={`bg-gray-200 h-full rounded-[5px] relative flex items-center`} style={{width: `${currentProgress}%`}} >
            <p className="absolute -right-9">{currentProgress}%</p>
          </div>
          <p className="absolute -left-15 ">{number + 1} of {loadedData.Questions.length}</p>
        </div>

        {/* Question Card */}
        <QuestionCard display='flex' data={loadedData} serialNO={number}  type='Question ' next={ nextCard } previous={ previousCard } number={ number } setNumber={ setNumber }  />

        {/* Answer Card */}
        <AnswerCard display='hidden' data={loadedData} serialNO={number}  type='Answer ' next={ nextCard } previous={ previousCard } number={ number } setNumber={ setNumber }/>
        
    </div>
  ) 
}

export default App
