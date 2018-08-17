import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import Card from './Card';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

ReactDOM.render(<App greet={"Hello Visitor!"}/>, document.getElementById('root'));
registerServiceWorker();
