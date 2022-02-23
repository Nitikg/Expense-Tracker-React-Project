import React from "react";
import { createContext } from "react";
import { useReducer } from "react";
import AppReducer from "./AppReducer";


//initial state
const initialState = {
    transactions: [
        { id:0, text:"Flower", amount:-50 },
        { id:1, text:"Salary", amount:500 },
        { id:2, text:"Camera", amount:-100 }
    ]
}


// Create context
export const GlobalContext = createContext(initialState);


//Provider Component
export const GlobalProvider =({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return (<GlobalContext.Provider value={{
        transactions:state.transactions,
        deleteTransaction, addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}