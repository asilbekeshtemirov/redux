import React from 'react'
import { CardWrapper, Wrapper } from './Product.style'
import Lyustra from '../../assets/images/LyustraInProduct.svg'
import BlackCart from '../../assets/images/Delete.svg'
import EditIcon from '../../assets/images/Edit.svg'
import { useState } from 'react'
import { Navigate } from 'react-router'
import { useNavigate } from 'react-router'

const ManageP = () => {
  const navigate = useNavigate()
  const [products,setProducts] = useState(()=>{
    const stored = localStorage.getItem('products')
    return stored ? JSON.parse(stored):[]
  })

  const deleteFunction = (id)=>{
    let newProducts = products.filter(e=>e.id!==id)
    setProducts(newProducts)
    localStorage.setItem('products',JSON.stringify(newProducts))
  }

  const updateFunction = (id) =>{
    navigate(`/?id=${id}`)
  }

  return (
    <Wrapper style={{ display: 'flex' }}>
      <h1 style={{width:'100%'}}>Manage Product</h1>
    {products.map((product) => (
        <CardWrapper key={product.id}>
          <div>
            <img src={Lyustra} alt={`Product`} />

          </div>
          <p>{product.title}</p>
          <p
            style={{ textDecoration: 'line-through',fontSize:'12px',color:'rgba(159, 159, 159, 1)' }}>
            7 000₽
          </p>
          <div>
            <p style={{fontWeight:700,fontSize:'bold'}}>{product.price}₽</p>
            <div style={{alignItems:'center',display:'flex'}}>
              <button onClick={()=>updateFunction(product.id)} style={{backgroundColor:'white'}}>
                <img src={EditIcon} alt="" />
              </button>
                  <button onClick={()=>deleteFunction(product.id)}  style={{backgroundColor:'rgba(69, 69, 69, 1)'}}>
                <img
                  src={BlackCart}
                  alt="Add to cart"
                />
              </button>
            </div>
          </div>
        </CardWrapper>
    ))}
  </Wrapper>
  )
}

export default ManageP