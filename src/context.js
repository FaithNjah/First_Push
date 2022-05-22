import {createContext} from 'react';
import { useReducer} from 'react';
//create context
export const ThemeContext = createContext()
// initial state
const INITIAL_STATE = {darkMode: true};
//action
const themeReducer = (state, action) => {
switch(action.type){
    case 'TOGGLE': 
    return {darkMode: !state.darkMode};
    default:
        return state;
}
};

export const ThemeProvider = (props) => {
    const [state, dispatch]= useReducer(themeReducer, INITIAL_STATE)
    return(
        <ThemeContext.Provider value = {{state, dispatch}}>
            {props.children}
        </ThemeContext.Provider>
    )
}