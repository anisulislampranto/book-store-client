import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Navbar from '../Navbar/Navbar';
import OrderDetailsCard from '../OrderDetailsCard/OrderDetailsCard';
import './Orders.css'

const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);

    useEffect(()=>{
        fetch('https://young-escarpment-23415.herokuapp.com/orders')
        .then(res =>  res.json())
        .then(data => setOrders(data))
    },[])

    console.log(orders[0]?.email)

    return (
        <>
        <Navbar/>
        <h1 style={{textAlign:'center'}}>{loggedInUser.name} You have Ordered {orders.length} Items</h1>
        <div className="orders">

            {
                orders[0]?.email === loggedInUser.email && orders?.map(order => <OrderDetailsCard order={order}></OrderDetailsCard>)
            }
        </div>
        </>
    );
};

export default Orders;