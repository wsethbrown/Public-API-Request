// API STUFF
// Get json file from API
// Parse API and separate into user, first name, last name, etc etc
// Input info into HTML elements

// HTML STUFF
// Create JS/HTML for gallery
// Create JS/HTML for modal
// Create JS/HTML for search

const userData = []
const randomUserUrl = "https://randomuser.me/api/?results=12&nat=us"
const gallery = document.querySelector('#gallery')

async function getJson() {
    try {
        const response = await fetch(randomUserUrl)
        return await response.json()
    } catch(error) {
        throw error
    }
}

getJson.then(data => {
    data.results.forEach(user => {
        userData.push(user)
        generateHtml(user)
    })
})
.catch(error => {
    console.log("Something went wrong!")
    let html = `<div class="card>No results found</div>`
    gallery.insertAdjascentHTML('beforeend', html)
})