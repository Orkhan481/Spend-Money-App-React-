import React from "react";
import BasketItem from "./BasketItem";

const Basket = ({ basket, products, total, resetBasket }) => {
 
  return (
    <div className="basket">
      <h4>Sifariş detalları</h4>
      {basket.map((item) => (
        <BasketItem item={item} product={products.find(p=> p.id === item.id)} />
      ))}
      <div className="total">Alişveriş həcmi: <span className="total-money">{total} AZN</span></div>
      <button onClick={resetBasket} className="reset-btn">Səbəti Sıfırla</button>
    </div>
  );
};

export default Basket;
