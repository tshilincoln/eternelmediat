

const toggleMenuBtn= document.querySelector('#menu-btn');
const toggleMenuico= document.querySelector('#menu-btn a');
const toggleMenu= document.querySelector('#toggled-menu');
const toggleMenuLinks= document.querySelector('#avig ul li Link');

toggleMenuBtn.addEventListener("click", toggleNave);

function toggleNave(){
    toggleMenu.classList.toogle('-translate-y-full')

    if(toggleMenu.classList.contains('-translate-y-full')){
        toggleMenuico.innerHTML=<FaTimes/>
    }
}