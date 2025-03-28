// Datos de ejemplo (simulando una API)
const mockMovies = [
  {
    id: 1,
    title: "Dune: Parte Dos",
    cover: "https://via.placeholder.com/200x300?text=Dune+2",
    rating: 4.5,
    comments: [
      { user: "Critico23", text: "Una obra maestra del sci-fi.", likes: 42 },
      { user: "MovieFan", text: "Los efectos son increíbles.", likes: 38 }
    ]
  },
  {
    id: 2,
    title: "Oppenheimer",
    cover: "https://via.placeholder.com/200x300?text=Oppenheimer",
    rating: 4.7,
    comments: [
      { user: "HistoryBuff", text: "Nolan lo hizo de nuevo.", likes: 56 }
    ]
  }
];

// Cargar películas en los carruseles
function loadMovies() {
  const trendingSection = document.getElementById('trending');
  const topRatedSection = document.getElementById('top-rated');

  mockMovies.forEach(movie => {
    const movieCard = `
      <div class="movie-card" onclick="location.href='movie.html?id=${movie.id}'">
        <img src="${movie.cover}" alt="${movie.title}">
        <div class="movie-info">
          <h3>${movie.title}</h3>
          <div class="rating">⭐ ${movie.rating}/5</div>
        </div>
      </div>
    `;
    trendingSection.innerHTML += movieCard;
    topRatedSection.innerHTML += movieCard;
  });
}

// Modal de login
const loginBtn = document.querySelector('.login-btn');
const modal = document.getElementById('login-modal');
const closeBtn = document.querySelector('.close-btn');

loginBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Inicialización
document.addEventListener('DOMContentLoaded', loadMovies);
