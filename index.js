// Write your code here!
document.getElementById('main').remove()

const h1 = document.createElement('h1')

document.body.appendChild(h1)
h1.id = 'victory'

const newHeader = document.querySelector('h1#victory')

let name = "Ajak"

newHeader.innerHTML = `${name} is the champion`