import React from 'react'
import breadcrum from '../Assets/Photo/breadcrum.svg'
import './BreadCrum.css'
const Breadcrum = (props) => {
    const {product} = props;
    return (
        <div className='breadcrum'>
            home <img src={breadcrum} alt=""/> shop <img src={breadcrum} alt=""/> {product.category} <img
            src={breadcrum} alt=""/> {product.name}
        </div>
    )
}
export default Breadcrum
