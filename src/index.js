import './index.css'

const $wrap = document.getElementById('content')

$wrap.addEventListener('click', function(event) {
  const url = event.target.getAttribute('data-url')
  if(url) {
    const location = window.location.href
    window.location.href = `${location}${url}.html`
  }
})