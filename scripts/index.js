// ----------- part 1: buttons -------------

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

// ----------- part 2: hover -------------

var divHover = document.getElementsByClassName('mainNav-divHover')[0]

divHover.addEventListener('mouseenter', function () {
  alert('Hey, I told you not to hover over me!')
})

// ----------- part 3: key press -------------

var h1Key = document.getElementsByClassName('mainNav-h1Key')[0]

document.addEventListener('keypress', function (event) {
  h1Key.innerHTML = event.key
})

// ----------- part 4: login -------------

var btnSubmit = document.getElementsByClassName('mainNav-btnSubmit')[0]
var txtUser = document.getElementsByClassName('mainNav-txtUser')[0]
var txtPass = document.getElementsByClassName('mainNav-txtPass')[0]
var h1Login = document.getElementsByClassName('mainNav-h1Login')[0]

btnSubmit.addEventListener('click', function () {
  if ((txtPass.value === '12345678') && (txtUser.value.length < 14)) {
    h1Login.innerHTML = 'Congrats on knowing your username and password!'
  } else {
    alert('Incorrect username or password')
  }
})
