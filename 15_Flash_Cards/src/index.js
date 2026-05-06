// import {dirname} from 'path'
// import { fileURLToPath } from 'url';


// const __filename = fileURLToPath(import.meta.url)
// const __dirname = dirname(__filename)

const Questions = [
    {
      "Question": "What is the capital of France?",
      "Answer": "Paris"
    },
    {
      "Question": "What is the largest planet in our solar system?",
      "Answer": "Jupiter"
    },
    {
      "Question": "What is the chemical symbol for gold?",
      "Answer": "Au"
    },
    {
      "Question": "What is the capital of Japan?",
      "Answer": "Tokyo"
    },
    {
      "Question": "What is the hardest natural substance on Earth?",
      "Answer": "Diamond"
    },
]

async function getData() {

    const  filePath = __dirname + "\\public\\question.json"
    try{
        const response = await fetch(filePath)

        if ( response ) {
            return response
        } else {
            console.log("NO Data Found ||")
            return
        }
        
    }
    catch (error){
        console.log(`JSON data fetching error: \n${error}`)
        throw error
    }
        
}

function progressBar(state, question){
    const currentProgress = state.value
    const totalQuestion = question.length - 1

    const progressPercent = ( currentProgress / totalQuestion ) * 100

    document.getElementById('progressBar').style.width = `${progressPercent}%`
    document.getElementById('progressPercent').textContent = `${progressPercent}%`
    document.getElementById('progressCount').textContent = `${currentProgress} of ${totalQuestion}`  
}

const previousCard = (questionElement, answerElement, state) => {

    
    if (state.value > 0) {
        state.value -= 1
    }

    document.getElementById(questionElement).textContent = Questions[state.value]["Question"]
    document.getElementById(answerElement).textContent = Questions[state.value]["Answer"]

    // uncomment this if you want to change progress on the basis of question not progression
    progressBar(state)
}

function nextCard(questionElement, answerElement, state, data) {
    // const questionLength = data

    if (state.value < (Questions.length - 1)){
        state.value += 1
    }

    document.getElementById(questionElement).textContent = Questions[state.value]["Question"]
    document.getElementById(answerElement).textContent = Questions[state.value]["Answer"]
    
    progressBar(state, Questions)
}

export {nextCard, previousCard, getData}