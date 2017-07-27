// Dependencies
var Twitter = require('twitter');
var twitterKeys = require('./keys.js');
var spotify = require('spotify');


// Declare variables
var arguments = process.argv;

// Authentication for Twitter
var client = new Twitter({
    consumer_key: twitterKeys.consumer_key,
    consumer_secret: twitterKeys.consumer_secret,
    access_token_key: twitterKeys.access_token_key,
    access_token_secret: twitterKeys.access_token_secret
});

/* console.log(client);

 var stream = client.stream('user');

stream.on('data', function (event) {
    console.log(event && event.text);
});

stream.on('error', function (error) {
    throw error;
 });*/


// console.log(arguments);
// console.log(client);

// If the command is 'my-tweets'...
if (arguments[2] === "my-tweets") {
    console.log("@Kiki_flyingman's Last 20 tweets:\n");
    // Send a get request to grab the last 20 tweets from the indicated user's timeline
    client.get('statuses/user_timeline', { screen_name: "kiki_flyingman", count: 20 }, function (error, tweets, response) {

        if (error) throw error;

        else {
            // For all of the tweets that are in the response...
            for (var i = 0; i < tweets.length; i++) {
                // Log the tweet text to the console
                console.log(((i + 1) + "." + tweets[i].text));

                // Log the time that the tweet was created
                console.log("Created at: " + tweets[i].created_at + "\n");
            }
        }
        // console.log(JSON.stringify(tweets, null, 2));
    });
}
// If the command is 'spotify this song'...
else if (arguments[2] === "spotify-this-song") {

} else if (arguments[2] === "movie-this") {

} else if (arguments[2] === "do-what-it-says") {

}

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