import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Card from './Card';
import registerServiceWorker from '.ServiceWorker';
import 'tachyons';

ReactDOM.render(
    <Card />, document.getElementByID('root')
  );
registerServiceWorker();
