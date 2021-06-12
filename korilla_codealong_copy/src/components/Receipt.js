import React, {useState} from 'react';



const Receipt = (data) => {
    const [paid, setPaid] = useState(data.receipt.paid);
        
    
        return paid ? "" : ( 
            <div>
                <h3>Person: {data.receipt.person}</h3>
                <p><b>Main: </b>{data.receipt.order.main}</p>
                <p><b>Protein: </b>{data.receipt.order.protein}</p>
                <p><b>Rice: </b>{data.receipt.order.rice}</p>
                <p><b>Sauce: </b>{data.receipt.order.sauce}</p>
                <p><b>Toppings: </b>{data.receipt.order.toppings.map(topping => 
                    (topping + ", "))}</p>
                <p><b>Drink: </b>{data.receipt.order.drink}</p>
                <p><b>Cost: </b>{data.receipt.order.cost}</p>
                <button onClick={() => setPaid(!paid)}>Paid Up</button>
                
                <br></br>
            </div>
        )
}      
export default Receipt;