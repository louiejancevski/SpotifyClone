import React from "react"
import "./Sidebar.css"
import SidebarOption from "./SidebarOption"
import { useDataLayerValue } from "../DataLayer"
import { ReactComponent as Logo } from "../Logo/logo.svg"
import { ReactComponent as Home } from "../Icons/home.svg"
import { ReactComponent as Search } from "../Icons/search.svg"
import { ReactComponent as Library } from "../Icons/library.svg"

function Sidebar() {
	const [{ playlists }] = useDataLayerValue()

	return (
		<div className="sidebar">
			<Logo className="sidebarLogo" />
			<SidebarOption Icon={Home} title="Home" />
			<SidebarOption Icon={Search} title="Search" />
			<SidebarOption Icon={Library} title="Your Library" />
			<br />
			<strong className="sidebarTitle">Playlists</strong>
			<hr />

			{playlists?.items?.map((playlist) => (
				<SidebarOption title={playlist.name} />
			))}
		</div>
	)
}

export default Sidebar
