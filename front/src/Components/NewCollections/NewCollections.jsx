import React, {useEffect, useState} from 'react'
import './NewCollections.css'
// import new_collection from '../Assets/new_collection.js'
import Item from "../Item/Item.jsx";

const NewCollections = () => {
    const [new_collection, setNewCollection] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/new-collections')
            .then((response) => response.json())
            .then((data)=>setNewCollection(data));
    },[])
    return (
        <div id='new-collections'>
            <h1>new in our shop</h1>
            <div className='collections'>
                {new_collection.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price}
                                 old_price={item.old_price}/>
                })}
            </div>
        </div>
    )
}
export default NewCollections
