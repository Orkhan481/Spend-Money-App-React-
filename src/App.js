
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Product from './components/Product'
import Basket from './components/Basket'
import Products from './Products.json'

function App() {
  const [money, setMoney] = useState(3700000);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0)

  useEffect(()=>{
    setTotal(
           basket.reduce((acc, item) =>{
              return acc + (item.amount * (Products.find(product => product.id === item.id).price))
       },0))
  },  [basket])


  const resetBasket = () =>{
    setBasket([]);
  }
  
  return (
    <div className="App">
     <Header total={total} money={money} />
     <div className='products'>
     {Products.map(product=>(
       <Product key={product.id} product={product} basket={basket} setBasket={setBasket} total={total} money={money} />
     ))}
     </div>
     {total > 0 && (
      <Basket total={total} products={Products} basket={basket} resetBasket={resetBasket}/>
     )}
     
    </div> 
  );
}

export default App;
