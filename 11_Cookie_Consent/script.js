const popup = document.getElementById("popup")

if (document.cookie) {
    popup.style.display = "none"
}

document.getElementById("close").addEventListener("click", () => {
    popup.style.display = "none"
})

document.getElementById("accept").addEventListener("click", () => {
    popup.style.display = "none"
    document.cookie = "username=cookie; path=/"
})