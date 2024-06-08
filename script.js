
document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault(); 
  window.location.href = 'home.html'; 
});


let currentIndex = 0;

function moveCarousel(direction) {
  const carousel = document.querySelector('.carousel');
  const totalImages = carousel.children.length;
  const imageWidth = carousel.children[0].offsetWidth;
  currentIndex += direction;

  if (currentIndex < 0) {
      currentIndex = totalImages - 1;
  } else if (currentIndex >= totalImages) {
      currentIndex = 0;
  }

  const offset = -currentIndex * imageWidth;
  carousel.style.transform = `translateX(${offset}px)`;
}

document.querySelector('.carousel-button.prev').addEventListener('click', function() {
  moveCarousel(-1);
});

document.querySelector('.carousel-button.next').addEventListener('click', function() {
  moveCarousel(1);
});

setInterval(function() {
  moveCarousel(1);
}, 3000); 


document.querySelector('.logout').addEventListener('click', function() {
  window.location.href = 'index.html';
});


function toggleAccessibilityOptions() {
  const options = document.getElementById('accessibility-options');
  if (options.style.display === 'none' || options.style.display === '') {
      options.style.display = 'block';
  } else {
      options.style.display = 'none';
  }
}

function increaseFontSize() {
  document.body.classList.toggle('large-font');
}

function toggleContrast() {
  document.body.classList.toggle('high-contrast');
}


function toggleUserOptions() {
  const options = document.getElementById('user-options');
  if (options.style.display === 'none' || options.style.display === '') {
      options.style.display = 'block';
  } else {
      options.style.display = 'none';
  }
}

function logout() {
  window.location.href = 'index.html';
}

function recoverPassword() {
  window.location.href = 'recover.html';
}


function showLibrasModal() {
  var modal = document.getElementById("librasModal");
  modal.style.display = "block";
  document.getElementById("librasImage").src = "boneco.jpeg"; 
}


function closeLibrasModal() {
  var modal = document.getElementById("librasModal");
  modal.style.display = "none";
}


document.getElementById('recover-form').addEventListener('submit', function(event) {
  event.preventDefault();
  document.getElementById('message').style.display = 'block'; 
  document.getElementById('recover-button').style.display = 'none'; 
});
