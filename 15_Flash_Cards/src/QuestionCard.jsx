// use to set given display
import { showAnswer } from './index.js'

export default function QuestionCard({data,  next, previous,  number, setNumber}) {
    return(
        <div className='flex flex-col p-1 rounded-xl gap-1 border border-gray-800 w-100'>
          <div className="flex flex-col gap-2">
            <div className="bg-gray-200 flex flex-col h-80 rounded-xl gap-5">
              <h1 className="text-2xl font-bold m-2" >Question { number + 1 }</h1>
              <div className="flex items-center justify-center">
                <p>{ data.Questions[number].Question }</p>
              </div>
            </div>

            <div className="bg-gray-200 flex items-center justify-evenly rounded-xl">
              <button onClick={ () => previous( number, setNumber) } className="hover:cursor-pointer hover:scale-105" id="previousBtn">&lt; Previous</button>
              <button onClick={ () => showAnswer("answerCard", 'flex') } className="rounded-2xl text-xl hover:cursor-pointer hover:font-bold p-2 self-center">Show answer</button>
              <button onClick={ () => next(number, setNumber, data) } className="hover:cursor-pointer hover:scale-105" id="nextBtn">Next &gt;</button>
            </div>
          </div>
        </div>
    )
}