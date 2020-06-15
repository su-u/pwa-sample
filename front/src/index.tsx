import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Root from './Root';
import createFinalStore from './stores/createFinalStore';
import * as serviceWorker from './serviceWorker';

const store = createFinalStore();

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
serviceWorker.register();