import React, { useContext, useState } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from "../Context/ShopContext.jsx";
import dropdown_icon from '../Components/Assets/Photo/dropdown.svg';
import Item from "../Components/Item/Item.jsx";

const ShopCategory = (props) => {
    const { all_product } = useContext(ShopContext);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const filteredProducts = all_product.filter(item => props.category === item.category);
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
    };

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage(prev => prev - 1);
    };

    return (
        <div className='shop-category'>
            <img className='shopcategory-banner' src={props.banner} alt="banner" />
            <div className='shopcategory-indexSort'>
                <div className='shopcategory-sort'>
                    sort by <img className='dropdown_icon' src={dropdown_icon} alt="sort" />
                </div>
            </div>
            <div className='shopcategory-products'>
                {paginatedProducts.map((item, i) => (
                    <Item key={item.id} id={item.id} name={item.name} image={item.image}
                          new_price={item.new_price} old_price={item.old_price} />
                ))}
            </div>
            <div className='shopcategory-pagination'>
                <button onClick={handlePrev} disabled={currentPage === 1}>← last</button>
                <span>page {currentPage} of {totalPages}</span>
                <button onClick={handleNext} disabled={currentPage === totalPages}>next →</button>
            </div>
        </div>
    );
};

export default ShopCategory;
