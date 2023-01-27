import { useReducer } from "react";
import uuid from 'react-uuid';
import { DataContext } from "../context/DataContext/DataContext";


const initionalState = {
    items:[
        {id:uuid(),text:'Make a ToDo list.',status:false}
    ]
}
const reducer = (state,action) => {
    switch(action.type){
        case 'ADD_TODO':
            return {items:[...state.items,{id:uuid(),text:action.text,status:false}]};
        case 'CHANGE_TODO':
            const updateItems = state.items.map((item) => {
                 if(item.id === action.id){
                    return {
                        ...item,
                        status: action.status
                    }
                }
                return item
            })
            return {items:updateItems};
        case 'DELETE_TODO':
            const clearItems = state.items.filter((item) => item.id !== action.id) 
            return {items:clearItems};
            
        default:
            return {...state}
    }

}

export const DataContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(reducer,initionalState)
    return (
        <DataContext.Provider value={[state,dispatch]}>{children}</DataContext.Provider>
    )
}