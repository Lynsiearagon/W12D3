import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

export const rootReducer = combineReducers({
    // other reducers will go here later :>)
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require('redux-logger').default;
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {       // configureStore has createStore within it 
    return createStore(rootReducer, preloadedState, enhancer);
    // return createStore(rootReducer, preloadedState, applyMiddleware(thunk))
}

export default configureStore

//    Things that go in your src/index.js file: 
     
//     - RootReducer 
//         Takes in all the reducers 
//     - Enhancer setup
//         composeEnhancer(applyMiddleware(thunk, logger)) 
//     - ConfigureStore, taking in preloaded state, returning 
//         rootReducer, preloadedState, enhancer 
