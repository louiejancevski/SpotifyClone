import React from 'react'
import './Login.css'
import { loginURL } from '../../Config/spotify'
import { ReactComponent as Logo } from '../../Logo/logo.svg'

function Login() {
	return (
		<div className="login">
			<Logo className="LoginLogo" />
			<a href={loginURL}>Login with Spotify</a>
		</div>
	)
}

export default Login
