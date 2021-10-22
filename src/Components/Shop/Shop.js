import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import './Shop.css'


const Shop = () => {
    const [books, setBooks] = useState([]);


    useEffect(()=>{
        fetch('https://young-escarpment-23415.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setBooks(data))
    
    },[])
    
    console.log(books)
    


    return (
        <div className="books">

            {
                books.map(book => <Book book={book}></Book>)
            }
        </div>
    );
};

export default Shop;