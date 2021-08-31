
//get User data from an API
function fetchUsers(url) {
    return fetch(url)
        .then(checkStatus)
        .then(response => response.json())
        .catch(error => {
            gallery.insertAdjacentElement('beforeend', `<h3>You've caused an error! ${error}`)
        })
}

function checkStatus(response) {
    if(response.ok) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(new Error (response.statusText));
    }
}

fetchUsers('https://randomuser.me/api/?results=12&nat=us')
    .then(generateCard)

function formatDob(dob) {
    const dobRegex = /\d{4}-\d{2}-\d{2}/gm;
    dob = dob.match(dobRegex);
    const year = dob[0].split('-')[0];
    const month = dob[0].split('-')[1];
    const day = dob[0].split('-')[2];
    return `${ month }/${ day }/${ year }`;
}      

function navModal() {
    document.body.removeChild(document.body.lastElementChild)
    createModal(currentIndex)    
}

searchContainer.addEventListener('keyup', () => {
    const value = document.querySelector('#search-input').value.toLowerCase()
    const card = document.querySelectorAll('.card')
 
    for(let i=0;i<card.length;i++) {
        let h3 = card[i].querySelector('h3')
        let name = h3.textContent.toLowerCase()

        if (name.includes(value)) {
            card[i].style.display = ''
        } else {
            card[i].style.display = 'none'
        }
    }
 })

