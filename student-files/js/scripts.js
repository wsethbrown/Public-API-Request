url = 'https://randomuser.me/api/?results=12&nat=us'
let found = true

fetch(url)
    .then(res => res.json())
    .then(res => res.results)
    .then(generateCard)
    .catch(err => console.log(err))


//format the date of birth
function formatDob(dateOfBirth) {
    const year = dateOfBirth.date.slice(0,4);
    const month = dateOfBirth.date.slice(5,7);
    const day = dateOfBirth.date.slice(8,10);
    return `${month}/${day}/${year}`;
}     

//function called when clicking Next/Prev button on a modal. Removes the current modal before creating next modal
function navModal(currentIndex) {
    document.body.removeChild(document.body.lastElementChild)
    createModal(currentIndex)    
}

//Keyup listener for search container
const searchInput = document.getElementById('search-input')
searchInput.addEventListener('keyup', employeeSearch)

function employeeSearch() {
    const input = searchInput.value.toLowerCase()
    const employeeCard = document.getElementsByClassName('card')
    const employeeName = document.getElementsByClassName('card-name')
    console.log(employeeName)
    let employeesDisplayed = 0

    if (found === false) {
        const noResults = document.getElementById('no-results')
        noResults.remove()
    }

    for (let i=0;i<employees.length;i++) {
        if (employeeName[i].textContent.toLowerCase().includes(input)) {
            employeeCard[i].style.display = ''
            employeesDisplayed++
            found = true
        } else {
            employeeCard[i].style.display = 'none'
        }
    }

    if (employeesDisplayed == 0) {
        gallery.insertAdjacentHTML('beforeend', "<h1 id='no-results'>No employees found</h1>")
        found = false
    }
}