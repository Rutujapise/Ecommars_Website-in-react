import React, { useState } from 'react'
//import product from '../data'
import Navbar from '../Componants/Navbar'
import Card from '../Componants/Card'

const Dashboard = ({product}) => {
  const[productState,setProductState]=useState(product)
  return (
    <>
    

     <div className="d-flex flex-wrap">
        {productState.map((product, index) => (
          <div key={index}>
            <div className="badge bg-secondary">
                {product.category}
            </div>
          </div>
        ))}
      </div>
      <div className="container">
        <div className="row">
          {productState.map((product, index) => (
            <div className="col-12 col-md-6 col-lg-3"
            key={index}>
              <Card product={product} />
            </div>
          ))}
        </div>
      </div>
    
    </>
  )
}

export default Dashboard