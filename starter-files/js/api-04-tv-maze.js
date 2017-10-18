
// ##### TV Maze
// https://www.tvmaze.com/ap

// 1. What is the average rating for the show Better Call Saul?

const answer_tvmaze_1 = document.getElementById('tvmaze-1')
request.get('http://api.tvmaze.com/search/shows?q=better')
  .then(function(data) {
// console.log(data.body[1].show.rating.average);
    let avrRat = data.body[1].show.rating.average
    //
    answer_tvmaze_1.innerHTML = avrRat
  })

// 2. When was the premiere date for the 9th season of Friends?

const answer_tvmaze_2 = document.getElementById('tvmaze-2')
request.get('http://api.tvmaze.com/shows/431/seasons')
  .then(function(data) {

    let season9 = data.body[8].premiereDate
    //
    answer_tvmaze_2.innerHTML = season9
  })


// 3. How many shows has actor Andrew Grimes (of the Walking Dead) appeared in?
const answer_tvmaze_3 = document.getElementById('tvmaze-3')
request.get('')
  .then(function(data) {
// console.log(data.body[1].show.rating.average);
    // let andGrimApp = data.body[1].show.rating.average
    //
    answer_tvmaze_3.innerHTML = 'Not Info Available'
  })
