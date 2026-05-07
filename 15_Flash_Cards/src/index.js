
async function getData(filepath) {
    try{
        const response = await fetch(filepath)

        const data = await response.json()
        
        if ( data ) {
            return data
        }        
    }
    catch (error){
        console.log(`JSON data fetching error: \n${error}`)
        throw error
    }
        
}


function progressBar(state, question){
    const currentProgress = state.value + 1
    const totalQuestion = question.length

    const progressPercent = Math.ceil(( currentProgress / totalQuestion ) * 100)

    document.getElementById('progressBar').style.width = `${progressPercent}%`
    document.getElementById('progressPercent').textContent = `${progressPercent}%`
    document.getElementById('progressCount').textContent = `${currentProgress} of ${totalQuestion}`
}


const previousCard = (state, data) => {

    const questions = data["Questions"]
    
    if (state.value > 0) {
        state.value -= 1
    }

    document.getElementById('questionText').textContent = questions[state.value]["Question"]
    document.getElementById('answerText').textContent = questions[state.value]["Answer"]
    document.getElementById('quesNo').textContent = `Question ${questions[state.value]["no"]}`
    document.getElementById('ansNo').textContent = `Answer ${questions[state.value]["no"]}`

    // uncomment this if you want to change progress on the basis of questions not the progression
    // progressBar(state)
}

function nextCard(state, data) {

    const questions = data["Questions"]

    if (state.value < (questions.length - 1)){
        state.value += 1
    }

    document.getElementById('questionText').textContent = questions[state.value]["Question"]
    document.getElementById('answerText').textContent = questions[state.value]["Answer"]
    document.getElementById('quesNo').textContent = `Question ${questions[state.value]["no"]}`
    document.getElementById('ansNo').textContent = `Answer ${questions[state.value]["no"]}`
    
    progressBar(state, questions)
}

export {nextCard, previousCard, getData}