// --- HTML STUFF ---
// Create JS/HTML for gallery
// Create JS/HTML for modal
// Create JS/HTML for search

const gallery = document.querySelector('#gallery')
const randomUserUrl = "https://randomuser.me/api/?results=12&nat=us"
const modalContainer = document.querySelector('.modal-container')
const html = ' '

function generateHtml(data){
    const {name, picture, email, location: {city, state}} = data
    let htmlComponent =
        `<div class="card" data-id=${data.id.value}>
            <div class="card-img-container">
            <img class="card-img" src=${data.picture.large} alt="profile picture">    
            </div>
            <div class="card-info-container">
                <h3 id="name" class="card-name cap">${name.first}</h3>
                <p class="card-text">${data.email}</p>
                <p class="card-text cap">${data.location.city}, ${data.location.state}</p>
            </div>
        </div>`

    gallery.insertAdjacentHTML('beforeend', htmlComponent)
}

function generateModal() {
    const {name, picture, email, phone, dob, location: {city, state, address}} = data
    let modalComponent = 
        `<div class="modal-container">
            <div class="modal">
                <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                <div class="modal-info-container">
                    <img class="modal-img" src=${data.picture.large} alt="profile picture">
                    <h3 id="name" class="modal-name cap">${data.name}</h3>
                    <p class="modal-text">${data.email}</p>
                    <p class="modal-text cap">${data.location.city}</p>
                    <hr>
                    <p class="modal-text">${data.phone}</p>
                    <p class="modal-text">${data.address}</p>
                    <p class="modal-text">${data.dob}</p>
                </div>
            </div>
        </div>`
}