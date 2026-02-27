// Mobile menu toggle
const toggle = document.querySelector('.nav__toggle');
const menu = document.querySelector('.nav__menu');
if (toggle) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  // Close menu on link click (mobile)
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', ()=> menu.classList.remove('open')));
}

// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Reveal-on-scroll animations
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target); }
  })
},{threshold:.12});

document.querySelectorAll('.reveal').forEach(el=> io.observe(el));

// Lightbox for gallery
const dlg = document.getElementById('lightbox');
const dlgImg = dlg?.querySelector('img');
const dlgClose = dlg?.querySelector('.lightbox__close');

document.querySelectorAll('.gallery img').forEach(img=>{
  img.addEventListener('click',()=>{
    if(!dlg || !dlgImg) return;
    dlgImg.src = img.src;
    dlg.showModal();
  })
})

dlgClose?.addEventListener('click',()=> dlg.close());

// Fake submit for contact form (no backend)
const form = document.getElementById('contactForm');
form?.addEventListener('submit', (e)=>{
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  alert(`Thanks ${data.name}! We will contact you at ${data.email}.`);
  form.reset();
});

// Nav toggle (duplicate handler cleaned up)
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav__toggle');
  const navMenu = document.querySelector('.nav__menu');
  navToggle.addEventListener('click', function() {
    navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', navMenu.classList.contains('open'));
  });
});

// =============================
// Activity modal
// =============================
const activityModal = document.getElementById("activityModal");
const activityTitle = document.getElementById("activityTitle");
const activityDesc = document.getElementById("activityDesc");
const activityImages = document.getElementById("activityImages");
const activityClose = document.querySelector(".activity-modal__close");

// Define all activity data
const activitiesData = {
  "Nutrition Consulting": {
    desc: "Personalized diet guidance to achieve fat-loss, muscle gain, or performance goals.",
    images: ["nutrition1.jpg", "nutrition2.jpg"]
  },
  "Personal Training": {
    desc: "One-on-one coaching designed around your body, schedule, and fitness level.",
    images: ["personal1.jpg", "personal2.jpg"]
  },
  "Weight Training": {
    desc: "Progressive overload programs with dumbbells, barbells, and machines to build strength.",
    images: ["weight1.jpg", "weight2.jpg"]
  },
  "Yoga Classes": {
    desc: "Improve flexibility, balance, and mindfulness with guided yoga sessions.",
    images: ["yoga1.jpg", "yoga2.jpg"]
  },
  "Zumba": {
    desc: "High-energy dance cardio classes that make workouts fun and burn calories fast.",
    images: ["zumba1.jpg", "zumba2.jpg"]
  },
  "Indoor Cycling": {
    desc: "Intense cycling workouts that boost cardiovascular endurance and stamina.",
    images: ["cycle1.jpg", "cycle2.jpg"]
  },
  "Endurance Training": {
    desc: "Conditioning programs for athletes focusing on running, cycling, and sports stamina.",
    images: ["endurance1.jpg", "endurance2.jpg"]
  },
  "Boxing": {
    desc: "Pad work, bag work, and conditioning to improve agility, footwork, and strength.",
    images: ["boxing1.jpg", "boxing2.jpg"]
  },
  "MMA": {
    desc: "Mixed Martial Arts fundamentals including striking, grappling, and conditioning.",
    images: ["mma1.jpg", "mma2.jpg"]
  },
  "Functional Training": {
    desc: "Real-life movement patterns designed to improve mobility and daily strength.",
    images: ["functional1.jpg", "functional2.jpg"]
  },
  "HIIT": {
    desc: "Short bursts of high-intensity exercises for rapid fat loss and endurance.",
    images: ["hiit1.jpg", "hiit2.jpg"]
  },
  "Calisthenics": {
    desc: "Master your bodyweight with push-ups, pull-ups, dips, and advanced holds.",
    images: ["cal1.jpg", "cal2.jpg", "cal3.jpg"]
  },
  "Food Area": {
    desc: "Enjoy healthy, macro-friendly meals to refuel after your workout sessions.",
    images: ["food1.jpg", "food2.jpg"]
  },
  "Steam": {
    desc: "Relaxation sessions with steam therapy for muscle recovery and detox.",
    images: ["steam1.jpg", "steam2.jpg"]
  }
};

// Open modal on card click
document.querySelectorAll("#activities .card").forEach(card => {
  card.addEventListener("click", () => {
    const title = card.querySelector("h3").textContent;
    if (activitiesData[title]) {
      activityTitle.textContent = title;
      activityDesc.textContent = activitiesData[title].desc;
      activityImages.innerHTML = activitiesData[title].images
        .map(img => `<img src="assets/${img}" alt="${title}">`)
        .join("");
      activityModal.showModal();
    }
  });
});

// Close modal
activityClose.addEventListener("click", () => activityModal.close());
