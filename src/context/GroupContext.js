import axios from "axios";
import React, {useReducer} from "react";
import createDataContext from "./createDataContext";


const groupReducer = (state, action) => {   
        switch(action.type){
            case 'add_group':
                return [...state, { id: Math.floor(Math.random() * 9999), 
                        title: action.payload.title,
                        description: action.payload.description,
                        latitude: action.payload.latitude,
                        longitude: action.payload.longitude                        
                    }
                ]
            case 'delete_group':
                return state.filter((groupPost) => {
                    return groupPost.id !== action.payload
                });
            case 'edit_group':
                return state.map((groupPost) => {
                    if(groupPost.id === action.payload.id) {
                        return action.payload;
                    }
                    else {
                        return groupPost;
                    }
                })
            default:
                return state;
        }
    }

    
    const addGroup = (dispatch) => {
        return (title, description,  latitude, longitude, callback) => {
                dispatch({ type: 'add_group', payload: {title: title, description: description, latitude: latitude, longitude: longitude,}})
                callback();
            }
    }
    
    const deleteGroup = (dispatch) => {
        return (id) => {
            dispatch({ type: 'delete_group', payload: id })
        }
    }

    const editGroup = (dispatch) => {
        return (id, title, description, callback) => {
            dispatch({type: 'edit_group', payload: { id: id, title: title, description: description, latitude: latitude, longitude: longitude}})
            callback();
        }
    }
    

export const {Provider, Context} = createDataContext(
    groupReducer, {addGroup, deleteGroup, editGroup}, 
    [{id: 1, title: "Test Group", description: "Test Description", latitude: 30.023432002000366, longitude: -90.06559621153748}]);