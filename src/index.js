import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './Components/App'
import { DataLayer } from './DataLayer'
import { AudioLayer } from './AudioLayer'
import reducer, { initialState } from './reducer'
import audioReducer, { soundInitialState } from './audioReducer'

ReactDOM.render(
	<React.StrictMode>
		<DataLayer initialState={initialState} reducer={reducer}>
			<AudioLayer initialState={soundInitialState} reducer={audioReducer}>
				<App />
			</AudioLayer>
		</DataLayer>
	</React.StrictMode>,
	document.getElementById('root')
)
