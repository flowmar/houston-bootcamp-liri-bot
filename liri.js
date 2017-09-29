// Dependencies
const Twitter = require('twitter');

const twitterKeys = require('./keys.js');

const SpotifyWebApi = require('spotify-web-api-node');

const spotifyKeys = require("./spotify-keys.js");

const request = require('request');

var fs = require('fs');

// Declare variables
var arguments = process.argv;

// Authentication for Twitter
const client = new Twitter({consumer_key: twitterKeys.consumer_key, consumer_secret: twitterKeys.consumer_secret, access_token_key: twitterKeys.access_token_key, access_token_secret: twitterKeys.access_token_secret});

// Authentication for Spotify

const clientId = spotifyKeys.clientId;
const clientSecret = spotifyKeys.clientSecret;

/* console.log(client);

 var stream = client.stream('user');

stream.on('data', function (event) {
    console.log(event && event.text);
});

stream.on('error', function (error) {
    throw error;
 });*/

// console.log(arguments); console.log(client); If the command is 'my-tweets'...
if (arguments[2] === "my-tweets") {
    console.log("@Kiki_flyingman's Last 20 tweets:\n");
    // Send a get request to grab the last 20 tweets from the indicated user's
    // timeline
    client.get('statuses/user_timeline', {
        screen_name: "kiki_flyingman",
        count: 20
    }, function (error, tweets, response) {

        if (error)
            throw error;

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
    } // If the command is 'spotify this song'...
    );
} else if (arguments[2] === "spotify-this-song") {

    // Set song equal to the 4th argument
    var song = arguments[3];

    // Set artist equatl to the 5th argument
    var artist = arguments[4];

    // Create a new instance of the SpotifyWebApi client
    var spotifyApi = new SpotifyWebApi({clientId: clientId, clientSecret: clientSecret});

    // If the there is no song, default to "Saw the Sign"
    if (arguments[3] == "") {
        song = "Saw the Sign";
    };

    // If there is no Artist, default to "Ace of Base"
    if (arguments[4] == "") {
        artist = "Ace of Base";
    };

    // Use the send the client credentials to the server to return an access token
    spotifyApi
        .clientCredentialsGrant()
        .then(function (data) {
            // console.log('The access token expires in ' + data.body['expires_in']);
            // console.log('The access token is ' + data.body['access_token']); Set the
            // returned access token
            spotifyApi.setAccessToken(data.body['access_token']);
        }, function (err) {
            console.log('Something went wrong when retrieving an access token', err);
        })
        // After the access token is set, search for the track and artist and return the
        // top result
        .then(function () {
            spotifyApi
                .searchTracks('track:' + song + ' artist:' + artist)
                .then(function (data) {
                    console.log('You searched for \nTrack: ' + song + '\nArtist: ' + artist);
                    console.log('\nThere are ' + data.body.tracks.total + ' total results. \nHere is the top result:');
                    console.log("Track: " + data.body.tracks.items[0].name);
                    console.log("Artist: " + data.body.tracks.items[0].artists[0].name);
                    console.log("Album: " + data.body.tracks.items[0].album.name);
                    console.log("Link: " + data.body.tracks.items[0].album.external_urls.spotify);

                    // If there is an error, log the error to the console
                }, function (err) {
                    console.error(err);
                });
        });
} else if (arguments[2] === "movie-this") {
    var movie = arguments[3];
    if (arguments[3] === "") {
        movie = "Mr. Nobody";
    }
    var queryURL = "http://www.omdbapi.com/?apikey=d4444e5f&t=" + movie
    request(queryURL, function (error, response, body) {
        if (error)
            throw error;
        var res = JSON.parse(body);

        console.log("Title: ", res.Title);
        console.log("Year", res.Year);
        console.log("imdb Rating: ", res.Ratings[0].Value);
        console.log("Production: ", res.Production);
        console.log("Language: ", res.Language);
        console.log("Plot: ", res.Plot);
        console.log("Actors: ", res.Actors);
        console.log("Website: ", res.Website);
    });
} else if (arguments[2] === "do-what-it-says") {
    var command = ""
    fs.readFile('./random.txt', 'utf-8', (err, data) => {
        if (err)
            throw err;
        console.log(data);
        command = data;
    });
    console.log(command);
};

/*
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