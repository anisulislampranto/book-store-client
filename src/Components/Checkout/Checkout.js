import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from "../Navbar/Navbar";
import { useForm } from "react-hook-form";
import "./Checkout.css";
import { UserContext } from "../../App";

const Checkout = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { bookId } = useParams();
  const [productData, setProductData] = useState();

  const {register,handleSubmit,watch,formState: { errors },} = useForm();

  const onSubmit = (data) => {
    const orderDetails = {...loggedInUser, products: productData, shipment: data, date: new Date()};

    fetch('https://young-escarpment-23415.herokuapp.com/addOrder', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(orderDetails)

    })
    .then(res => res.json())
    .then(data = 
      alert('order placed')
    )
  };

  useEffect(() => {
    fetch("https://young-escarpment-23415.herokuapp.com/product/" + bookId)
      .then((res) => res.json())
      .then((data) => setProductData(data[0]));
  }, [bookId]);

  


  return (
    <div>
      <Navbar />
      <div className="checkout-product">
        <img src={productData?.image} alt="book" />
        <h1> {productData?.name} </h1>
        <h3>Price: {productData?.price}</h3>
      </div>
      <div>
        <h1 style={{textAlign:'center'}}>Add Shipping Information And Place Order</h1>
        <form className="order-form" onSubmit={handleSubmit(onSubmit)}>

          <label htmlFor="Name">Name: </label>
          <input placeholder="name" name="receiverName" defaultValue={loggedInUser.name} {...register("receiverName")} />
          <br />
          <label htmlFor="Email">Email: </label>
          <input placeholder="email" name="receiverEmail" defaultValue={loggedInUser.email} {...register("receiverEmail")} />
          <br />
          <label htmlFor="Address">Address: </label>
          <input placeholder="address" name="address" {...register("address")} />
          <br />
          <label htmlFor="Phone">Phone: </label>
          <input placeholder="phone" type="number" name="phone" {...register("phone")}/>     
          <br />
          <button type="submit">Submit And Confirm Order</button>          

        </form>

      </div>
    </div>
  );
};

export default Checkout;
