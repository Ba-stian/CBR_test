import React from 'react';
import NewsList from '../news-list';
import app from './app.css';
import Form from '../form';


const App = () => (
	<div className={app.app}>
		<div className={app.container}>
			<Form />
			<NewsList />
		</div>
	</div>
);

export default App;
