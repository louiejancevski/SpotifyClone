import React, { createContext, useContext, useReducer } from 'react'

export const AudioLayerContext = createContext()

export const AudioLayer = ({ initialState, reducer, children }) => (
	<AudioLayerContext.Provider value={useReducer(reducer, initialState)}>
		{children}
	</AudioLayerContext.Provider>
)

export const useAudioLayerValue = () => useContext(AudioLayerContext)
