import React, { useEffect } from 'react'
import './App.css'
import Login from './Login/Login'
import { getTokenFromURL } from '../Config/spotify'
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './Player/Player'
import Demo from './Demo/Demo'
import { useDataLayerValue } from '../DataLayer'
import { playlist } from '../variables'

const spotify = new SpotifyWebApi()

function App() {
	const [{ demo, token }, dispatch] = useDataLayerValue()

	useEffect(() => {
		const hash = getTokenFromURL()
		window.location.hash = ''
		let _token = hash.access_token

		if (_token) {
			spotify.setAccessToken(_token)

			dispatch({
				type: 'SET_TOKEN',
				token: _token,
			})

			dispatch({
				type: 'SET_SPOTIFY',
				spotify: spotify,
			})

			spotify.getPlaylist(playlist).then((response) =>
				dispatch({
					type: 'SET_CURRENT_PLAYLIST',
					currentPlaylist: response,
				})
			)

			spotify.getUserPlaylists().then((playlists) => {
				dispatch({
					type: 'SET_PLAYLISTS',
					playlists: playlists,
				})
			})

			spotify.getMe().then((user) => {
				dispatch({
					type: 'SET_USER',
					user,
				})
			})
		}
	}, [token, dispatch])

	return (
		<div className="app">
			{token ? <Player spotify={spotify} /> : demo ? <Demo /> : <Login />}
		</div>
	)
}

export default App
