import './index.scss'

const div = document.createElement('div')
const root = document.getElementById('root')
div.className = 'wrap'
div.innerHTML = `
  <div class="wrap_frist">1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
`

root.appendChild(div)