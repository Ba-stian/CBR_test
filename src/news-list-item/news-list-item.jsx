import React from 'react';
import PropTypes from 'prop-types';
import item from './news-list-item.css';


const NewsListItem = ({ news }) => (
	<>
		{news.map(({
			id, pic, who, game, when, header, content, experience, comments, marked, views,
		}) => (
			<div className={item.container} key={id}>
				<div>
					{pic ? <img src={require(`../img/${pic}`)} alt="dudes" className={item.img} /> : null}
				</div>
				<div className={item.content}>
					<div className={item.up}>
						<div className={item.up_left}>
							{who && (
								<div className={item.streamer_group}>
									<img src="../img/streamer.svg" alt="streamer" />
									<h3 className={item.streamer}>{who}</h3>
								</div>
							)}
							<div className={item.game_group}>
								{game === 'CSGO'
									? <img src="../img/cs.svg" alt="game" className={item.game_cs} />
									: <img src="../img/dota.svg" alt="game" className={item.game_dota} />}
								<h2 className={item.game}>{game}</h2>
							</div>
						</div>
						<p className={item.when}>{when}</p>
					</div>
					<div className={item.main}>
						<h3 className={item.header}>{header}</h3>
						<p className={item.paragraph}>{content}</p>
					</div>
					<div className={item.footer}>
						<div className={item.footer_left}>
							<div className={item.footer_group}>
								<img src="../img/arrow.svg" alt="up" className={item.icon} />
								<p>{experience}</p>
							</div>
							<div className={item.footer_group}>
								<img src="../img/comment.svg" alt="comment" className={item.icon} />
								<p>{comments || 'Обсудить'}</p>
							</div>
							<div className={item.footer_group}>
								<img src="../img/bookmark.svg" alt="mark" className={item.icon} />
								<p>{marked || 'В закладки'}</p>
							</div>
						</div>
						<div className={item.footer_group_right}>
							<img src="../img/eye.svg" alt="eye" className={item.icon} />
							<p>{views}</p>
						</div>
					</div>
				</div>
			</div>
		))}
	</>
);

NewsListItem.propTypes = {
	news: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};


export default NewsListItem;
