// --- Effetto typing ---
const text = "Ciao, sono Antonella";
let i = 0;

function typeWriter() {
  const typingEl = document.getElementById("typing");
  if (!typingEl) return;

  if (i < text.length) {
    typingEl.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}

// --- Timeline animata con IntersectionObserver ---
function animateTimeline() {
  const items = document.querySelectorAll('.timeline-item');
  if (!items.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.3 });

  items.forEach(item => observer.observe(item));
}

// --- Modale conferma form ---
function setupFormModal() {
  const form = document.querySelector(".contact-form");
  const modal = document.getElementById("modal");
  const closeBtn = document.getElementById("closeBtn"); // <-- cambiato
  const btnSi = document.getElementById("btnSi");
  const btnNo = document.getElementById("btnNo");

  if (!form || !modal || !closeBtn || !btnSi || !btnNo) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    modal.style.display = "block";
  });

  // Chiudi con icona
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  btnNo.addEventListener("click", () => {
    modal.style.display = "none";
  });

  btnSi.addEventListener("click", () => {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const messaggio = document.getElementById("messaggio").value;

    localStorage.setItem("formData", JSON.stringify({ nome, email, messaggio }));

    window.location.href = "riepilogoDati.html";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
}

// --- Avvio allo start ---
window.onload = function () {
  typeWriter();
  animateTimeline();
  setupFormModal();
};
