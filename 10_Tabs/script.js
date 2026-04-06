const elements = [
    {heading: "Standard", content: ["5 Edits", "1GB Storage", "1 Websites", "1 Hour Free Support"]},
    {heading: "Expert", content: ["7 Edits", "2GB Storage", "3 Websites", "3 Hour Free Support"]},
    {heading: "Elite", content: ["10 Edits", "5GB Storage", "5 Websites", "5 Hour Free Support"]},
    {heading: "Professional ", content: ["10 Edits", "10GB Storage", "6 Websites", "24 Hour Free Support"]},
]

const tabSwitcher = (e, element) => {
    // e.target.setAttribute("class", "tab active_tab")
    document.getElementById("heading").innerHTML = element.heading
    const offers = document.getElementById("offers").children
    offers[0].innerHTML = element.content[0]
    offers[1].innerHTML = element.content[1]
    offers[2].innerHTML = element.content[2]
    offers[3].innerHTML = element.content[3]
    document.getElementById("button").innerHTML = `Check out for ${element.heading}`
}

const tab_1 = document.getElementById("tab_1")
const tab_2 = document.getElementById("tab_2")
const tab_3 = document.getElementById("tab_3")
const tab_4 = document.getElementById("tab_4")

// maintain focus of the element when browser refresh
tab_1.focus()

tab_1.addEventListener("click", (e) => {tabSwitcher(e, elements[0])})
tab_2.addEventListener("click", (e) => {tabSwitcher(e, elements[1])})
tab_3.addEventListener("click", (e) => {tabSwitcher(e, elements[2])})
tab_4.addEventListener("click", (e) => {tabSwitcher(e, elements[3])})

