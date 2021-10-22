import React from 'react';
import './CurrentProducts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenSquare, faTrash } from '@fortawesome/free-solid-svg-icons'

const CurrentProducts = (props) => {
    const {image, name, price, _id } = props.book;
    console.log(props)

 
    const handleDelete = (id) =>{
        console.log(id)
        fetch(`https://young-escarpment-23415.herokuapp.com/delete/${id}`,{
            method: 'DELETE'
        }).then(res => res.json())
        .then(data => console.log('delete success'))
        
    }


    return (
        <div>
            
                <li className='book-details'>
                    <img className='book-image' src={image} alt="" />
                    <h3 className='book-name'>{name}</h3>
                    <p> $ {price}</p>

                    <div>
                        <button className='edit-button'> <FontAwesomeIcon icon={faPenSquare} /> </button>
                        <button className='delete-button' onClick={ () => handleDelete(_id)}> <FontAwesomeIcon icon={faTrash} /></button>
                    </div>
                </li>
            
        </div>
    );
};

export default CurrentProducts;