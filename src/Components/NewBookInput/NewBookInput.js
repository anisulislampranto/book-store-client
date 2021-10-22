import React, { useState } from "react";
import { useForm } from "react-hook-form";

const axios = require('axios');



const NewBookInput = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [imageUrl, setImageUrl] = useState(null)

  const onSubmit = data => {
    const productData = {
      name: data.name,
      price: data.price,
      image: imageUrl

    }
    const url = 'https://young-escarpment-23415.herokuapp.com/addProduct'
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(productData)
    })
  };

  const handleImageChange = (e) => {
    console.log(e.target.files[0])

    const imageData = new FormData();
    imageData.set('key', 'c4118ed5baffa5fbd6445b742797408b');
    imageData.append('image', e.target.files[0])

    
    axios.post('https://api.imgbb.com/1/upload',
      imageData
    )
    .then(function (response) {
      setImageUrl(response.data.data.display_url);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
    
 

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
      
      <label htmlFor="Name">Name: </label>
      <input name='name' placeholder='Name' {...register("name")} />
      <br />
      <label htmlFor="Price">Price: </label>
      <input name='price' placeholder='Price' type="number" {...register("price")} />

      <br />
      <label htmlFor="Image">Image: </label>
      <input type='file' {...register("image")}  onChange={handleImageChange} />
      
      <input type="submit" />
    </form>



    </div>
  );
};

export default NewBookInput;
