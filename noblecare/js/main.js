document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("nav__toggle-open");
  const closeBtn = document.getElementById("nav__toggle-close");
  const mobileMenu = document.querySelector(".mobile__menu");
  const menuLinks = mobileMenu.querySelectorAll("a");
  const overlay = document.getElementById("menuOverlay");

  const openMenu = () => {
    mobileMenu.classList.add("active");
    overlay.classList.add("active");
    openBtn.style.display = "none";
    closeBtn.style.display = "inline-block";
  };

  const closeMenu = () => {
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
    closeBtn.style.display = "none";
    openBtn.style.display = "inline-block";
  };

  openBtn.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", closeMenu);

  menuLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  overlay.addEventListener("click", closeMenu); // Close when clicking the dimmed background
});

const testimonials = [
  {
    name: "Margaret E.",
    role: "Daughter of a Service User",
    message:
      "Noble Care has been a blessing to our family. Their carers are professional, kind, and always go the extra mile.",
  },
  {
    name: "James T.",
    role: "Service User",
    message:
      "Thanks to Noble Care, I can stay in my home and live independently. Their support gives me peace of mind every day.",
  },
  {
    name: "Linda K.",
    role: "Family Member",
    message:
      "The staff treat my mum with such respect and patience. I truly trust them with her care.",
  },
  {
    name: "Ronald B.",
    role: "Husband of a Client",
    message:
      "Every carer we've had from Noble has been kind, reliable, and attentive. You can tell they genuinely care.",
  },
  {
    name: "Esther W.",
    role: "Service User",
    message:
      "I never feel alone anymore. They don't just help—they listen, and that means everything.",
  },
  {
    name: "Sarah M.",
    role: "Daughter",
    message:
      "The transition to home care was so smooth with Noble. Their team made sure everything was in place from day one.",
  },
  {
    name: "Joan L.",
    role: "Service User",
    message:
      "I appreciate how they involve me in decisions about my care. I feel respected and in control.",
  },
  {
    name: "Mark R.",
    role: "Family Member",
    message:
      "Reliable, compassionate, and professional—Noble Care is everything we hoped for and more.",
  },
  {
    name: "Rachel T.",
    role: "Daughter",
    message:
      "The carers are like extended family. My dad looks forward to their visits every day.",
  },
  {
    name: "The Ahmed Family",
    role: "Family",
    message:
      "Noble Care's 24/7 support gave us peace of mind during difficult times. We’re forever grateful.",
  },
];

const container = document.getElementById("testimonial-container");
const dotsContainer = document.getElementById("pagination-dots");
let currentIndex = 0;

function renderTestimonials() {
  container.innerHTML = "";
  testimonials.forEach((t, index) => {
    const div = document.createElement("div");
    div.className = `testimonial${index === currentIndex ? " active" : ""}`;
    div.innerHTML = `
        <p class="message">"${t.message}"</p>
        <p class="author">${t.name}</p>
        <p class="role">${t.role}</p>
      `;
    container.appendChild(div);
  });

  renderDots();
}

function renderDots() {
  dotsContainer.innerHTML = "";
  testimonials.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.className = `dot${index === currentIndex ? " active" : ""}`;
    dot.addEventListener("click", () => {
      currentIndex = index;
      renderTestimonials();
    });
    dotsContainer.appendChild(dot);
  });
}

document.querySelector(".prev-btn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  renderTestimonials();
});

document.querySelector(".next-btn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  renderTestimonials();
});

renderTestimonials();

// ===== Frequently Asked Questions Section starts
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active-2");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
// ===== Frequently Asked Questions Section ends
