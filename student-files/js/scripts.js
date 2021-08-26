const userData = []
let currentIndex = 0;

async function getJson() {
    try {
        const response = await fetch(randomUserUrl)
        return await response.json()
    } catch(error) {
        throw error
    }
}

getJson().then(data => {
    data.results.forEach(user => {
        userData.push(user)
        generateHtml(user)
    })
})
.catch(error => {
    console.log("Something went wrong!", error)
    let html = `<div class="card>No results found</div>`
    gallery.insertAdjacentHTML('beforeend', html)
})

document.querySelector('.card').addEventListener("click", () => {
    e.target.generateModal(data)
})