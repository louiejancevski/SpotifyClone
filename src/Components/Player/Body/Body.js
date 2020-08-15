import React from 'react'
import './Body.css'
import Header from './Partials/Header'
import { useDataLayerValue } from '../../../DataLayer'
import { useSoundLayerValue } from '../../../SoundLayer'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import FavoriteIcon from '@material-ui/icons/Favorite'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import SongRow from './Partials/SongRow'
import { playlist } from '../../../variables'
import NoPlaylistImage from '../../../Images/noPlaylistImage.png'

function Body({ spotify }) {
	const [{ track, currentPlaylist }, dispatch] = useDataLayerValue()
	const [
		{ audio, playing, positionInPlaylist },
		soundDispatch,
	] = useSoundLayerValue()

	const playPlaylist = () => {
		let audio = new Audio(currentPlaylist?.tracks.items[0].track.preview_url)

		soundDispatch({
			type: 'SET_PLAYING',
			playing: false,
		})

		dispatch({
			type: 'SET_TRACK',
			track: currentPlaylist?.tracks.items[0].track,
		})

		soundDispatch({
			type: 'SET_POSITION_IN_PLAYLIST',
			positionInPlaylist: 0,
		})

		soundDispatch({
			type: 'SET_AUDIO',
			audio: audio,
		})

		soundDispatch({
			type: 'SET_PLAYING',
			playing: true,
		})

		document.title = `${
			currentPlaylist?.tracks.items[0].track.name
		} · ${currentPlaylist?.tracks.items[0].track.artists
			.map((artist) => artist.name)
			.join(', ')}`
	}

	return (
		<div className="body">
			<Header spotify={spotify} />
			<div className="bodyInfo">
				<img
					src={
						currentPlaylist?.images[0]
							? currentPlaylist.images[0].url
							: NoPlaylistImage
					}
					alt=""
				/>
				<div className="bodyInfoText">
					<p className="headerText">PLAYLIST</p>
					<h2>{currentPlaylist?.name}</h2>
					<p>{currentPlaylist?.description}</p>
					<p>
						<span className="owner">{currentPlaylist?.owner.display_name}</span>
						<span className="songs">
							{currentPlaylist?.tracks.total}{' '}
							{currentPlaylist?.tracks.total > 1 ? 'songs' : 'song'}{' '}
						</span>
					</p>
				</div>
			</div>

			<div className="bodySongs">
				<div className="bodyIcons">
					<PlayCircleFilledIcon
						onClick={playPlaylist}
						className="bodyShuffle"
					/>
					<FavoriteIcon fontSize="large" />
					<MoreHorizIcon />
				</div>
				{currentPlaylist?.tracks.items.map((item, index) => (
					<SongRow key={item.track.id} position={index} track={item.track} />
				))}
			</div>
		</div>
	)
}

export default Body
