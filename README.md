# **LIRI-tron**
## *Concepts: Node.js*

---

LIRI stands for "Language Interpretation and Recognition Interface". For this project, we had to create a command line application that retrieves information using API calls.

---

    # Week 10 Assignment

    ### Overview

    In this assignment, you will make LIRI. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

    ### Before You Begin

    1. LIRI will display your latest tweets. As we do not want to display your personal account, or its keys, please make an alias account and add a few tweets to it!

    2. Make a new GitHub repository called liri-node-app and clone it to your computer.

    3. To retrieve the data that will power this app, you'll need to send requests to the Twitter, Spotify and IMDB APIs. You'll find these Node packages crucial for your assignment.

   * [Twitter](https://www.npmjs.com/package/twitter)
   * [Spotify](https://www.npmjs.com/package/spotify)
   * [Request](https://www.npmjs.com/package/request)
     * You'll use Request to grab data from the [OMDB API](http://www.omdbapi.com).

            ### Instructions

            1. Make a .gitignore file and add the following lines to it.


        ```
        node_modules
        .DS_Store
        ```

            2. Make a JavaScript file named `keys.js`. **Do Not** add this file to the .gitignore. This would be a good thing to do in the real world, but it makes grading this assignment a challenge.

            Inside keys.js your file will look like this:

            ```JavaScript
            console.log('this is loaded');

            exports.twitterKeys = {
              consumer_key: '<input here>',
              consumer_secret: '<input here>',
              access_token_key: '<input here>',
              access_token_secret: '<input here>',
            }
            ```

            3. Get your Twitter API keys by following these steps:

               * Step One: Visit <https://apps.twitter.com/app/new>
               * Step Two: Fill out the form with dummy data. Type `http://google.com` in the Website input. Don't fill out the Callback URL input. Then submit the form.
               * Step Three: On the next screen, click the Keys and Access Tokens tab to get your consume key and secret. 
                     * Copy and paste them where the `<input here>` tags are inside your keys.js file.
               * Step Four: At the bottom of the page, click the `Create my access token` button to get your access token key and secret. 
                 * Copy the access token key and secret displayed at the bottom of the next screen. Paste them where the `<input here>` tags are inside your keys.js file.

            4. Make a file called `random.txt`.

            * Inside of `random.txt` put the following in with no extra characters or white space:
                * spotify-this-song,"I Want it That Way"

            5. Make a JavaScript file named `liri.js`.

            6. At the top of the `liri.js` file, write the code you need to grab the data from keys.js. Then store the keys in a variable.

            7. Make it so liri.js can take in one of the following commands:

               * `my-tweets`

               * `spotify-this-song`

               * `movie-this`

               * `do-what-it-says`

            ### What Each Command Should Do

            1. `node liri.js my-tweets`

               * This will show your last 20 tweets and when they were created at in your terminal/bash window.

            2. `node liri.js spotify-this-song '<song name here>'`

               * This will show the following information about the song in your terminal/bash window
             * Artist(s)
            * The song's name
             * A preview link of the song from Spotify
             * The album that the song is from

               * if no song is provided then your program will default to
                 * "The Sign" by Ace of Base

            3. `node liri.js movie-this '<movie name here>'`

               * This will output the following information to your terminal/bash window:

                 ```
               * Title of the movie.
               * Year the movie came out.
               * IMDB Rating of the movie.
               * Country where the movie was produced.
               * Language of the movie.
               * Plot of the movie.
               * Actors in the movie.
             * Rotten Tomatoes URL.
             ```

               * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
                 * If you haven't watched "Mr. Nobody," then you should: <http://www.imdb.com/title/tt0485947/>
                 * It's on Netflix! 

4. `node liri.js do-what-it-says`
          * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
             * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
           * Feel free to change the text in that document to test out the feature for other commands.

            ### BONUS

            * In addition to logging the data to your terminal/bash window, output the data to a .txt file called `log.txt`.
    
            * Make sure you append each command you run to the `log.txt` file. 

        * Do not overwrite your file each time you run a command.

- - -

        ### One More Thing

        If you have any questions about this project or the material we have covered, please post them in the community channels in slack so that your fellow developers can help you! If you're still having trouble, you can come to office hours for assistance from your instructor and TAs.

        **Good Luck!**

        ## Copyright

        Coding Boot Camp (C) 2016. All Rights Reserved.

---

## Deployment

The project was deployed to GitHub pages as:
[gifs-in-a-jiffy](https://flowmar.github.io/liri-bot)

The source code is located [here](https://github.com/liri-bot).

---

## About the Author

### Omar Imam

Find me on: [GitHub](https://github.com/flowmar/)
Portfolio: [Flowmar](https://flowmar.gwiddle.co.uk/)
Connect with me on [LinkedIn](https://linkedin.com/in/flowmar)