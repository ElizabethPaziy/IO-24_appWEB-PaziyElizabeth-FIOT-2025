import React, {useState} from 'react'
import './AddProduct.css'
import upload_area from '../../assets/Photo/upload.png'

const AddProduct = () => {

    const [image, setImage] = useState(false)
    const [productDetails, setProductDetails] = useState({
        name: "",
        description: "",
        image: "",
        category: "women",
        type: "parfum",
        new_price: "",
        old_price: "",
    })

    const imageHandler = (e) => {
        setImage(e.target.files[0])
    }
    const changeHandler = (e) => {
        setProductDetails({...productDetails, [e.target.name]: e.target.value})
    }

    const Add_Product = async () => {
        let responseData;
        let product = productDetails;
        let formData = new FormData();
        formData.append("product", image);
        await fetch('http://localhost:4000/upload', {
            method: "POST",
            headers: {
                Accept: "application/json",

            },
            body: formData,
        }).then((resp) => resp.json()).then((data) => {
            responseData = data
        })
        if (responseData.success) {
            product.image = responseData.image_url
            console.log(product)
            await fetch('http://localhost:4000/addproduct', {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(product),
            }).then((resp) => resp.json()).then((data) => {
                (data.success) ? alert("Product Added") : alert("Failed")
            })
        }
    }

    return (
        <div className='add-product'>
            <div className='add-product-itemfield'>
                <p>Product Title</p>
                <input value={productDetails.name} type='text' name='name' onChange={changeHandler}
                       placeholder='Type here'/>
            </div>
            <div className='add-product-itemfield'>
                <p>Product Description</p>
                <input value={productDetails.description} type='text' name='description' onChange={changeHandler}
                       placeholder='Type here'/>
            </div>
            <div className='addproduct-price'>
                <div className='add-product-itemfield'>
                    <p>Old price</p>
                    <input value={productDetails.old_price} type='text' name='old_price' onChange={changeHandler}
                           placeholder='Type here'/>
                </div>
                <div className='add-product-itemfield'>
                    <p>New price</p>
                    <input value={productDetails.new_price} type='text' name='new_price' onChange={changeHandler}
                           placeholder='Type here'/>
                </div>
            </div>
            <div className='add-product-itemfield'>
                <p>Product Category</p>
                <select value={productDetails.category} name='category' className='addproduct-selector'
                        onChange={changeHandler}>
                    <option value="women">women</option>
                    <option value="men">men</option>
                </select>
            </div>
            <div className='add-product-itemfield'>
                <p>Product Type</p>
                <select value={productDetails.type} name='type' className='addproduct-selector'
                        onChange={changeHandler}>
                    <option value="parfum">parfum</option>
                    <option value="toilet">toilet</option>
                </select>
            </div>
            <div className='add-product-itemfield'>
                <label htmlFor='file-input'>
                    <img src={image ? URL.createObjectURL(image) : upload_area} className='addproduct-thumnail-img'
                         alt=''/>
                </label>
                <input onChange={imageHandler} type='file' id='file-input' name='image' hidden/>
            </div>
            <button onClick={() => {
                Add_Product()
            }} className='addproduct-btn' type='submit'>Add Product
            </button>
        </div>
    )
}
export default AddProduct
