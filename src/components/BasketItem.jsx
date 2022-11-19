import React from 'react'

const BasketItem = ({item, product}) => {
  return (
    <div className='basket-item'>
      <img src={product.image} alt="Images" className='little-phone-img'/>{product.title}  <span className='product-amount'>x {item.amount}</span>
    </div>
  )
}

export default BasketItem
