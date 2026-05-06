import {nextCard, previousCard, getData} from "./index.js"

function showAnswer(id, display) {
  document.getElementById(id).style.display = display
}

// const data = getData()

const currentState = {value: 0}


function App() {

  return (
    <div className="flex flex-col justify-center items-center w-full h-full gap-2" id="container">

        <h1 className="text-black font-bold text-3xl">Flash Cards</h1>

        <div className="relative w-100 h-10 bg-white rounded-[7px] m-1 p-1 flex items-center border border-purple-800">
          <div className="bg-gray-200 w-0/100 h-full rounded-[5px] relative flex items-center" id="progressBar">
            <p className="absolute -right-9" id="progressPercent">0%</p>
          </div>
          <p className="absolute right-2" id="progressCount">0 of 10</p>
        </div>


        <div className="flex flex-col p-1 rounded-xl gap-1 border border-gray-800 w-100">
          <div className="flex flex-col gap-2">
            <div className="bg-gray-200 flex flex-col h-80 rounded-xl gap-5">
              <h1 className="text-2xl font-bold m-2">Question 1</h1>
              <div className="flex items-center justify-center">
                <p id="questionText">What is the capital of France?</p>
              </div>
            </div>

            <div className="bg-gray-200 flex items-center justify-evenly rounded-xl">
              <button onClick={ () => previousCard('questionText', 'answerText', currentState) } className="hover:cursor-pointer hover:scale-105" id="previousBtn">&lt; Previous</button>
              <button onClick={ () => showAnswer('answerCard', 'flex') } className="rounded-2xl text-xl hover:cursor-pointer hover:font-bold p-2 self-center">Show answer</button>
              <button onClick={ () => nextCard('questionText', 'answerText', currentState) } className="hover:cursor-pointer hover:scale-105" id="nextBtn">Next &gt;</button>
            </div>
          </div>
        </div>

        <div className="hidden flex-col p-1 rounded-xl gap-1 border border-gray-800 w-100" id="answerCard">
          <div className="flex flex-col gap-2">
            <div className="bg-gray-200 flex flex-col h-80 rounded-xl gap-5">
              <h1 className="text-2xl font-bold m-2">Answer 1</h1>
              <div className="flex items-center justify-center">
                <p id="answerText">Paris</p>
              </div>
            </div>

            <div className="bg-gray-200 flex items-center justify-evenly rounded-xl">
              <button onClick={ () => previousCard('questionText', 'answerTText', currentState) } className="hover:cursor-pointer hover:scale-105" id="previousBtn">&lt; Previous</button>
              <button onClick={ () => showAnswer('answerCard', 'none') } className="rounded-2xl text-xl hover:cursor-pointer hover:font-bold p-2 self-center">Hide answer</button>
              <button onClick={ () => nextCard('questionText', 'answerText', currentState) } className="hover:cursor-pointer hover:scale-105" id="nextBtn">Next &gt;</button>
            </div>
          </div>
        </div>

    </div>
  ) 
}

export default App
