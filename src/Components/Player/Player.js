import React from 'react'
import './Player.css'
import Body from './Body/Body'
import Sidebar from './Sidebar/Sidebar'
import Footer from './Footer/Footer'
import { useDataLayerValue } from '../../DataLayer'

export default function Player({ spotify }) {
	const [{ playing }] = useDataLayerValue()

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
