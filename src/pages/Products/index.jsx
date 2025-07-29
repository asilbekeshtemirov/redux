import React from 'react'
import { InputWrapper } from './Product.style'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router'

const Product = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');
  const [product,setProduct]=useState(()=>{
    const stored = localStorage.getItem('products')
    return stored ? JSON.parse(stored):[]
  })

  useEffect(() => {
    if (id) {
      const stored = localStorage.getItem('products');
      if (stored) {
        const parsed = JSON.parse(stored);
        const found = parsed.find(p => p.id.toString() === id);
        if (found) {
          document.getElementById('title').value = found.title;
          document.getElementById('price').value = found.price;
        }
      }
    }
  }, [id]);
  

  useEffect(()=>{
    const stored = localStorage.getItem('products')
    if (stored){
      setProduct(JSON.parse(stored))
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('products',JSON.stringify(product))
  },[product])

  const handleChange  =  (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const price = e.target.price.value;
  
    if (id) {
      const updated = product.map(item =>
        item.id.toString() === id
          ? { ...item, title, price }
          : item
      );
      setProduct(updated);
    } else {
      const newId = Date.now();
      setProduct([...product, { id: newId, title, price }]);
    }
  
    e.target.reset();
  };
  

  return (
    <InputWrapper onSubmit={handleChange}>
      <h1>Create Product</h1>
      <label htmlFor="title">Title</label>
      <input type="text" name="title" id="title" />

      <label htmlFor="price">Price</label>
      <input type="text"  name='price' id='price' />

      <label htmlFor="image-url">Image-url</label>
      <input type="text" name="" id="image-url" />

      <label htmlFor="category">Category</label>
      <select name="category" aria-placeholder='Tanlang' id="category">
        <option value="tanlang">Tanlang</option>
        <option value="qandil">qandil</option>
        <option value="mebel">mebel</option>
      </select>

      <label htmlFor="desc">Desc</label>
      <textarea name="desc" id="desc"></textarea>

      <button type='submit'>Create</button>
    </InputWrapper>
  )
}

export default Product