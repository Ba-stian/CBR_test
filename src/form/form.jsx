import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import form from './form.css';
import gameSelected from '../actions';


class Form extends Component {
	onGameSelected = (e) => {
		const { onGameSelected } = this.props;
		onGameSelected(e.target.value);
	};

	render() {
		return (
			<form>
				<select name="game" onChange={this.onGameSelected} className={form.select}>
					<option value="Все">Все: игры</option>
					<option value="CSGO">CSGO</option>
					<option value="Dota">Dota</option>
				</select>
			</form>
		);
	}
}

Form.propTypes = {
	onGameSelected: PropTypes.func.isRequired,
};


const mapDispatchToProps = {
	onGameSelected: gameSelected,
};

export default connect(null, mapDispatchToProps)(Form);
