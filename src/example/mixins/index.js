import './index.scss'

const div = document.createElement('div')
const root = document.getElementById('root')
div.className = 'wrap'
div.innerHTML = `
  <div class="page-1">1</div>
  <div class="page-2">2</div>
  <br />
  <div class="page-3">3</div>
  <br />
  <div class="page-4">4</div>
`

root.appendChild(div)