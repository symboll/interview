import './index.scss'

const div = document.createElement('div')
const root = document.getElementById('root')
div.className = 'wrap'
div.innerHTML = `
  <div class="item-1">1</div>
  <div class="item-2">2</div>
  <div class="item-3">3</div>
  <div class="item-4">4</div>
  <br />
  <div class="items-1">1</div>
  <div class="items-2">2</div>
  <div class="items-3">3</div>
  <div class="items-4">4</div>
  <br />
  <div class="icon-a">a</div>
  <div class="icon-b">b</div>
  <div class="icon-c">c</div>
  <div class="icon-d">d</div>
  <br />

  <div class="cur-1">A</div>
  <div class="cur-2">B</div>
  <div class="cur-3">C</div>
  <div class="cur-4">D</div>
  <div class="cur-5">E</div>
`

root.appendChild(div)