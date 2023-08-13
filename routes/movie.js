const { Router, query } = require('express');
const connection = require('../db');

const router = Router();

router.post('/getTagMovies', (req, res) => {
  const selectQuery = `
    SELECT movie.id, movie.title, movie.summary, movie.rating, movie.createdDate,
    GROUP_CONCAT(DISTINCT director.filmPeopleName) AS directors,
    GROUP_CONCAT(DISTINCT screenwriter.filmPeopleName) AS screenwriters,
    GROUP_CONCAT(DISTINCT actor.filmPeopleName) AS actors,
    GROUP_CONCAT(DISTINCT genre.genreName) AS genres,
    GROUP_CONCAT(DISTINCT tag.tagName) AS tags
    FROM movie
    INNER JOIN movie_director ON movie.id = movie_director.movieId
    INNER JOIN filmpeople AS director ON movie_director.filmPeopleId = director.id
    INNER JOIN movie_screenwriter ON movie.id = movie_screenwriter.movieId
    INNER JOIN filmpeople AS screenwriter ON movie_screenwriter.filmPeopleId = screenwriter.id
    INNER JOIN movie_actor ON movie.id = movie_actor.movieId
    INNER JOIN filmpeople AS actor ON movie_actor.filmPeopleId = actor.id
    INNER JOIN movie_tag ON movie.id = movie_tag.movieId
    INNER JOIN movie_genre ON movie.id = movie_genre.movieId
    INNER JOIN genre ON movie_genre.genreId = genre.id
    INNER JOIN tag ON movie_tag.tagId = tag.id
    WHERE tag.id = ${req.body.tagId}
    GROUP BY movie.id
  `

  connection.query(selectQuery,(error, results) => {
    if(error){
      console.log(error);
      return;
    }
    res.send(results);
  })
})

router.post('/getDetail', (req, res) => {
  const selectQuery = `
    SELECT movie.id, movie.title, movie.summary, movie.rating, movie.createdDate,
    GROUP_CONCAT(DISTINCT director.filmPeopleName) AS directors,
    GROUP_CONCAT(DISTINCT screenwriter.filmPeopleName) AS screenwriters,
    GROUP_CONCAT(DISTINCT actor.filmPeopleName) AS actors,
    GROUP_CONCAT(DISTINCT genre.genreName) AS genres,
    GROUP_CONCAT(DISTINCT tag.tagName) AS tags
    FROM movie
    INNER JOIN movie_director ON movie.id = movie_director.movieId
    INNER JOIN filmpeople AS director ON movie_director.filmPeopleId = director.id
    INNER JOIN movie_screenwriter ON movie.id = movie_screenwriter.movieId
    INNER JOIN filmpeople AS screenwriter ON movie_screenwriter.filmPeopleId = screenwriter.id
    INNER JOIN movie_actor ON movie.id = movie_actor.movieId
    INNER JOIN filmpeople AS actor ON movie_actor.filmPeopleId = actor.id
    INNER JOIN movie_tag ON movie.id = movie_tag.movieId
    INNER JOIN movie_genre ON movie.id = movie_genre.movieId
    INNER JOIN genre ON movie_genre.genreId = genre.id
    INNER JOIN tag ON movie_tag.tagId = tag.id
    WHERE movie.id = ${req.body.movieId}
    GROUP BY movie.id
  `

  connection.query(selectQuery,(error, results) => {
    if(error){
      console.log(error);
      return;
    }
    res.send(results);
  })
})

module.exports = router;