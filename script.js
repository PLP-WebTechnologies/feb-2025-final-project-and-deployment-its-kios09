// Mobile Navigation
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");

burger.addEventListener("click", () => {
  // Toggle Nav
  nav.classList.toggle("nav-active");

  // Animate Links
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${
        index / 7 + 0.3
      }s`;
    }
  });

  // Burger Animation
  burger.classList.toggle("toggle");
});

// Newsletter Form
const newsletterForm = document.getElementById("newsletter-form");
const emailInput = document.getElementById("email");
const feedback = document.getElementById("form-feedback");

newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = emailInput.value;

  if (validateEmail(email)) {
    feedback.textContent = "Thank you for subscribing!";
    feedback.style.color = "var(--success-color)";
    emailInput.value = "";

    // In a real app, you would send this to a server
    setTimeout(() => {
      feedback.textContent = "";
    }, 3000);
  } else {
    feedback.textContent = "Please enter a valid email address.";
    feedback.style.color = "var(--error-color)";
  }
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// CTA Button Animation
const ctaButton = document.getElementById("cta-button");

ctaButton.addEventListener("click", () => {
  ctaButton.textContent = "Loading...";
  setTimeout(() => {
    window.location.href = "#featured-posts";
    ctaButton.textContent = "Explore Articles";
  }, 1000);
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
