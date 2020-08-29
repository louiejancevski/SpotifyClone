## 🟢 Spotify Clone 
- Built using ReactJS and the Spotify API
- User authentication
- Audio controls
- Version 3.0

## URL / Live version
To use the live demo of this app:
- [louiejancevski.github.io/SpotifyClone](https://louiejancevski.github.io/SpotifyClone/)

## About this project
This project is a ReactJS clone of the Spotify web player.

The main idea is to have users be authenticated through Spotify, and then display them some basic information about their own account.
 
Users are able to: 
- Play or pause a song
- Skip to the next or previous track
- Control the volume
- And also entirely mute the audio

## Taking a look inside

When you first go to app, you get presented with a login page in which you are required to login with your Spotify account in order to proceed to see the web player clone. 

![Login Page](https://github.com/louiejancevski/SpotifyClone/blob/master/src/Images/spotify-login.png)

After clicking the 'Login with Spotify' button, you will be taken to the actual Spotify website where you will be asked to authorize this app to see and do things for you. 

These permissions are to view:
- Content you have recently played
- The content you are playing
- The content you are playing and Spotify Connect devices information
- Your top artists and content

![Spotify Auth](https://github.com/louiejancevski/SpotifyClone/blob/master/src/Images/spotify-auth.png)

Aside from those permissions, the app will also see your name and username, your profile picture, how many followers you have on Spotify and your public playlists.

You can unauthorized this anytime, by going to your Spotify account settings:
- [spotify.com/us/account/apps/](https://www.spotify.com/us/account/apps/)

And clicking 'Remove Access' from 'SpotifyClone'.

This app also never saves your information at no point.

Now...

After you have logged into Spotify and gave the right access, you will finally be presented with the web player:

![Web Player](https://github.com/louiejancevski/SpotifyClone/blob/master/src/Images/player-demo.png)

In previous versions, you weren't able to do anything at all, and it served no other purpose than visual.

I've made it more functional and dynamic now.

You can access any of your playlists and play any of your songs for a max of 30 seconds, change the volume and mute any song, and also skip to the next or previous track. 

For each song that is being played, the `document.title` will also change accordingly.

![Document title](https://github.com/louiejancevski/SpotifyClone/blob/master/src/Images/document-title.png)

**Note:** I added a static version as well for people that just want to take a quick glance at the app.

## Built with:
- [ReactJS](https://reactjs.org/docs/create-a-new-react-app.html)
- [Spotify API](https://developer.spotify.com/documentation/web-api/)
- [Material UI](https://material-ui.com/)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
