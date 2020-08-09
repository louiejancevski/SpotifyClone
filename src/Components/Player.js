import React from "react"
import "./Player.css"
import Body from "./Body"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
import { useDataLayerValue } from "../DataLayer"

export default function Player({ spotify }) {
	const [{ playing }] = useDataLayerValue()

	if (playing && typeof playing !== "undefined") {
		spotify.getMyCurrentPlayingTrack().then((response) => {
			document.title =
				response.item?.name +
				" · " +
				response.item?.artists.map((artist) => artist.name).join(", ")
		})
	}

	return (
		<div className="player">
			<div className="playerBody">
				<Sidebar spotify={spotify} />
				<Body spotify={spotify} />
			</div>

			<Footer spotify={spotify} />
		</div>
	)
}
