
const changeDisplay = () => {
    const container = document.getElementById("container")

    //added event listener on whole container
    container.addEventListener("click", (e) => {

        // only target elements with id: button which also save from error by targeting wrong element
        if (e.target.id == "button") {

            // takes button aria-label and use it to get element with that same id as aria-label
            const element = document.getElementById(e.target.ariaLabel)
            
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