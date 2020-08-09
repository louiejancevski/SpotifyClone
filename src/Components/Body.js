import React from "react"
import "./Body.css"
import Header from "./Header"
import { useDataLayerValue } from "../DataLayer"
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled"
import FavoriteIcon from "@material-ui/icons/Favorite"
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"
import SongRow from "./SongRow"
import { playlist } from "../variables"

function Body({ spotify }) {
	const [{ discover_weekly }, dispatch] = useDataLayerValue()
	const playPlaylist = (id) => {
		spotify
			.play({
				context_uri: `spotify:playlist:${playlist}`,
			})
			.then((res) => {
				spotify.getMyCurrentPlayingTrack().then((r) => {
					dispatch({
						type: "SET_ITEM",
						item: r.item,
					})
					dispatch({
						type: "SET_PLAYING",
						playing: true,
					})
					document.title = r.item.name
				})
			})
	}

	const playSong = (id) => {
		spotify
			.play({
				uris: [`spotify:track:${id}`],
			})
			.then((res) => {
				spotify.getMyCurrentPlayingTrack().then((r) => {
					dispatch({
						type: "SET_ITEM",
						item: r.item,
					})
					dispatch({
						type: "SET_PLAYING",
						playing: true,
					})
					document.title =
						r.item.name +
						" · " +
						r.item.artists.map((artist) => artist.name).join(", ")
				})
			})
	}

	return (
		<div className="body">
			<Header spotify={spotify} />
			<div className="bodyInfo">
				<img src={discover_weekly?.images[0].url} alt="" />
				<div className="bodyInfoText">
					<p className="headerText">PLAYLIST</p>
					<h2>{discover_weekly?.name}</h2>
					<p>{discover_weekly?.description}</p>
					<p className="owner">{discover_weekly?.owner.display_name}</p>
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

				{discover_weekly?.tracks.items.map((item) => (
					<SongRow playSong={playSong} track={item.track} />
				))}
			</div>
		</div>
	)
}

export default Body
