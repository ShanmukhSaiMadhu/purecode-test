import React from 'react'
import Accordian from './Accordian'
import SalesAndOrders from './SalesAndOrders'
import TopProducts from './TopProducts'

function HeaderMiddle() {
  return (
    <div>
      <SalesAndOrders />
      <Accordian />
      <TopProducts />
    </div>
  )
}

export default HeaderMiddle