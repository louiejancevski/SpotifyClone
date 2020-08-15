import React from 'react'
import './Footer.css'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import ShuffleIcon from '@material-ui/icons/Shuffle'
import RepeatIcon from '@material-ui/icons/Repeat'
import { Grid, Slider } from '@material-ui/core'
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay'
import VolumeUpIcon from '@material-ui/icons/VolumeUp'
import VolumeOffIcon from '@material-ui/icons/VolumeOff'
import { useDataLayerValue } from '../../../DataLayer'
import { useAudioLayerValue } from '../../../AudioLayer'
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline'
import NoSong from '../../../Images/nosong.png'

function Footer({ spotify }) {
	const [{ track, currentPlaylist, demo }, dispatch] = useDataLayerValue()
	const [
		{ volume, playing, beforeMute, positionInPlaylist },
		audioDispatch,
	] = useAudioLayerValue()

	const handleVolumeChange = (value) => {
		audioDispatch({
			type: 'SET_VOLUME',
			volume: value / 100,
		})
	}

	const handleMute = () => {
		if (volume > 0) {
			audioDispatch({
				type: 'SET_BEFORE_MUTE',
				beforeMute: volume,
			})
			audioDispatch({
				type: 'SET_VOLUME',
				volume: 0,
			})
		} else {
			audioDispatch({
				type: 'SET_VOLUME',
				volume: beforeMute,
			})
		}
	}

	const handlePlayPause = () => {
		if (playing) {
			audioDispatch({
				type: 'SET_PLAYING',
				playing: false,
			})
		} else {
			audioDispatch({
				type: 'SET_PLAYING',
				playing: true,
			})
		}
	}

	const handlePrevious = () => {
		let audio = new Audio(
			currentPlaylist?.tracks.items[positionInPlaylist - 1].track.preview_url
		)

		audioDispatch({
			type: 'SET_PLAYING',
			playing: false,
		})

		dispatch({
			type: 'SET_TRACK',
			track: currentPlaylist.tracks.items[positionInPlaylist - 1].track,
		})

		audioDispatch({
			type: 'SET_POSITION_IN_PLAYLIST',
			positionInPlaylist: positionInPlaylist - 1,
		})

		audioDispatch({
			type: 'SET_AUDIO',
			audio: audio,
		})

		audioDispatch({
			type: 'SET_PLAYING',
			playing: true,
		})

		if (audio.src.includes('null')) {
			alert(`It looks like this song is not available to be played! 😟`)
		}
	}

	const handleNext = () => {
		let audio = new Audio(
			currentPlaylist.tracks.items[positionInPlaylist + 1].track.preview_url
		)

		audioDispatch({
			type: 'SET_PLAYING',
			playing: false,
		})

		dispatch({
			type: 'SET_TRACK',
			track: currentPlaylist.tracks.items[positionInPlaylist + 1].track,
		})

		audioDispatch({
			type: 'SET_POSITION_IN_PLAYLIST',
			positionInPlaylist: positionInPlaylist + 1,
		})

		audioDispatch({
			type: 'SET_AUDIO',
			audio: audio,
		})

		audioDispatch({
			type: 'SET_PLAYING',
			playing: true,
		})

		if (audio.src.includes('null')) {
			alert(`It looks like this song is not available to be played! 😟`)
		}
	}

	return (
		<>
			<div className="footer">
				<div className="footerLeft">
					{track ? (
						<>
							<img
								className="footerAlbumLogo"
								alt="Album"
								src={track.album.images[0].url}
							/>

							<div className="footerSongInfo">
								<h4>{track?.name}</h4>
								<p>{track?.artists?.map((artist) => artist.name).join(', ')}</p>
							</div>
						</>
					) : (
						<>
							<img
								className="footerAlbumLogo"
								alt="No song is playing"
								src={NoSong}
							/>

							<div className="footerSongInfo">
								<h4>No song is playing</h4>
								<p>...</p>
							</div>
						</>
					)}
				</div>
				{demo ? (
					<>
						<div className="footerCenter">
							<ShuffleIcon className="footerGreen" />
							<SkipPreviousIcon />
							<PlayCircleOutlineIcon fontSize="large" className="footerIcon" />
							<SkipNextIcon />
							<RepeatIcon className="footerGreen" />
						</div>
						<div className="footerRight">
							<Grid container spacing={2}>
								<Grid item>
									<PlaylistPlayIcon />
								</Grid>
								<Grid item>
									{volume > 0 ? <VolumeUpIcon /> : <VolumeOffIcon />}
								</Grid>
								<Grid item xs>
									<Slider
										defaultValue={100}
										min={0}
										max={100}
										onChange={(event, value) => handleVolumeChange(value)}
										aria-labelledby="continuous-slider"
										valueLabelDisplay="off"
									/>
								</Grid>
							</Grid>
						</div>
					</>
				) : (
					<>
						<div className="footerCenter">
							<ShuffleIcon className="footerGreen" />
							{positionInPlaylist > 0 ? (
								<SkipPreviousIcon
									onClick={handlePrevious}
									className="footerIcon"
								/>
							) : (
								<SkipPreviousIcon />
							)}
							{playing ? (
								<PauseCircleOutlineIcon
									onClick={handlePlayPause}
									fontSize="large"
									className="footerIcon"
								/>
							) : (
								<PlayCircleOutlineIcon
									onClick={handlePlayPause}
									fontSize="large"
									className="footerIcon"
								/>
							)}
							{positionInPlaylist !==
							currentPlaylist?.tracks.items.length - 1 ? (
								<SkipNextIcon onClick={handleNext} className="footerIcon" />
							) : (
								<SkipNextIcon />
							)}
							<RepeatIcon className="footerGreen" />
						</div>
						<div className="footerRight">
							<Grid container spacing={2}>
								<Grid item>
									<PlaylistPlayIcon />
								</Grid>
								<Grid item>
									{volume > 0 ? (
										<VolumeUpIcon onClick={handleMute} />
									) : (
										<VolumeOffIcon onClick={handleMute} />
									)}
								</Grid>
								<Grid item xs>
									<Slider
										defaultValue={100}
										min={0}
										max={100}
										onChange={(event, value) => handleVolumeChange(value)}
										aria-labelledby="continuous-slider"
										valueLabelDisplay="off"
									/>
								</Grid>
							</Grid>
						</div>
					</>
				)}
			</div>
		</>
	)
}

export default Footer
