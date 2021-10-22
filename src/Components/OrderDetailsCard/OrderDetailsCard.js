import React from 'react';
import './OrderDetailsCard.css'

const OrderDetailsCard = (props) => {
    const {image, name, price} = props.order.products;
    const {address, phone} = props.order.shipment;
    console.log(props)

    return (
        <div className="order-info-card">
            <img src={image} alt="" />
            <p> <span style={{fontWeight: 'bold'}}>Product Name: </span> {name}</p>
            <p> <span style={{fontWeight: 'bold'}}>Product Price:</span> ${price}</p>
            <p> <span style={{fontWeight: 'bold'}}>Shipping Address:</span> {address}</p>
            <p><span style={{fontWeight: 'bold'}}>Contact Number: </span>{phone}</p>

        </div>
    );
};

export default OrderDetailsCard;