import React from "react";
import Link from "next/link";
import Image from "next/image";
const ShopProduct = ({ products }) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  console.log(products);
  return (
    <section className="main-shop">
      <div className="shop-flex">
        {products.map(({ attributes }) => {
          return (
            <div
              className="product"
              key={attributes.createdAt}>
              <div className="img-wraper">
                <Image
                        width={500} 
                        
                
                height={20}
                  src={`http://16.16.211.34${attributes.img.data[0].attributes.url}`}
                  alt=""
                />
              </div>
              <div className="details" >
                <h3>{attributes.Product_Name}</h3>
                <p >{attributes.Product_description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ShopProduct;
