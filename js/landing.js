console.log("JS loaded successfully!");  
//Hamburger Menu 
const hamburger = document.createElement('button');
hamburger.className = 'hamburger';
hamburger.innerHTML = '&#9776;';
document.querySelector('.navbar .container').prepend(hamburger);
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
//  Video Modal
const modal = document.createElement('div');
modal.id = 'videoModal';
modal.className = 'modal';
modal.innerHTML = `
  <div class="modal-content">
    <span class="close">&times;</span>
    <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
  </div>
`;
document.body.appendChild(modal);
const videoBtn = document.querySelector('.btn-video-text');
const closeBtn = modal.querySelector('.close');
videoBtn.addEventListener('click', () => { modal.style.display = 'block'; });
closeBtn.addEventListener('click', () => { modal.style.display = 'none'; });
window.addEventListener('click', (e) => { if(e.target == modal) modal.style.display = 'none'; });
//FAQ Accordion 
document.querySelectorAll('.faq-item').forEach(item => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');
  question.addEventListener('click', () => {
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});
// Contact Form 
const form = document.querySelector('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  const name = form.querySelector('input[type="text"]').value;
  const email = form.querySelector('input[type="email"]').value;
  const subject = form.querySelector('.csf-full-width').value;
  const message = form.querySelector('textarea').value;
  console.log({name, email, subject, message});
  alert('Form submitted! Check console for values.');
});