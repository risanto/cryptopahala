// $(document).ready(function(){
//   $(".logo-click").on('click', function(event) {
//     if (this.hash !== "") {
//       event.preventDefault();
//       var hash = this.hash;
//       $('html, body').animate({
//         scrollTop: $(hash).offset().top
//       }, 800, function(){
//         window.location.hash = hash;
//       });
//     } 
//   });
// });

function animatedForm() {
  var clickable = document.querySelectorAll (".clickable");

  clickable.forEach(clickable => {
    clickable.addEventListener('click', () => {
      var input = clickable.previousElementSibling;
      var parent = clickable.parentElement.parentElement;
      var nextForm = parent.nextElementSibling;
      console.log("ini input", input);
      console.log("ini parent", parent);
      console.log("ini next form", nextForm);
      
      // check for validation
        if (input.type === "text" && validateInput(input)){
          console.log("BISA");
          nextSlide(parent, nextForm);
        }
    })
  })
}

function validateInput(input) {
  if(input.value.length < 6) {
    console.log('karakter yang kamu masukkan masih terlalu sedikit');
    error('rgb(189,87,87)');
  }
  else {
    error('rgb(173, 216, 230)');
    return true;
  }
}

function nextSlide(parent, nextForm) {

  // switch parent's active and inactive slide
  console.log("parent jalan");
  // parent.classList.add('inactive');
  parent.classList.remove('active');
  parent.classList.add('inactive');

  // switch nextForm's active and inactive slide
  console.log("nextForm jalan");
  // nextForm.classList.add('active');
  nextForm.classList.remove('inactive');
  nextForm.classList.add('active');

}

function error(color) {
  document.body.style.backgroundColor = color;
}

animatedForm();