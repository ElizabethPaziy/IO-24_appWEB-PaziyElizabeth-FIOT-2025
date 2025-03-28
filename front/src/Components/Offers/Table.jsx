import React from "react";
import "./Table.css";

const Table = () => {
    return (
        <div className="offers">
            <h2 className="table-title">why choose our perfume store?</h2>
            <div className="table-container">
                <table className="benefits-table">
                    <thead>
                    <tr>
                        <th>Advantage</th>
                        <th>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Wide Selection</td>
                        <td>We offer a vast range of perfumes from top brands.</td>
                    </tr>
                    <tr>
                        <td>Best Prices</td>
                        <td>Competitive prices and frequent discounts.</td>
                    </tr>
                    <tr>
                        <td>Fast Delivery</td>
                        <td>We ensure quick and reliable shipping.</td>
                    </tr>
                    <tr>
                        <td>Authenticity Guarantee</td>
                        <td>All products are 100% original and certified.</td>
                    </tr>
                    <tr>
                        <td>Customer Support</td>
                        <td>Friendly support team available 24/7.</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;
