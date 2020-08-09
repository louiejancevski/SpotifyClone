import React, { useEffect } from "react"
import "./Footer.css"
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline"
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious"
import SkipNextIcon from "@material-ui/icons/SkipNext"
import ShuffleIcon from "@material-ui/icons/Shuffle"
import RepeatIcon from "@material-ui/icons/Repeat"
import { Grid, Slider } from "@material-ui/core"
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay"
import VolumeDownIcon from "@material-ui/icons/VolumeDown"
import { useDataLayerValue } from "../DataLayer"
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline"
import NoSong from "../Images/nosong.png"

function Footer({ spotify }) {
	const [{ item, playing }, dispatch] = useDataLayerValue()

	useEffect(() => {
		spotify.getMyCurrentPlaybackState().then((response) => {
			dispatch({
				type: "SET_ITEM",
				item: response.item,
			})
			dispatch({
				type: "SET_PLAYING",
				playing: response.is_playing,
			})
		})
	}, [spotify])

	const handlePlayPause = () => {
		if (playing) {
			spotify.pause()
			dispatch({
				type: "SET_PLAYING",
				playing: false,
			})
		} else {
			spotify.play()
			dispatch({
				type: "SET_PLAYING",
				playing: true,
			})
		}
	}

	const skipNext = () => {
		spotify.skipToNext().then((res) => {
			spotify.getMyCurrentPlayingTrack().then((response) => {
				dispatch({
					type: "SET_ITEM",
					item: response.item,
				})
				dispatch({
					type: "SET_PLAYING",
					playing: true,
				})
				document.title = response.item.name
			})
		})
	}

	const skipPrevious = () => {
		spotify.skipToPrevious().then((res) => {
			spotify.getMyCurrentPlayingTrack().then((response) => {
				dispatch({
					type: "SET_ITEM",
					item: response.item,
				})
				dispatch({
					type: "SET_PLAYING",
					playing: true,
				})
				document.title = response.item.name
			})
		})
	}

	return (
		<div className="footer">
			<div className="footerLeft">
				{item ? (
					<>
						<img
							className="footerAlbumLogo"
							alt="Album"
							src={item.album.images[0].url}
						/>

						<div className="footerSongInfo">
							<h4>{item?.name}</h4>
							<p>{item?.artists?.map((artist) => artist.name).join(", ")}</p>
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
			<div className="footerCenter">
				<ShuffleIcon className="footerGreen" />
				<SkipPreviousIcon onClick={skipPrevious} className="footerIcon" />
				{playing ? (
					<PauseCircleOutlineIcon
						onClick={handlePlayPause}
						fontSize="large"
						className="footer__icon"
					/>
				) : (
					<PlayCircleOutlineIcon
						onClick={handlePlayPause}
						fontSize="large"
						className="footer__icon"
					/>
				)}
				<SkipNextIcon onClick={skipNext} className="footerIcon" />
				<RepeatIcon className="footerGreen" />
			</div>
			<div className="footerRight">
				<Grid container spacing={2}>
					<Grid item>
						<PlaylistPlayIcon />
					</Grid>
					<Grid item>
						<VolumeDownIcon />
					</Grid>
					<Grid item xs>
						<Slider aria-labelledby="continuous-slider" />
					</Grid>
				</Grid>
			</div>
		</div>
	)
}

export default Footer
