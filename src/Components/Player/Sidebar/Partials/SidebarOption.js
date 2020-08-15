import React from 'react'
import './SidebarOption.css'
import { useDataLayerValue } from '../../../../DataLayer'

function SidebarOption({ title, Icon, id }) {
	const [{ spotify, demo }, dispatch] = useDataLayerValue()

	const changePlaylist = (id, e) => {
		spotify.getPlaylist(id).then((response) => {
			dispatch({
				type: 'SET_CURRENT_PLAYLIST',
				currentPlaylist: response,
			})
			document.title = response.name
		})
	}

	return (
		<>
			{demo ? (
				<div className="sidebarOption">
					{Icon && <Icon className="sidebarOptionIcon" />}
					{<p> {title}</p>}
				</div>
			) : (
				<div className="sidebarOption">
					{Icon && <Icon className="sidebarOptionIcon" />}
					{Icon ? (
						<h4>{title}</h4>
					) : (
						<p onClick={(e) => changePlaylist(id, e)}> {title}</p>
					)}
				</div>
			)}
		</>
	)
}

export default SidebarOption
