import rootReducer from './rootReducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
const logger = store => {
    return next => {
        return action => {
            console.log('[Middleware] Dispatching', action);
            const result = next(action);
            console.log('[Middleware] next state', store.getState());
            return result;
        }
    }
};
export const store = createStore(rootReducer, applyMiddleware(logger, thunk));
