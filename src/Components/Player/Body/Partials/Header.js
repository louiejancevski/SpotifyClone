import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import { Avatar } from '@material-ui/core'
import { useDataLayerValue } from '../../../../DataLayer'

function Header() {
	const [{ user, demo }] = useDataLayerValue()

	return (
		<div className="header">
			<div className="headerLeft">
				<SearchIcon />
				<input
					placeholder="Search for Artists, Songs, or Podcasts "
					type="text"
				/>
			</div>

			{demo ? (
				<div className="headerRight">
					<Avatar alt="User profile image" />
					<h4>Louie</h4>
					<ArrowDropDownIcon />
				</div>
			) : (
				<div className="headerRight">
					<Avatar alt="User profile image" src={user?.images[0]?.url} />
					<h4>{user?.display_name}</h4>
					<ArrowDropDownIcon />
				</div>
			)}
		</div>
	)
}

export default Header
