import './index.scss'

const div = document.createElement('div')
const root = document.getElementById('root')
div.className = 'wrap'
div.innerHTML = `
  <div class="wrap_first">1</div>
  <div class="wrap_second">2</div>
  <div class="wrap_third">3</div>
  <div class="wrap_fouth">4</div>
  <div class="wrap_fifth">5</div>
`

root.appendChild(div)