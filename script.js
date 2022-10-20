const toggle =document.getElementsByClassName('toggle')[0]
const barLinks = document.getElementsByClassName('bar-links')[0]


toggle.addEventListener('click', () =>{

barLinks.classList.toggle('active')

})