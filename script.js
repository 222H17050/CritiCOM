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

// Cargar datos de la película (simulando API)
function loadMovieDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const movieId = urlParams.get('id');

  // Mock data (en un caso real, esto vendría de una API)
  const movie = mockMovies.find(m => m.id == movieId) || {
    title: "Película no encontrada",
    cover: "https://via.placeholder.com/300x450?text=Error+404",
    rating: 0,
    synopsis: "Esta película no existe en nuestra base de datos.",
    genre: "N/A",
    duration: "N/A",
    director: "N/A",
    soundtrack: "N/A",
    comments: []
  };

  // Actualizar DOM
  document.getElementById('movie-cover').src = movie.cover;
  document.getElementById('movie-title').textContent = movie.title;
  document.getElementById('movie-rating').textContent = `⭐ ${movie.rating}/5`;
  document.getElementById('movie-synopsis').textContent = movie.synopsis;
  document.getElementById('movie-genre').textContent = movie.genre;
  document.getElementById('movie-duration').textContent = movie.duration;
  document.getElementById('movie-director').textContent = movie.director;
  document.getElementById('movie-soundtrack').textContent = movie.soundtrack;

  // Cargar comentarios
  const commentsList = document.getElementById('comments-list');
  if (movie.comments.length > 0) {
    movie.comments.forEach(comment => {
      commentsList.innerHTML += `
        <div class="comment">
          <div class="comment-user">${comment.user}</div>
          <div class="comment-text">${comment.text}</div>
          <div class="comment-likes">${comment.likes} likes</div>
        </div>
      `;
    });
  } else {
    commentsList.innerHTML = "<p>No hay comentarios aún. ¡Sé el primero!</p>";
  }
}

// Verificar si hay sesión para mostrar formularios
function checkSession() {
  // En un caso real, esto verificaría cookies/tokens
  const isLoggedIn = false; // Simulando usuario no logueado
  if (!isLoggedIn) {
    document.getElementById('comment-form').style.display = 'none';
    document.getElementById('rating-section').innerHTML = `
      <p>Debes <a href="#" class="login-link">iniciar sesión</a> para comentar o calificar.</p>
    `;
    // Abrir modal al hacer clic en el enlace
    document.querySelector('.login-link')?.addEventListener('click', () => {
      document.getElementById('login-modal').style.display = 'block';
    });
  }
}

// Inicialización para movie.html
if (window.location.pathname.includes('movie.html')) {
  document.addEventListener('DOMContentLoaded', () => {
    loadMovieDetails();
    checkSession();
  });
}
