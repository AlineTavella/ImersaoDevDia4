var filmes = ["Rei Leão", "Pocahontas","Toy Story"]
var capasFilmes = ["https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMzc4YzhiN2ItY2Y4NC00YTA0LWEyMjEtNzllNTcxZDdjODhiXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg"]

for (var i=0; i<capasFilmes.length; i++){
  document.write("<img src=" + capasFilmes[i] + ">")
}