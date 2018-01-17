var btnLeft = document.getElementsByClassName('mainNav-divLeft-btn')[0]
var btnRight = document.getElementsByClassName('mainNav-divRight-btn')[0]

var txtLeft = document.getElementsByClassName('mainNav-divLeft-txt')[0]
var txtRight = document.getElementsByClassName('mainNav-divRight-txt')[0]

btnLeft.addEventListener('click', function () {
  console.log('left click')
  if (txtRight.innerHTML === '') {
    txtLeft.innerHTML = 'I\'m right'
  } else {
    txtRight.innerHTML = 'No, I\'m right!'
  }
})

btnRight.addEventListener('click', function () {
  console.log('right click')
  if (txtLeft.innerHTML === '') {
    txtRight.innerHTML = 'I\'m right'
  } else {
    txtLeft.innerHTML = 'No, I\'m right!'
  }
})
