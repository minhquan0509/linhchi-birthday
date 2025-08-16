// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // Initialize all features
  initPasswordSystem();
  initAlbumSystem();
  initModal();
  createConfetti();
});

// Password system
let currentPassword = "";
const CORRECT_PASSWORD = "1708"; // Change this to your girlfriend's birthday (MMDD format)

function initPasswordSystem() {
  const numberBtns = document.querySelectorAll(".number-btn");
  const clearBtn = document.querySelector(".clear-btn");
  const enterBtn = document.querySelector(".enter-btn");

  // Number button clicks
  numberBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const number = this.getAttribute("data-number");
      addNumberToPassword(number);
    });
  });

  // Clear button
  clearBtn.addEventListener("click", clearPassword);

  // Enter button
  enterBtn.addEventListener("click", checkPassword);
}

function addNumberToPassword(number) {
  if (currentPassword.length < 4) {
    currentPassword += number;
    updatePasswordDisplay();

    // Auto-check if 4 digits entered
    if (currentPassword.length === 4) {
      setTimeout(checkPassword, 500);
    }
  }
}

function updatePasswordDisplay() {
  const dots = document.querySelectorAll(".password-dot");

  dots.forEach((dot, index) => {
    if (index < currentPassword.length) {
      dot.classList.add("filled");
      dot.textContent = "●";
    } else {
      dot.classList.remove("filled");
      dot.textContent = "○";
    }
  });
}

function clearPassword() {
  currentPassword = "";
  updatePasswordDisplay();
  hideErrorMessage();

  // Remove any existing success messages
  const container = document.querySelector(".password-container");
  const existingSuccessMsg = container.querySelector(".success-message");
  if (existingSuccessMsg) {
    existingSuccessMsg.remove();
  }
}

function checkPassword() {
  if (currentPassword === CORRECT_PASSWORD) {
    // Correct password
    showSuccessAnimation();
    setTimeout(() => {
      showCongratsScreen();
    }, 1500);
  } else {
    // Wrong password
    showErrorMessage("Wrong password! Try again! ❌");
    clearPassword();
  }
}

function showSuccessAnimation() {
  const container = document.querySelector(".password-container");
  container.style.animation = "successPulse 0.5s ease-out";

  // Remove any existing success messages first
  const existingSuccessMsg = container.querySelector(".success-message");
  if (existingSuccessMsg) {
    existingSuccessMsg.remove();
  }

  // Add success message
  const successMsg = document.createElement("div");
  successMsg.className = "success-message";
  successMsg.textContent = "✅ Correct!";
  successMsg.style.cssText = `
        color: #00ff00;
        font-size: 2rem;
        font-weight: bold;
        margin-top: 20px;
        animation: successBounce 0.5s ease-out;
    `;
  container.appendChild(successMsg);
}

function showErrorMessage(message) {
  const errorElement = document.getElementById("errorMessage");
  errorElement.textContent = message;
  errorElement.style.display = "block";
}

function hideErrorMessage() {
  const errorElement = document.getElementById("errorMessage");
  errorElement.style.display = "none";
}

// Screen navigation
function showCongratsScreen() {
  hideAllScreens();
  document.getElementById("congratsScreen").style.display = "flex";
}

function showAlbumScreen() {
  hideAllScreens();
  document.getElementById("albumScreen").style.display = "flex";
  loadAlbumImages();
}

function showFinalScreen() {
  hideAllScreens();
  document.getElementById("finalScreen").style.display = "flex";
}

function hideAllScreens() {
  const screens = document.querySelectorAll(".screen");
  screens.forEach((screen) => {
    screen.style.display = "none";
  });
}

function restartWebsite() {
  hideAllScreens();
  document.getElementById("passwordScreen").style.display = "flex";
  clearPassword();
  hideErrorMessage();

  // Reset password container animation
  const container = document.querySelector(".password-container");
  container.style.animation = "";
}

// Album system
let currentImageIndex = 1;
const totalImages = 4;
const imagePaths = [
  "images/photo1.jpg",
  "images/photo2.jpg",
  "images/photo3.jpg",
  "images/photo4.jpg",
];

function initAlbumSystem() {
  // Set initial image
  updateAlbumImage();
  updateNavigationButtons();
}

function loadAlbumImages() {
  // Check if images exist, if not show placeholders
  imagePaths.forEach((path, index) => {
    const img = new Image();
    img.onerror = function () {
      // Image doesn't exist, create placeholder
      createImagePlaceholder(index + 1);
    };
    img.src = path;
  });
}

function createImagePlaceholder(index) {
  const currentImg = document.getElementById("currentImage");
  if (currentImg.src.includes(`photo${index}.jpg`)) {
    currentImg.src = `data:image/svg+xml,${encodeURIComponent(`
            <svg width="500" height="400" xmlns="http://www.w3.org/2000/svg">
                <rect width="100%" height="100%" fill="#ffe6f2"/>
                <text x="50%" y="50%" font-family="Arial" font-size="24" fill="#ff69b4" text-anchor="middle">
                    Photo ${index} - Add your image here! 📸
                </text>
            </svg>
        `)}`;
  }
}

function nextImage() {
  if (currentImageIndex < totalImages) {
    currentImageIndex++;
    updateAlbumImage();
    updateNavigationButtons();
  }
}

function previousImage() {
  if (currentImageIndex > 1) {
    currentImageIndex--;
    updateAlbumImage();
    updateNavigationButtons();
  }
}

function goToImage(index) {
  if (index >= 1 && index <= totalImages) {
    currentImageIndex = index;
    updateAlbumImage();
    updateNavigationButtons();
  }
}

