import React from 'react'
import "./Home.css";
import prod from "../../src/assets/image-product-1.jpg";
import prod1 from "../../src/assets/image-product-1-thumbnail.jpg";
import prod2 from "../../src/assets/image-product-2-thumbnail.jpg";
import prod3 from "../../src/assets/image-product-3-thumbnail.jpg";
import prod4 from "../../src/assets/image-product-4-thumbnail.jpg";

export default function Home() {
  return (
    <div className="single-product-main-content">
    <div className="layout">
        <div className="single-product-page">
            <div className="left">
                <img src={prod} alt="" />
                <div className="related">
                    <img src={prod1} alt="" />
                    <img src={prod2} alt="" />
                    <img src={prod3} alt="" />
                    <img src={prod4} alt="" />
                </div>
            </div>
            <div className="right">
                <span className="brand">SNEAKER COMPANY</span>
                <span className="name">Fall Limited Edition Sneaker</span>
                <span className="desc">These low-profile sneakers are your perfect casual wear compansion. Featuring a durable rubber outer sole. they'll withstand everthing the weather can offer.</span>
                <span className="price">$125.00<span className='discount'>50%</span></span>
                <span className="Total-price">$250.00</span>
                <div className="cart-buttons">
                    <div className="quantity-buttons">
                        <span>-</span>
                        <span>0</span>
                        <span>+</span>
                    </div>
                    <button className="add-to-cart-button">
                    <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fill-rule="nonzero"/></svg><span className='space'>ADD TO CART</span>
                    </button>
                </div>
            </div>
            <div className="footer">
                
            </div>
        </div>
    </div>
</div>
  )
}
