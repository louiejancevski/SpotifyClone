import React, { useEffect } from 'react'
import './App.css'
import Login from './Login'
import { getTokenFromURL } from '../Config/spotify'
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './Player'
import { useDataLayerValue } from '../DataLayer'
import { playlist } from '../variables'

const spotify = new SpotifyWebApi()

function App() {
	const [{ token }, dispatch] = useDataLayerValue()

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

			spotify.getPlaylist(playlist).then((response) =>
				dispatch({
					type: 'SET_DISCOVER_WEEKLY',
					discover_weekly: response,
				})
			)

			spotify.getMyTopArtists().then((response) =>
				dispatch({
					type: 'SET_TOP_ARTISTS',
					top_artists: response,
				})
			)

			dispatch({
				type: 'SET_SPOTIFY',
				spotify: spotify,
			})

			spotify.getMe().then((user) => {
				dispatch({
					type: 'SET_USER',
					user,
				})
			})

			spotify.getUserPlaylists().then((playlists) => {
				dispatch({
					type: 'SET_PLAYLISTS',
					playlists: playlists,
				})
			})
		}
	}, [token, dispatch])

	return (
		<div className="app">
			{token ? <Player spotify={spotify} /> : <Login />}
		</div>
	)
}

export default App
