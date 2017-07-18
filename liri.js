var Twitter = require('twitter')
var twitterKeys = require('./keys.js').twitterKeys;

var client = new Twitter({
    consumer_key: twitterKeys.consumer_key,
    consumer_secret: twitterKeys.consumer_secret,
    access_token_key: twitterKeys.access_token_key,
    access_token_secret: twitterKeys.access_token_secret
});

// console.log(client);

// var stream = client.stream('user');

// stream.on('data', function (event) {
//     console.log(event && event.text);
// });

// stream.on('error', function (error) {
//     throw error;
// });


client.get('statuses/user_timeline', { screen_name: "kvflow", count: 20 }, function (error, tweets, response) {
    if (error) throw error;
    else {
        var count = 20;
        for (var i = 0; i < count; i++) {
            console.log(tweets[i].text);
            // console.log(response);
        }
    }
});

/* Liri needs to be able to take in the following:

node liri.js [command]

|my-tweets
||| This will show your last 20 tweets and when they were created at in your terminal/bash window

|spotify-this-song '<song name here>'
||| This will show the following information about the song in your terminal window:
--Artists
--Song Name
--Spotify Preview Link
--Album that the Song is from
-- If no song, default to "The Sign" by Ace of Base

|movie-this '<movie name here>'
||| This will output:
- Movie Title
- Year
- IMDB rating
- Production Countty
- Language
- Plot
-Actors
- Rotten Tomatoes URL
---- if no movie, default movie 'mr. nobody'

|do-what-it-says
||| using fs, LIRI will take the text from inside of random.txt and then use it to call one of liri's commands
*/