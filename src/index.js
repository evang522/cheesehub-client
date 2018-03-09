import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import CheeseList from './Components/cheese-list';
import fetchCheeses from './actions/cheese';

ReactDOM.render(<CheeseList cheeses={
    ["Bath Blue",
    "Barkham Blue",
    "Buxton Blue"]
}/>, document.getElementById('root'));
registerServiceWorker();
