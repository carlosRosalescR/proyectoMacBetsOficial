import { types } from "../types/type";

const initialState = {
    DropdownOpen: false,
    openCartilla: false
}



export const uiReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case types.uiOpenDropdown:
            return {
                ...state,
                dropdownOpen: true
            }

        case types.uiCloseDropdown:
            return {
                ...state,
                dropdownOpen: false
            }
        case types.uiOpenModal:
            return {
                ...state,
                openCartilla: true
            }
        case types.uiCloseModal:
            return {
                ...state,
                openCartilla: false
            }
        default:
            return state;
    }
}