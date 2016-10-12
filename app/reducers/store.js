import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import movieDb from './movie-db';

export default createStore(movieDb, applyMiddleware(thunk));
