import { RECEIVE_NEW_THEME, RECEIVE_NEW_THEME_ITEM, RECEIVE_NEW_THEME_ITEMS  } from '../actions/theme_actions';

  
const ThemesReducer = (state = { 
    newTheme: undefined, 
    newThemeItem: undefined, 
    newThemeItems: undefined,
    user: {} 
    }, action) => {
    
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_NEW_THEME:
            newState.newTheme = action.theme.data;
            return newState;
        
        case RECEIVE_NEW_THEME_ITEM:
            newState.newThemeItem = action.theme.data;
            return newState;

        case RECEIVE_NEW_THEME_ITEMS:
            newState.newTheme = action.theme.data;
            return newState;

        default:
        return state;
    }
};

export default ThemesReducer;