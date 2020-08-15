import React from 'react'
import './Login.css'
import { loginURL } from '../../Config/spotify'
import { ReactComponent as Logo } from '../../Logo/logo.svg'
import { useDataLayerValue } from '../../DataLayer'

function Login() {
	const [{}, dispatch] = useDataLayerValue()

	const setdemo = () => {
		dispatch({
			type: 'SET_DEMO',
			demo: true,
		})
	}

	return (
		<div className="login">
			<Logo className="LoginLogo" />
			<div>
				<a href={loginURL}>Login with Spotify</a>
				<div onClick={setdemo}>Continue with a static version instead</div>
			</div>
		</div>
	)
}

export default Login
