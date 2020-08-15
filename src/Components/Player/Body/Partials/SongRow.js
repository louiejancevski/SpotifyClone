import React from 'react'
import './SongRow.css'
import { useDataLayerValue } from '../../../../DataLayer'
import { useSoundLayerValue } from '../../../../SoundLayer'

function SongRow({ track, position }) {
	const [{ currentPlaylist }, dispatch] = useDataLayerValue()
	const [{ playing, volume, repeat }, soundDispatch] = useSoundLayerValue()

	const changeTrack = (track) => {
		let audio = new Audio(track.preview_url)
		if (audio.src.includes('null')) {
			alert(`It looks like this song is not available to be played! 😟`)
		} else {
			soundDispatch({
				type: 'SET_PLAYING',
				playing: false,
			})

			dispatch({
				type: 'SET_TRACK',
				track: track,
			})

			soundDispatch({
				type: 'SET_POSITION_IN_PLAYLIST',
				positionInPlaylist: position,
			})

			soundDispatch({
				type: 'SET_AUDIO',
				audio: audio,
			})

			soundDispatch({
				type: 'SET_PLAYING',
				playing: true,
			})
		}

		document.title = `${track.name} · ${track.artists
			.map((artist) => artist.name)
			.join(', ')}`
	}

	return (
		<div className="songRow" onClick={() => changeTrack(track)}>
			<img
				className="songRowAlbum"
				src={track.album.images[0].url}
				alt={track.name}
			/>
			<div className="songRowInfo">
				<h1>{track.name}</h1>
				<p>
					{track.artists.map((artist) => artist.name).join(', ')} -{' '}
					{track.album.name}
				</p>
			</div>
		</div>
	)
}

export default SongRow