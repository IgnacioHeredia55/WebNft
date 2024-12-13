// ELEMENTOS DEL DOM 
const seeMoreBtn = document.querySelector(".SeeMore")
const gTwoCards = document.getElementsByClassName('hotcard')

function renderMoreCards () {
    Array.from(gTwoCards).forEach(el => {
        el.classList.remove('card-group2')
        seeMoreHidden()
    }); 
}

let seeMoreHidden = () => seeMoreBtn.classList.add('hidden');


export function productsSectionInit() {
    seeMoreBtn.addEventListener("click", renderMoreCards)
    console.dir(`${gTwoCards}`)
    console.dir(`${seeMoreBtn.textContent}`)
}