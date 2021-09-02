const body = document.querySelector('body')
const gallery = document.querySelector('#gallery')
const searchContainer = document.querySelector('.search-container')
let employees = []
let employeeData
let currentIndex = 0

//Generate search bar 
const search = 
`<form action="#" method="get">
    <input type="search" id="search-input" class="search-input" placeholder="Search...">
    <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
</form>`

searchContainer.insertAdjacentHTML('beforeend', search)


//Generates all necessary information for our gallery view of all employees
function generateCard(employeeData) {
    //Loop through all the data from the results in scripts.js
    employees = employeeData
    employeeData.forEach((employee, index) => {
        const name = employee.name
        const email = employee.email
        const city = employee.location.city
        const state = employee.location.state
        const picture = employee.picture


        //create the HTML for each card and assign employee info via object destructuring
        const card =
        `<div class="card" data-index=${index}>
            <div class="card-img-container">
                <img class="card-img" src="${picture.large}" alt="profile picture">
            </div>
            <div class="card-info-container">
                <h3 id="name" class="card-name cap">${name.first} ${name.last}</h3>
                <p class="card-text">${email}</p>
                <p class="card-text cap">${city}, ${state}</p>
            </div>
        </div>`

        //add the cardInfo HTML to the end of our Card div
        gallery.insertAdjacentHTML('beforeend', card)
    })
}


//If a card is clicked on, run this function
function createModal(index) {
    const {name, dob, phone, email, location :{city, street, state, postcode}, picture} = employees[index];
    let bday = formatDob(dob)
    let phoneNum = phone.replace('-', ' ')

    //Create the HTML for modal and assign employee information through object destructuring
    const modalInfo = 
    `<div class="modal-container">
        <div class="modal">
            <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
            <div class="modal-info-container">
                <img class="modal-img" src="${picture.large}" alt="profile picture">
                <h3 id="name" class="modal-name cap">${name.first} ${name.last}</h3>
                <p class="modal-text">${email}</p>
                <p class="modal-text cap">${location.city}, ${location.state}</p>
                <hr>
                <p class="modal-text">${phoneNum}</p>
                <p class="modal-text">${street.number} ${street.name} ${city}, ${state} ${postcode}</p>
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
    const closeBtn = document.querySelector('.modal-close-btn')
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(document.body.lastElementChild)
    })

    //Grab buttons for next, previous, and the container for all the buttons on a modal
    const modalPrev = document.querySelector('#modal-prev')
    const modalNext = document.querySelector('#modal-next')
    const modalButtons = document.querySelector('.modal-btn-container')
    
       modalButtons.addEventListener('click', (e) => {
        if (e.target == modalNext && currentIndex < employees.length - 1) {
            currentIndex++
        } else if (e.target == modalNext && currentIndex == employees.length - 1) {
            currentIndex = 0
        } else if (e.target == modalPrev && currentIndex > 0) {
            currentIndex--
        }else if (e.target == modalPrev && currentIndex == 0) {
            currentIndex = employees.length -1
        }
        navModal(currentIndex)
    })
}

//Get any clicks on a gallery card and build modal
gallery.addEventListener('click', (e) => {
    const card = e.target.closest('.card')
    const index = card.getAttribute('data-index')
    currentIndex = index
    createModal(currentIndex)
})
