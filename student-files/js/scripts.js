url = 'https://randomuser.me/api/?results=12&nat=us'

fetch(url)
    .then(res => res.json())
    .then(res => res.results)
    .then(generateCard)
    .then()
    .catch(err => console.log(err))

function formatDob(dateOfBirth) {
    const year = dateOfBirth.date.slice(0,4);
    const month = dateOfBirth.date.slice(5,7);
    const day = dateOfBirth.date.slice(8,10);
    return `${month}/${day}/${year}`;
}     

function navModal(currentIndex) {
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