function updateAlbumImage() {
  const currentImg = document.getElementById("currentImage");
  const imageNumber = document.getElementById("currentImageNumber");

  // Try to load the image
  currentImg.src = imagePaths[currentImageIndex - 1];
  imageNumber.textContent = currentImageIndex;

  // Check if image exists, if not show placeholder
  currentImg.onerror = function () {
    createImagePlaceholder(currentImageIndex);
  };
}

function updateNavigationButtons() {
  const navBtns = document.querySelectorAll(".nav-btn");

  navBtns.forEach((btn, index) => {
    if (index + 1 === currentImageIndex) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

// Modal functionality
function initModal() {
  const modal = document.getElementById("allImagesModal");
  const closeBtn = document.querySelector(".close");

  // Close modal when clicking close button
  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Close modal when clicking outside
  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Close modal with Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.style.display === "block") {
      modal.style.display = "none";
    }
  });
}

function showAllImages() {
  const modal = document.getElementById("allImagesModal");
  const grid = document.getElementById("allImagesGrid");

  // Clear existing images
  grid.innerHTML = "";

  // Add all images to grid
  for (let i = 1; i <= totalImages; i++) {
    const imgContainer = document.createElement("div");
    const img = document.createElement("img");

    img.src = imagePaths[i - 1];
    img.alt = `Photo ${i}`;
    img.onerror = function () {
      // Create placeholder if image doesn't exist
      this.src = `data:image/svg+xml,${encodeURIComponent(`
                <svg width="150" height="150" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100%" height="100%" fill="#ffe6f2"/>
                    <text x="50%" y="50%" font-family="Arial" font-size="12" fill="#ff69b4" text-anchor="middle">
                        Photo ${i}
                    </text>
                </svg>
            `)}`;
    };

    img.addEventListener("click", function () {
      goToImage(i);
      modal.style.display = "none";
    });

    imgContainer.appendChild(img);
    grid.appendChild(imgContainer);
  }

  modal.style.display = "block";
}

// Special effects
function createConfetti() {
  const colors = ["#f2c2cf", "#d88ba3", "#e8a5b8", "#fdf2f5", "#d88ba3"];
  const shapes = ["💖", "💕", "💗", "💓", "💝", "✨", "🌸"];

  for (let i = 0; i < 20; i++) {
    setTimeout(() => {
      const confetti = document.createElement("div");
      confetti.innerHTML = shapes[Math.floor(Math.random() * shapes.length)];
      confetti.style.cssText = `
                position: fixed;
                top: -20px;
                left: ${Math.random() * 100}vw;
                font-size: 1.5rem;
                pointer-events: none;
                z-index: 9999;
                animation: confettiFall 3s linear forwards;
            `;

      document.body.appendChild(confetti);

      setTimeout(() => confetti.remove(), 3000);
    }, i * 100);
  }
}

// Add custom CSS animations
const style = document.createElement("style");
style.textContent = `
    @keyframes successPulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
    
    @keyframes successBounce {
        0% { transform: scale(0); }
        50% { transform: scale(1.2); }
        100% { transform: scale(1); }
    }
    
    @keyframes confettiFall {
        to { transform: translateY(100vh) rotate(360deg); }
    }
    
    .password-container {
        transition: all 0.3s ease;
    }
    
    .album-image {
        transition: all 0.3s ease;
    }
    
    .album-image:hover {
        transform: scale(1.05);
    }
`;
document.head.appendChild(style);

// Add some Easter eggs
let clickCount = 0;
document.addEventListener("click", function () {
  clickCount++;
  if (clickCount === 15) {
    showEasterEgg();
    clickCount = 0;
  }
});

function showEasterEgg() {
  const egg = document.createElement("div");
  egg.innerHTML = "🥚";
  egg.style.cssText = `
        position: fixed;
        top: ${Math.random() * 80}vh;
        left: ${Math.random() * 80}vw;
        font-size: 3rem;
        z-index: 9999;
        animation: easterEggBounce 2s ease-in-out infinite;
        cursor: pointer;
    `;

  egg.addEventListener("click", function () {
    this.remove();
    showSuccessMessage("🎉 You found an Easter egg! You're amazing! 🌟");
  });

  document.body.appendChild(egg);

  setTimeout(() => egg.remove(), 5000);
}

// Add the Easter egg animation
const easterStyle = document.createElement("style");
easterStyle.textContent = `
    @keyframes easterEggBounce {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        25% { transform: translateY(-20px) rotate(5deg); }
        50% { transform: translateY(-10px) rotate(-5deg); }
        75% { transform: translateY(-15px) rotate(3deg); }
    }
`;
document.head.appendChild(easterStyle);

// Utility function for success messages
function showSuccessMessage(message) {
  const messageDiv = document.createElement("div");
  messageDiv.textContent = message;
  messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(45deg, #f2c2cf, #d88ba3);
        color: white;
        padding: 15px 25px;
        border-radius: 25px;
        font-weight: 600;
        z-index: 10000;
        box-shadow: 0 5px 20px rgba(242, 194, 207, 0.4);
        animation: slideInRight 0.5s ease-out;
    `;

  document.body.appendChild(messageDiv);

  // Remove message after 3 seconds
  setTimeout(() => {
    messageDiv.style.animation = "slideOutRight 0.5s ease-out forwards";
    setTimeout(() => messageDiv.remove(), 500);
  }, 3000);
}

// Add slide animations
const slideStyle = document.createElement("style");
slideStyle.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(slideStyle);
