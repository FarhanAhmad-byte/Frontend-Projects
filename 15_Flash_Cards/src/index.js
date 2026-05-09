function showAnswer(id, display) {
  document.getElementById(id).style.display = display
}

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


const previousCard = (number, setNumber) => {
    
    if (number > 0) {
        setNumber(number - 1)
    }


}

function nextCard(number, setNumber, data) {

    const questions = data["Questions"]

    if (number < (questions.length - 1)){
        setNumber(number + 1)
    }

}

export {nextCard, previousCard, getData, showAnswer}