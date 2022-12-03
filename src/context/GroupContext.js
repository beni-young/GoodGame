import axios from "axios";
import React, {useReducer} from "react";
import createDataContext from "./createDataContext";


const groupReducer = (state, action) => {   
        switch(action.type){
            case 'add_group':
                return [...state, { id: Math.floor(Math.random() * 9999), 
                        title: action.payload.title,
                        description: action.payload.description
                    }
                ]
            case 'delete_group':
                return state.filter((groupPost) => {
                    return groupPost.id !== action.payload
                });
            default:
                return state;
        }
    }

    
    const addGroup = (dispatch) => {
        return (title, description, callback) => {
                dispatch({ type: 'add_group', payload: {title: title, description: description} })
                callback();
            }
    }
    
    const deleteGroup = (dispatch) => {
        return (id) => {
            dispatch({ type: 'delete_group', payload: id })
        }
    }
    

export const {Provider, Context} = createDataContext(
    groupReducer, {addGroup, deleteGroup}, []);