// Contoh data proyek, bisa diubah sesuai kebutuhan pribadi
const projects = [
  {
    title: "Landing Page Perusahaan X",
    description: "Website landing page responsif dengan skor performa Google PageSpeed 99+. Desain fokus pada pengalaman pengguna dan konversi.",
    url: "https://contohproject-1.com"
  },
  {
    title: "Platform Edukasi Online",
    description: "Web aplikasi interaktif untuk pembelajaran daring, optimize performance & UI/UX, integrasi API dan real-time komunikasi.",
    url: "https://contohproject-2.com"
  },
  {
    title: "Portal Event Organizer",
    description: "Portal untuk booking event dan manajemen peserta, desain modern dan user journey yang efisien.",
    url: "https://contohproject-3.com"
  }
];

// Generate project cards
function loadProjects() {
  const list = document.getElementById('project-list');
  if (!list) return;
  projects.forEach(project => {
    const card = document.createElement('div');
    card.classList.add('project-card');
    card.innerHTML = `
      <div class="project-title">${project.title}</div>
      <div class="project-desc">${project.description}</div>
      <a href="${project.url}" class="project-link" target="_blank" rel="noopener">Cek Website</a>
    `;
    list.appendChild(card);
  });
}

window.onload = loadProjects;