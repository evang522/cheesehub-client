import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import CheeseList from './Components/cheese-list';
import store from './store';
// import {} from './actions';
import {Provider} from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
<CheeseList/></Provider>, document.getElementById('root'));
registerServiceWorker();