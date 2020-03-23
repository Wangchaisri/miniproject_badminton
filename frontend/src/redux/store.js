import {createStore, combineReducers} from 'redux'
const initialForm = {
    
    Name: '',
    Surname: '',
    Tel: '',
    Time: '',
    Price: '', 
}
const formReducer = (state=initialForm,action)=>{
    switch(action.type){
        
        case 'CHANGE_NAME': return {...state,Name: action.Name}
        case 'CHANGE_SURNAME': return {...state,Surname: action.Surname}
        case 'CHANGE_TEL': return {...state,Tel: action.Tel}
        case 'CHANGE_TIME': return {...state,Time: action.Time}
        case 'CHANGE_PRICE': return {...state,Price: action.Price}
        default:return state;
    }
}

const CustomerReducer=(state=[],action)=>{
    switch(action.type){
        case 'GET_CUSTOMERS':
            return action.Customer
        case 'ADD_CUSTOMER': 
            return [...state,action.Customer]
        case 'DELETE_CUSTOMER':
                return state.filter(Customer => Customer.ID !== +action.ID)
        case 'UPDATE_CUSTOMER':
            return state.map(Customer =>{
                if(+Customer.ID === +action.ID)
                    return action.Customer;
                else return Customer;
                })
        default:
            return state;
    }
}
const reducer = combineReducers({
    Customer: CustomerReducer,
    form: formReducer
})



export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);