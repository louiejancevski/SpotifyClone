## Spotify Clone
- Built using ReactJS and the Spotify API.
- Version 1.0

## URL / Live version
To use the live demo of this app:
-  https://louiejancevski.github.io/SpotifyClone/

## About this project
This project is a ReactJS clone of the Spotify web player.

The main idea is to have users be authenticated through Spotify, and then display them some basic information about their own account.

Users can play their own music and control their other connected devices, to play, pause, or skip songs. 

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

And also your name and username, your profile picture, how many followers you have on Spotify and your public playlists.

You can unauthorized this anytime after, by going to your Spotify account settings:

- https://www.spotify.com/us/account/apps/

And clicking remove access.

This app also never saves your information at no point.

![Web Player](https://github.com/louiejancevski/SpotifyClone/blob/master/src/Images/player-demo.png)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
