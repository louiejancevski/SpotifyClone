import React from 'react'
import Sidebar from '../Player/Sidebar/Sidebar'
import Body from '../Player/Body/Body'
import Footer from '../Player/Footer/Footer'
import staticData from './staticData.json'

function Demo() {
	return (
		<div className="demo">
			<div className="player">
				<div className="playerBody">
					<Sidebar static={staticData} />
					<Body staticData={staticData} />
				</div>
				<Footer staticData={staticData} />
			</div>
		</div>
	)
}

export default Demo
