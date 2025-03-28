import React, {useContext} from 'react'
import './CSS/ShopCategory.css'
import {ShopContext} from "../Context/ShopContext.jsx";
import dropdown_icon from '../Components/Assets/Photo/dropdown.svg'
import all_product from "../Components/Assets/all_product.js";
import Item from "../Components/Item/Item.jsx"
const ShopCategory = (props) => {
    const {all_product} = useContext(ShopContext)
    return (
        <div className='shop-category'>
            <img className='shopcategory-banner' src={props.banner} alt="banner"/>
            <div className='shopcategory-indexSort'>
                <div className='shopcategory-sort'>
                    sort by <img className='dropdown_icon' src={dropdown_icon} alt=""/>
                </div>
            </div>
            <div className='shopcategory-products'>
                {all_product.map((item,i)=>{
                    if (props.category===item.category){
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price}
                                     old_price={item.old_price}/>
                    }
                    else{
                        return null;
                    }
                })}
            </div>
            <div className='shopcategory-loadmore'>
                explore more
            </div>
        </div>
    )
}
export default ShopCategory
