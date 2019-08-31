animatedForm();

function animatedForm() {
  // -> Get the clickable font awesome symbols
  var clickable = document.querySelectorAll (".clickable");
  
  // -> Listen to whenever the symbol is being clicked
  clickable.forEach(clickable => {
    clickable.addEventListener('click', () => {
      
      var input = clickable.previousElementSibling;
      var parent = clickable.parentElement.parentElement;
      var nextForm = parent.nextElementSibling;

      // -> Check for validation
        if (input.type === "text" && validateInput(input)) {
          nextSlide(parent, nextForm);
        }
    })
  })
}

// -> Change to the next slide
function nextSlide(parent, nextForm) {

  // -> Switch parent to inactive
  parent.classList.remove('active');
  parent.classList.add('inactive');

  // -> Switch nextForm to active
  nextForm.classList.add('active');
}

// -> Check whether the input follows the requirement
function validateInput(input) {
  if(input.value.length < 6) {
    error('rgb(189,87,87)');
  }
  else {
    error('rgb(34, 76, 192)');
    return true;
  }
}

// -> Select elements with class form all over the document
var form = document.querySelectorAll (".form");

// -> Flag to signify whether to move to the next element
var moveNext = false;

// -> When there's an error, change the input box element color to red
function error(color) {
  if (!moveNext) {
    form[0].style.backgroundColor = color;
    moveNext = true;
  }
  else {
    form[1].style.backgroundColor = color;
  }
}

// -> Use math random to get the total pahala
var randomNumber = Math.floor(Math.random() * 2001) - 1000;

// -> Add the randomNumber to the result
addResult(randomNumber);

function addResult (num) {
  // -> Get the element with the class "hasil"
  var result = document.querySelectorAll (".hasil");

  // -> Access the textContent inside "hasil"
  result.forEach(function(text) {
    text.textContent += randomNumber;

    // -> Display result based on pahala, change background colors accordingly
    if (randomNumber > 0) {
      text.innerHTML += "<br> <br> <p> Selamat, kamu bisa mulai berinvestasi Cryptopahala! </p>";
      text.parentElement.style.backgroundColor = "green";
    }
    else if (randomNumber === 0) {
      text.innerHTML += "<br> <br> <p> Maaf, kamu tidak punya pahala untuk diinvestasikan :( </p>";
      text.parentElement.style.backgroundColor = "yellow";
    }
    else {
      text.innerHTML += "<br> <br> <p> Maaf, kami tidak menerima investasi dosa :( </p>"
      text.parentElement.style.backgroundColor = "red";
    }
  })
}