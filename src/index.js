import Server from './mocks/MockData'

// Fetch data on button click
const button = document.getElementById("fetch-btn")

button.addEventListener("click", () => {
    fetch("/api/users/")
        .then(response => {
            if (!response.ok) throw Error(response.statusText)
            return response.json()
        })
        .then(json => buildList(json))
})
function buildList(data) {
    console.log(data)
}