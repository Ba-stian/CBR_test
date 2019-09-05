const initialState = {
	game: '',
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
	case 'GAME_SELECTED':
		return {
			game: action.payload,
		};
	default:
		return state;
	}
};

export default reducer;
