'use strict'

const container = document.querySelector('.container')

container.addEventListener('click', function (event) {
  if (event.target.classList.value.includes('card')) {
    removeActiveClassesOnCards()
    event.target.classList.add('card-active')
  }
})

function removeActiveClassesOnCards() {
  const cards = container.querySelectorAll('.card')
  cards.forEach((card) => {
    card.classList.remove('card-active')
  })
}
