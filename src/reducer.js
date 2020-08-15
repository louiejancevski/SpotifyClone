export const initialState = {
	user: null,
	playlists: [],
	spotify: null,
	currentPlaylist: null,
	track: null,
	token: null,
	demo: false,
}

const reducer = (state, action) => {
	switch (action.type) {
		case 'SET_DEMO':
			return {
				...state,
				demo: action.demo,
			}
		case 'SET_USER':
			return {
				...state,
				user: action.user,
			}
		case 'SET_TOKEN':
			return {
				...state,
				token: action.token,
			}
		case 'SET_PLAYLISTS':
			return {
				...state,
				playlists: action.playlists,
			}

		case 'SET_CURRENT_PLAYLIST':
			return {
				...state,
				currentPlaylist: action.currentPlaylist,
			}
		case 'SET_TRACK':
			return {
				...state,
				track: action.track,
			}

		case 'SET_SPOTIFY':
			return {
				...state,
				spotify: action.spotify,
			}
		default:
			return state
	}
}

export default reducer
