import React, { useEffect, useState } from 'react';
import CurrentProducts from '../CurrentProducts/CurrentProducts';
import Sidebar from '../Sidebar.js/Sidebar';
import './ManageBooks.css'

const ManageBooks = () => {
    const [products, setProducts] = useState([])


    useEffect(()=>{
        fetch('https://young-escarpment-23415.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    console.log(products)

    return (
        <div className="manage-books-page">
            <Sidebar/>
            <div  className="details">
                <h1>Manage Books</h1>
                <li className='manage-books-title-header'>
                    <p>Book</p>
                    <p>Book Name</p>
                    <p>Price</p>
                    <p>Action</p>
                </li>
                {
                    products?.map(book=> <CurrentProducts book={book}></CurrentProducts>)
                }                

            </div>
        </div>
    );
};

export default ManageBooks;