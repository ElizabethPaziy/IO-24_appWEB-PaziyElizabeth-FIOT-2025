import React from 'react'
import Hero from "../Components/Hero/Hero.jsx";
import Popular from "../Components/Popular/Popular.jsx";
import Table from "../Components/Offers/Table.jsx";
import NewCollections from "../Components/NewCollections/NewCollections.jsx";

const Shop = () => {
    return (
        <div>
            <Hero/>
            <Popular/>
            <Table/>
            <NewCollections/>
        </div>
    )
}
export default Shop
