const body = document.querySelector('body')
const gallery = document.querySelector('#gallery')
let searchContainer = document.querySelector('.search-container')
let currentIndex = 0

//Generate search bar 
function generateSearch() {
    const search = 
    `<form action="#" method="get">
        <input type="search" id="search-input" class="search-input" placeholder="Search...">
        <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
    </form>`

    searchContainer.insertAdjacentHTML('beforeend', search)
}


//Generates all necessary information for our gallery view of all employees
function generateCard(response) {
    //Loop through all the data from the response in scripts.js
    for (let i=0;i<response.results.length;i++) {
        //assign each response index to an employee
        let employee = response.results[i]
        const card = document.createElement('div')
        card.className = "card"
        gallery.appendChild(card)

        //create the HTML for each card and assign employee info via object destructuring
        const cardInfo =
        `<div class="card-img-container">
            <img class="card-img" src="${employee.picture.large}" alt="profile picture">
        </div>
        <div class="card-info-container">
            <h3 id="name" class="card-name cap">${employee.name.first} ${employee.name.last}</h3>
            <p class="card-text">${employee.email}</p>
            <p class="card-text cap">${employee.location.city}, ${employee.location.state}</p>
        </div>`

        //add the cardInfo HTML to the end of our Card div
        card.insertAdjacentHTML('beforeend', cardInfo)

        //Give each card an event listener to create a Modal if clicked on
        card.addEventListener('click', () => createModal(employee))
    }
}


//If a card is clicked on, run this function
function createModal(employee) {
    let bday = formatDob(employee.dob.date)
    let phoneNum = employee.cell.replace('-', ' ')

    //Create the HTML for modal and assign employee information through object destructuring
    const modalInfo = 
    `<div class="modal-container">
        <div class="modal">
            <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
            <div class="modal-info-container">
                <img class="modal-img" src="${employee.picture.large}" alt="profile picture">
                <h3 id="name" class="modal-name cap">${employee.name.first} ${employee.name.last}</h3>
                <p class="modal-text">${employee.email}</p>
                <p class="modal-text cap">${employee.location.city}, ${employee.location.state}</p>
                <hr>
                <p class="modal-text">${phoneNum}</p>
                <p class="modal-text">${employee.location.street.number} ${employee.location.street.name} ${employee.location.city}, ${employee.location.state} ${employee.location.postcode}</p>
                <p class="modal-text">Birthday: ${bday}</p>
            </div>
            <div class="modal-btn-container">
                    <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
                    <button type="button" id="modal-next" class="modal-next btn">Next</button>
            </div>
        </div>`

    //Insert the modal HTML after the body
    document.body.insertAdjacentHTML('beforeend', modalInfo)

    //Define the close button and assign a listener to close the modal if it's clicked
    let closeBtn = document.querySelector('.modal-close-btn');
    closeBtn.addEventListener('click', () => closeBtn.parentElement.parentElement.remove());
    const modalPrev = document.querySelector('#modal-prev')
    const modalNext = document.querySelector('#modal-next')
    const modalButtons = document.querySelector('.modal-btn-container')
    
    console.log(currentIndex)
    modalButtons.addEventListener('click', e => {
        if (e.target == modalPrev && currentIndex < employee.length - 1) {
            currentIndex++
            console.log(currentIndex)
        } else if (e.target == modalNext && currentIndex == employee.length - 1) {
            currentIndex = 0
            console.log(currentIndex)

        } else if (e.target == modalPrev && currentIndex == 0) {
            currentIndex = employee.length -1
            console.log(currentIndex)
        }
        navModal(currentIndex)
    })
}