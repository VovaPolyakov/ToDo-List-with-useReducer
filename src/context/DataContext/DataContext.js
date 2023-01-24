import { createContext, useReducer } from "react";


const initionalState = {
    items:[
        {id:1,text:'Make a ToDo list.',status:false}
    ]
}
const reducer = (state,action) => {
    switch(action.type){
        case 'ADD_TODO':
            return {items:[...state.items,{id:state.items.length + 1,text:action.text,status:false}]};
        case 'DELETE_TODO':
            const updateItems = state.items.map((item) => {
                 if(item.id == action.id){
                    return {
                        ...item,
                        status: action.status
                    }
                }
                return item
            })
            return {items:updateItems}

            
        default:
            return {...state}
    }

}
export const DataContext = createContext({
    state:initionalState,
    dispatch:() => {},
})

export const DataContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(reducer,initionalState)
    return (
        <DataContext.Provider value={[state,dispatch]}>{children}</DataContext.Provider>
    )
}