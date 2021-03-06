import { types } from "../types/types";

const initialState ={
    notes: [],
    active: null
}

export const notesReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.articleAddNew:
            return{
                ...state,
                notes: [action.payload, ...state.notes]
            }

        case types.articleActive:
            return{
                ...state,
                active: {
                    ...action.payload
                }
            }
        
        case types.articleUnsetActive:
            return{
                ...state,
                active: null
            }

        case types.articleLoad:
            return {
                ...state,
                notes: [...action.payload]
            }

        case types.articleUpdated:
            return{
                ...state,
                notes: state.notes.map(
                    note => 
                    note.id === action.payload.id ? action.payload.note : note)
            }

        case types.articleDelete:
            return{
                ...state,
                active:null,
                notes: state.notes.filter( note => note.id !== action.payload)
            }
        
        case types.articleLogout:
            return {
                ...state,
                notes: [],
                active: null                
            }
        default:
            return state;
    }
}