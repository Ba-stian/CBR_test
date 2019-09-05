import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NewsListItem from '../news-list-item';
import news from '../data/news.json';


const NewsList = ({ game }) => {
	let filtredItems = news.filter(item => (item.game === game));
	if (!filtredItems.length) {
		filtredItems = news;
	}
	return (
		<NewsListItem news={filtredItems} />
	);
};

NewsList.propTypes = {
	game: PropTypes.string.isRequired,
};


const mapStateToProps = ({ game }) => ({
	game,
});

export default connect(mapStateToProps, null)(NewsList);
