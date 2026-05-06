
const changeDisplay = () => {
    const container = document.getElementById("container")

    //added event listener on whole container
    container.addEventListener("click", (e) => {

        // only target elements with id:button which also save from error by targeting wrong element
        if (e.target.id == "button") {

            // get aria-labelledElement of the button
            const element = e.target.ariaLabelledByElements[0]
            
            // checks for className and change it accordingly
            if(element.className == 'answer' ) {
                element.className = 'answer show'
            }
            else {
                element.className = 'answer'
            }
        }
    })
}

changeDisplay()