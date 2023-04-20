const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')

// adding eventListener to the toggle
toggle.addEventListener('click', () => {
  nav.classList.toggle('active')
})
