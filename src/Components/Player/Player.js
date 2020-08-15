import React from 'react'
import './Player.css'
import Body from './Body/Body'
import Sidebar from './Sidebar/Sidebar'
import Footer from './Footer/Footer'

export default function Player({ spotify }) {
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
