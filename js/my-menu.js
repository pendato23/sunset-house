const myMenuButton = document.querySelector('.my-menu.sm-hidden .my-menu-button')
const myMenu = document.querySelector('.my-menu.sm-hidden')



function toggleMyMenu(){
    if ( !myMenu.classList.contains('is-active')) {
        window.addEventListener('click' , closeMyMenuOnClickingOutside)}
    myMenu.classList.toggle('is-active')
}

myMenuButton.addEventListener('click', toggleMyMenu)

function closeMyMenuOnClickingOutside(e){
    if ( !myMenu.contains(e.target)) {
        myMenu.classList.remove('is-active')
        window.removeEventListener('click', closeMyMenuOnClickingOutside)
    }
}

