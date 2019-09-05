const gameSelected = game => ({
	type: 'GAME_SELECTED',
	payload: game,
});

export { gameSelected as default };
