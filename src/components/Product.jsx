import React from 'react'

const Product = ({product, basket, setBasket, total, money}) => {
const basketItem = basket.find(item => item.id === product.id)

    const addBasket = ()=>{
        const checkBasket = basket.find(item=>item.id === product.id)

        if(checkBasket){
           checkBasket.amount += 1;
           setBasket([...basket.filter(item=>item.id !== product.id), checkBasket])
        }
        else{
            setBasket([...basket, {
                id:product.id,
                amount:1
            }])
        }
      }

      const removeBasket = () =>{
        const currentBasket = basket.find(item=>item.id === product.id)


        currentBasket.amount -= 1;
           if(currentBasket.amount === 0){
            setBasket([...basket.filter(item=>item.id !== product.id)])

           }
           else{
            setBasket([...basket.filter(item=>item.id !== product.id), currentBasket])
           }

      }



  return (
    <div className='product'>
         <img src={product.image} alt="Images" className='phone-img'/>

        <h2>{product.title}</h2>

        <h4>{product.price} AZN</h4>

      <div className='btns'>
               
            <button disabled={!basketItem} onClick={removeBasket}>Sat</button>
                     <span className='amount'>{basketItem && basketItem.amount || 0}</span>
            <button disabled={total + product.price > money} onClick={addBasket}>Al</button>
     </div>
    </div>
  )
}

export default Product
