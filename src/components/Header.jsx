import React from 'react'
import { moneyFormat } from './Helpers'

const Header = ({money, setMoney, total}) => {
  return (
    <header>
      
        {total > 0 && total - money !==0 && (
          <div>Balansınızda {moneyFormat(money-total)}  AZN var.</div>
        )}

     {total === 0 && (
          <div>Balansınızda {moneyFormat(money)}  AZN var.</div>
        )}

      {money - total === 0 && (
          <div>Təəsüfki, balansınızda pul yoxdur.</div>
        )}
     
    </header>
  )
}

export default Header
