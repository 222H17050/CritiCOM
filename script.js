// Datos de ejemplo (simulando una API)
const mockMovies = [
  {
    "id": 1,
    "title": "Inception",
    "cover": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
    "rating": 4.8,
    "synopsis": "A thief who steals corporate secrets through dream-sharing technology is given a final mission: to implant an idea into a CEO's mind.",
    "genre": ["Sci-Fi", "Thriller"],
    "duration": "148 min",
    "director": "Christopher Nolan",
    "soundtrack": "Hans Zimmer",
    "comments": [
      { "user": "DreamExplorer", "text": "Mind-blowing concept!", "likes": 124 },
      { "user": "CinemaLover", "text": "Leo's best performance.", "likes": 89 }
    ]
  },
  {
    "id": 2,
    "title": "Oppenheimer",
    "cover": "https://m.media-amazon.com/images/M/MV5BNTFlZDI1YWQtMTVjNy00YWU1LTg2YjktMTlhYmRiYzQ3NTVhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    "rating": 4.7,
    "synopsis": "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
    "genre": ["Biography", "Drama", "History"],
    "duration": "180 min",
    "director": "Christopher Nolan",
    "soundtrack": "Ludwig Göransson",
    "comments": [
      { "user": "HistoryBuff", "text": "Nolan lo hizo de nuevo.", "likes": 56 }
    ]
  },
  {
    "id": 3,
    "title": "The Dark Knight",
    "cover": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    "rating": 4.9,
    "synopsis": "Batman faces his greatest challenge yet when the Joker unleashes chaos on Gotham City.",
    "genre": ["Action", "Crime", "Drama"],
    "duration": "152 min",
    "director": "Christopher Nolan",
    "soundtrack": "Hans Zimmer & James Newton Howard",
    "comments": [
      { "user": "GothamFan", "text": "Heath Ledger's Joker is legendary.", "likes": 320 },
      { "user": "MovieCritic", "text": "Redefines superhero films.", "likes": 200 }
    ]
  },
  {
    "id": 4,
    "title": "Interstellar",
    "cover": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    "rating": 4.8,
    "synopsis": "A team of explorers travel through a wormhole in space to ensure humanity's survival.",
    "genre": ["Sci-Fi", "Drama", "Adventure"],
    "duration": "169 min",
    "director": "Christopher Nolan",
    "soundtrack": "Hans Zimmer",
    "comments": [
      { "user": "SpaceLover", "text": "The science and emotion blend perfectly.", "likes": 178 }
    ]
  },
  {
    "id": 5,
    "title": "Pulp Fiction",
    "cover": "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    "rating": 4.7,
    "synopsis": "The lives of two mob hitmen, a boxer, and a gangster's wife intertwine in a series of violent events.",
    "genre": ["Crime", "Drama"],
    "duration": "154 min",
    "director": "Quentin Tarantino",
    "soundtrack": "Various Artists",
    "comments": [
      { "user": "TarantinoFan", "text": "Iconic dialogues and scenes.", "likes": 210 }
    ]
  },
  {
    "id": 6,
    "title": "The Godfather",
    "cover": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    "rating": 4.9,
    "synopsis": "The aging patriarch of an organized crime dynasty transfers control to his reluctant son.",
    "genre": ["Crime", "Drama"],
    "duration": "175 min",
    "director": "Francis Ford Coppola",
    "soundtrack": "Nino Rota",
    "comments": [
      { "user": "ClassicFilmBuff", "text": "The definition of cinema.", "likes": 300 }
    ]
  },
  {
    "id": 7,
    "title": "Fight Club",
    "cover": "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    "rating": 4.6,
    "synopsis": "An insomniac office worker forms an underground fight club as a form of therapy.",
    "genre": ["Drama"],
    "duration": "139 min",
    "director": "David Fincher",
    "soundtrack": "The Dust Brothers",
    "comments": [
      { "user": "RebelMind", "text": "You don't talk about it... but you should.", "likes": 155 }
    ]
  },
  {
    "id": 8,
    "title": "The Matrix",
    "cover": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    "rating": 4.7,
    "synopsis": "A computer hacker learns about the true nature of reality and his role in the war against its controllers.",
    "genre": ["Sci-Fi", "Action"],
    "duration": "136 min",
    "director": "Lana & Lilly Wachowski",
    "soundtrack": "Don Davis",
    "comments": [
      { "user": "RedPill", "text": "Changed sci-fi forever.", "likes": 189 }
    ]
  },
  {
    "id": 9,
    "title": "Parasite",
    "cover": "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
    "rating": 4.6,
    "synopsis": "A poor family schemes to become employed by a wealthy household, but secrets unravel.",
    "genre": ["Drama", "Thriller"],
    "duration": "132 min",
    "director": "Bong Joon-ho",
    "soundtrack": "Jung Jae-il",
    "comments": [
      { "user": "FilmCritic101", "text": "Brilliant social commentary.", "likes": 98 }
    ]
  },
  {
    "id": 10,
    "title": "Dune",
    "cover": "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    "rating": 4.5,
    "synopsis": "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset.",
    "genre": ["Sci-Fi", "Adventure"],
    "duration": "155 min",
    "director": "Denis Villeneuve",
    "soundtrack": "Hans Zimmer",
    "comments": [
      { "user": "SciFiEnthusiast", "text": "Visual masterpiece.", "likes": 112 },
      { "user": "BookReader", "text": "Faithful to the source material.", "likes": 76 }
    ]
  },
  {
    "id": 11,
    "title": "Everything Everywhere All at Once",
    "cover": "https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_.jpg",
    "rating": 4.8,
    "synopsis": "A middle-aged Chinese immigrant discovers she must connect with parallel universe versions of herself to save existence.",
    "genre": ["Sci-Fi", "Comedy", "Drama"],
    "duration": "139 min",
    "director": "Daniel Kwan & Daniel Scheinert",
    "soundtrack": "Son Lux",
    "comments": [
      { "user": "MultiverseFan", "text": "Absolutely bonkers in the best way.", "likes": 145 }
    ]
  },
  {
    "id": 12,
    "title": "Blade Runner 2049",
    "cover": "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_.jpg",
    "rating": 4.4,
    "synopsis": "A young blade runner uncovers a secret that threatens to destabilize society and the course of civilization.",
    "genre": ["Sci-Fi", "Drama"],
    "duration": "164 min",
    "director": "Denis Villeneuve",
    "soundtrack": "Hans Zimmer & Benjamin Wallfisch",
    "comments": [
      { "user": "CyberpunkLover", "text": "A visual and auditory feast.", "likes": 87 }
    ]
  },
  {
    "id": 13,
    "title": "Gladiator",
    "cover": "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    "rating": 4.6,
    "synopsis": "A former Roman General seeks vengeance against the corrupt emperor who murdered his family.",
    "genre": ["Action", "Drama", "Adventure"],
    "duration": "155 min",
    "director": "Ridley Scott",
    "soundtrack": "Hans Zimmer",
    "comments": [
      { "user": "EpicMovieFan", "text": "Are you not entertained?!", "likes": 132 }
    ]
  },
  {
    "id": 14,
    "title": "Whiplash",
    "cover": "https://m.media-amazon.com/images/M/MV5BOTA5NDZlZGUtMjAxOS00YTRkLTkwYmMtYWQ0NWEwZDZiNjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    "rating": 4.7,
    "synopsis": "A young drummer pursues perfection under the ruthless instruction of a fearsome music teacher.",
    "genre": ["Drama", "Music"],
    "duration": "106 min",
    "director": "Damien Chazelle",
    "soundtrack": "Justin Hurwitz",
    "comments": [
      { "user": "DrummerLife", "text": "J.K. Simmons is terrifyingly good.", "likes": 95 }
    ]
  },
  {
    "id": 15,
    "title": "Mad Max: Fury Road",
    "cover": "https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    "rating": 4.5,
    "synopsis": "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland.",
    "genre": ["Action", "Adventure", "Sci-Fi"],
    "duration": "120 min",
    "director": "George Miller",
    "soundtrack": "Junkie XL",
    "comments": [
      { "user": "ActionJunkie", "text": "Non-stop adrenaline rush.", "likes": 120 }
    ]
  },
  {
    "id": 16,
    "title": "La La Land",
    "cover": "https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_.jpg",
    "rating": 4.3,
    "synopsis": "A jazz pianist and an aspiring actress fall in love while pursuing their dreams in Los Angeles.",
    "genre": ["Comedy", "Drama", "Musical"],
    "duration": "128 min",
    "director": "Damien Chazelle",
    "soundtrack": "Justin Hurwitz",
    "comments": [
      { "user": "MusicalDreamer", "text": "A love letter to Hollywood.", "likes": 78 }
    ]
  }
];

// Cargar películas en los carruseles
function loadMovies() {
  const trendingSection = document.getElementById('trending');
  const topRatedSection = document.getElementById('top-rated');

  // Limpiar secciones (evita duplicados al recargar)
  trendingSection.innerHTML = '';
  topRatedSection.innerHTML = '';

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

    // Todas las películas van a "Trending"
    trendingSection.innerHTML += movieCard;

    // Solo películas con rating > 4.8 van a "Top Rated"
    if (movie.rating > 4.7) {
      topRatedSection.innerHTML += movieCard;
    }
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
