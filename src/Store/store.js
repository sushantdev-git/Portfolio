import { createStore,compose,applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import ImageViewer from './reducers/imageViewer';

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


const rootReducer = combineReducers({
  imgViewer: ImageViewer,
})


const store = createStore(rootReducer, composeEnhances(
    applyMiddleware(thunk)
));

export default store;