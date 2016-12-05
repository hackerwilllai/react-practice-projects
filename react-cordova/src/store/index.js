import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';

const store = createStore(rootReducer, applyMiddleware(
    // to add some Redux Middleware here...
));

export default store;
