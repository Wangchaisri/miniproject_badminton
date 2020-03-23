import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios'
import '../App.css';
const Customers=(props)=>{


    const customers = useSelector(state=> state.Customer);
    const form = useSelector(state => state.form)
    const dispatch = useDispatch()
     useEffect(()=>{
        getCustomers();
     },[])
     const getCustomers = async () => {
        const result = await axios.get(`https://api-badminton-court.herokuapp.com/api/Customers`)
        console.log(result.data)
        const action = {type:'GET_CUSTOMERS',Customer: result.data}
        dispatch(action)
      }
    
  
    const printCustomers = ()=>{
        if(customers && customers.length){
            return customers.map((customer,index)=>{
                return(
                    <li key={index}>
                            no: {customer.ID} :
                            {customer.Name}  {customer.Surname  } : 
                            {customer.Tel} Major: {customer.Time} GPA:{customer.Price}
                            
                    </li> 
                )
            })
        }
        else{
            return(<h1>No data</h1>)
        }
    }


    return(
        <div>
             <ul>
                {printCustomers()}
            </ul>
        </div>
    )



}
export default Customers;
