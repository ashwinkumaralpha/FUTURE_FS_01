// ===== Edit your content here =====
const G = 'https://github.com/ashwinkumaralpha/';
const projects = [
  { t: 'Personal Portfolio Website', d: 'Full-stack portfolio built as my internship task: responsive frontend with a contact form that sends email notifications through a Node.js backend.',
    s: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'Nodemailer'], live: 'https://portfolio-website-phi-nine-72.vercel.app', code: G + 'FUTURE_FS_01' },
  { t: 'Predictive Maintenance Agent', d: 'Hackathon project: a machine-monitoring dashboard that runs an Isolation Forest model in the browser to score failure risk and trigger maintenance workflows.',
    s: ['JavaScript', 'HTML', 'Machine Learning'], code: G + 'hackathon' },
  { t: 'Happy Paws Pet Spa', d: 'Pet grooming and boarding website with a booking form; a Node.js and Express backend sends booking details by email.',
    s: ['HTML', 'Node.js', 'Express', 'Nodemailer'], code: G + 'happy-paws' },
  { t: 'Rule-Based Chatbot', d: 'Python chatbot that answers greetings, the time and the date using predefined rules. Built for the CODSOFT internship.',
    s: ['Python'], code: G + 'CODSOFT/tree/main/Chatbot_Project' }
];
const $ = s => document.querySelector(s);
const esc = s => s.replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

// Projects
$('#grid').innerHTML = projects.map(p => `
  <article class="card"><h3>${esc(p.t)}</h3><p>${esc(p.d)}</p>
  <div class="tags">${p.s.map(x => `<span>${esc(x)}</span>`).join('')}</div>
  <div class="links">${p.live ? `<a href="${p.live}">Live site</a>` : ''}<a href="${p.code}">Source code</a></div></article>`).join('');

// Rotating word in hero
const words = ['web apps', 'AI projects', 'APIs', 'ML models']; let w = 0;
if (!matchMedia('(prefers-reduced-motion: reduce)').matches)
  setInterval(() => { w = (w + 1) % words.length; $('#swap').textContent = words[w]; }, 2200);
$('#yr').textContent = new Date().getFullYear();

// Contact form
$('#form').addEventListener('submit', async e => {
  e.preventDefault();
  const st = $('#status'), btn = e.target.querySelector('button'), data = Object.fromEntries(new FormData(e.target));
  btn.disabled = true; st.className = ''; st.textContent = 'Sending…';
  try {
    const r = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
    const j = await r.json();
    if (!j.ok) throw new Error(j.error);
    st.className = 'ok'; st.textContent = 'Message sent. I will reply soon.'; e.target.reset();
  } catch (err) { st.className = 'err'; st.textContent = err.message || 'Something went wrong. Please try again.'; }
  btn.disabled = false;
});
