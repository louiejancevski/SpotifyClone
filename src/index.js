import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './Components/App'
import { DataLayer } from './DataLayer'
import { SoundLayer } from './SoundLayer'

import reducer, { initialState } from './reducer'
import soundReducer, { soundInitialState } from './soundReducer'

ReactDOM.render(
	<React.StrictMode>
		<DataLayer initialState={initialState} reducer={reducer}>
			<SoundLayer initialState={soundInitialState} reducer={soundReducer}>
				<App />
			</SoundLayer>
		</DataLayer>
	</React.StrictMode>,
	document.getElementById('root')
)
