// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'


const liker = document.querySelectorAll('.like-glyph');

for (heart of liker) {
  heart.addEventListener('click', liked);
}

function liked(event) {
  let targetHeart = event.target;
  mimicServerCall()
  .then(function (res) {
  if (targetHeart.textContent === FULL_HEART) {
    targetHeart.classList.remove('activated-heart')
    targetHeart.textContent = EMPTY_HEART; 
  } else {
      targetHeart.classList.add('activated-heart')
      targetHeart.textContent = FULL_HEART; 
  }})
  .catch(function (error) {
    document.querySelector('#modal').classList.remove('hidden')
    setTimeout(function() {
      document.querySelector('#modal').classList.add('hidden')
    }, 3000)
  })
}






//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
